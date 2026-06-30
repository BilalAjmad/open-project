import { mkdir, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname } from "node:path";

const COMMAND_BRIDGE = `Use the local open project CLI for this command.

Run the matching terminal command from the project root and follow the generated mission prompt:

\`\`\`bash
open-project {command} "$ARGUMENTS"
\`\`\`

If this AI coding tool cannot execute shell commands, read the generated prompt from the terminal output and follow it exactly.
`;

const AGENT_RULES = `# open project integration

This repository uses open project.

When the user asks for idea planning, building, fixing, reviewing, or shipping:

- Prefer \`open-project /idea "..."\` for raw ideas and production-ready plans.
- Prefer \`open-project /do "..."\` for build/fix/refactor/research implementation work.
- Prefer \`open-project /ship\` for final production readiness review.
- Respect the target technology date: 30/6/2026.
- Do not require an AI API key from open project.
- Use the installed AI coding tool as the actual model/executor.
- Every non-trivial code change needs the smallest runnable check.
- Code-writing agents must self-review every line before keeping it.
`;

const RULE_FILE = `---
description: open project AI employee swarm rules
alwaysApply: true
---

${AGENT_RULES}
`;

async function writeText(path, content) {
  await mkdir(dirname(path), { recursive: true });
  try {
    await writeFile(path, content, { encoding: "utf8", flag: "wx" });
    return "created";
  } catch (error) {
    if (error && error.code === "EEXIST") return "skipped";
    throw error;
  }
}

export const INTEGRATION_TARGETS = [
  { id: "claude", label: "Claude Code slash commands" },
  { id: "codex", label: "Codex global instructions" },
  { id: "opencode", label: "OpenCode instructions" },
  { id: "cursor", label: "Cursor rules" },
  { id: "windsurf", label: "Windsurf rules" },
  { id: "copilot", label: "GitHub Copilot instructions" },
  { id: "continue", label: "Continue rules" },
  { id: "gemini", label: "Gemini CLI instructions" },
  { id: "qwen", label: "Qwen Code instructions" },
  { id: "common", label: "Common project instruction files" }
];

function selectedSet(targets) {
  if (!targets || targets.length === 0 || targets.includes("all")) {
    return new Set(INTEGRATION_TARGETS.map((target) => target.id));
  }
  return new Set(targets);
}

function projectFiles(targets) {
  const selected = selectedSet(targets);
  const files = {};

  if (selected.has("claude")) {
    Object.assign(files, {
    ".claude/commands/idea.md": COMMAND_BRIDGE.replace("{command}", "/idea"),
    ".claude/commands/do.md": COMMAND_BRIDGE.replace("{command}", "/do"),
    ".claude/commands/ship.md": COMMAND_BRIDGE.replace("{command}", "/ship")
    });
  }
  if (selected.has("cursor")) files[".cursor/rules/open-project.mdc"] = RULE_FILE;
  if (selected.has("windsurf")) files[".windsurf/rules/open-project.md"] = RULE_FILE;
  if (selected.has("copilot")) files[".github/copilot-instructions.md"] = AGENT_RULES;
  if (selected.has("continue")) files[".continue/rules/open-project.md"] = AGENT_RULES;
  if (selected.has("opencode")) files[".opencode/AGENTS.md"] = AGENT_RULES;
  if (selected.has("common") || selected.has("claude")) files["CLAUDE.md"] = AGENT_RULES;
  if (selected.has("common") || selected.has("gemini")) files["GEMINI.md"] = AGENT_RULES;
  if (selected.has("common") || selected.has("qwen")) files["QWEN.md"] = AGENT_RULES;

  return files;
}

function globalFiles(home = homedir(), targets) {
  const selected = selectedSet(targets);
  const files = {};

  if (selected.has("claude")) {
    Object.assign(files, {
    [`${home}/.claude/commands/idea.md`]: COMMAND_BRIDGE.replace("{command}", "/idea"),
    [`${home}/.claude/commands/do.md`]: COMMAND_BRIDGE.replace("{command}", "/do"),
    [`${home}/.claude/commands/ship.md`]: COMMAND_BRIDGE.replace("{command}", "/ship"),
    [`${home}/.claude/commands/open-project-idea.md`]: COMMAND_BRIDGE.replace("{command}", "/idea"),
    [`${home}/.claude/commands/open-project-do.md`]: COMMAND_BRIDGE.replace("{command}", "/do"),
    [`${home}/.claude/commands/open-project-ship.md`]: COMMAND_BRIDGE.replace("{command}", "/ship")
    });
  }
  if (selected.has("codex")) files[`${home}/.codex/AGENTS.md`] = AGENT_RULES;
  if (selected.has("opencode")) {
    files[`${home}/.opencode/AGENTS.md`] = AGENT_RULES;
    files[`${home}/.config/opencode/AGENTS.md`] = AGENT_RULES;
  }
  if (selected.has("cursor")) files[`${home}/.cursor/rules/open-project.mdc`] = RULE_FILE;
  if (selected.has("windsurf")) files[`${home}/.windsurf/rules/open-project.md`] = RULE_FILE;
  if (selected.has("continue")) files[`${home}/.continue/rules/open-project.md`] = AGENT_RULES;
  if (selected.has("gemini")) files[`${home}/.gemini/GEMINI.md`] = AGENT_RULES;
  if (selected.has("qwen")) files[`${home}/.qwen/QWEN.md`] = AGENT_RULES;

  return files;
}

export async function installIntegrations({ home = homedir(), includeGlobal = true, targets = ["all"] } = {}) {
  const files = {
    ...projectFiles(targets),
    ...(includeGlobal ? globalFiles(home, targets) : {})
  };

  const result = [];
  for (const [path, content] of Object.entries(files)) {
    const scope = path.startsWith(home) ? "global" : "project";
    result.push({ path, scope, status: await writeText(path, content) });
  }

  return result;
}
