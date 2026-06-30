import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { delimiter } from "node:path";

export const ENGINE_REGISTRY = {
  codex: {
    label: "OpenAI Codex CLI",
    command: ["codex"],
    kind: "terminal-agent"
  },
  claude: {
    label: "Claude Code",
    command: ["claude"],
    kind: "terminal-agent"
  },
  cursor: {
    label: "Cursor",
    command: ["cursor"],
    kind: "ai-ide"
  },
  windsurf: {
    label: "Windsurf",
    command: ["windsurf"],
    kind: "ai-ide"
  },
  copilot: {
    label: "GitHub Copilot CLI",
    command: ["gh", "copilot"],
    kind: "terminal-agent"
  },
  gemini: {
    label: "Gemini CLI",
    command: ["gemini"],
    kind: "terminal-agent"
  },
  qwen: {
    label: "Qwen Code",
    command: ["qwen"],
    kind: "terminal-agent"
  },
  opencode: {
    label: "OpenCode",
    command: ["opencode"],
    kind: "terminal-agent"
  },
  aider: {
    label: "Aider",
    command: ["aider", "--message"],
    kind: "terminal-agent"
  },
  amp: {
    label: "Amp",
    command: ["amp"],
    kind: "terminal-agent"
  },
  crush: {
    label: "Crush",
    command: ["crush"],
    kind: "terminal-agent"
  },
  continue: {
    label: "Continue",
    command: ["continue"],
    kind: "ai-ide"
  },
  kiro: {
    label: "Kiro",
    command: ["kiro"],
    kind: "ai-ide"
  },
  cline: {
    label: "Cline",
    command: ["cline"],
    kind: "ai-ide"
  },
  roo: {
    label: "Roo Code",
    command: ["roo"],
    kind: "ai-ide"
  },
  trae: {
    label: "Trae",
    command: ["trae"],
    kind: "ai-ide"
  },
  zed: {
    label: "Zed AI",
    command: ["zed"],
    kind: "ai-ide"
  },
  vscode: {
    label: "VS Code",
    command: ["code"],
    kind: "ai-ide"
  },
  jetbrains: {
    label: "JetBrains IDE",
    command: ["idea"],
    kind: "ai-ide"
  },
  ollama: {
    label: "Ollama local model runner",
    command: ["ollama", "run"],
    kind: "local-model"
  }
};

export function parseOptions(args) {
  const options = { engine: process.env.OPEN_PROJECT_ENGINE || "", dryRun: false };
  const rest = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--engine") {
      options.engine = args[index + 1] || "";
      index += 1;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else {
      rest.push(arg);
    }
  }

  return { options, rest };
}

export function commandExists(command) {
  const names = process.platform === "win32" ? [`${command}.cmd`, `${command}.exe`, command] : [command];
  return (process.env.PATH || "").split(delimiter).some((dir) =>
    names.some((name) => existsSync(`${dir}/${name}`))
  );
}

export function detectEngine() {
  for (const [engine, config] of Object.entries(ENGINE_REGISTRY)) {
    if (commandExists(config.command[0])) return engine;
  }
  return "";
}

export function resolveEngine(requested) {
  const engine = requested || detectEngine();
  if (!engine) {
    return { engine: "prompt", command: null };
  }

  if (engine === "custom") {
    const custom = process.env.OPEN_PROJECT_CUSTOM_COMMAND;
    if (!custom) throw new Error("Set OPEN_PROJECT_CUSTOM_COMMAND when using --engine custom.");
    return { engine, command: custom.split(/\s+/) };
  }

  const config = ENGINE_REGISTRY[engine];
  if (!config) throw new Error(`Unknown engine "${engine}".`);
  return { engine, command: config.command };
}

export function runEngine(engineConfig, prompt) {
  if (!engineConfig.command) {
    return Promise.resolve({
      code: 0,
      output: [
        "No supported AI coding engine was found on PATH.",
        "Copy this prompt into Codex, Claude Code, Cursor, Windsurf, Copilot, Ollama, or set --engine.",
        "",
        prompt
      ].join("\n")
    });
  }

  return new Promise((resolve, reject) => {
    const [command, ...baseArgs] = engineConfig.command;
    const child = spawn(command, [...baseArgs, prompt], { shell: process.platform === "win32" });
    let output = "";
    let errorOutput = "";

    child.stdout.on("data", (chunk) => {
      output += chunk;
    });
    child.stderr.on("data", (chunk) => {
      errorOutput += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      resolve({ code, output: output || errorOutput });
    });
  });
}
