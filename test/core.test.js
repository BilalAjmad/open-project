import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildDoPrompt, buildIdeaPrompt } from "../src/prompts.js";
import { parseCommand, validatePrompt, wantsLatestPlan } from "../src/gates.js";
import { ENGINE_REGISTRY, resolveEngine } from "../src/engine.js";
import { installIntegrations } from "../src/integrations.js";

test("accepts only the three slash commands", () => {
  assert.deepEqual(parseCommand(["install"]), { command: "install", input: "" });
  assert.deepEqual(parseCommand(["/idea", "make", "app"]), { command: "/idea", input: "make app" });
  assert.deepEqual(parseCommand(["/do", "latest"]), { command: "/do", input: "latest" });
  assert.deepEqual(parseCommand(["/ship"]), { command: "/ship", input: "" });
  assert.throws(() => parseCommand(["/setup"]), /Use one of/);
});

test("prompts carry the target date, no-api-key law, and line review law", () => {
  assert.doesNotThrow(() => validatePrompt(buildIdeaPrompt("build an app")));
  assert.doesNotThrow(() => validatePrompt(buildDoPrompt("build it", "")));
});

test("latest approved plan aliases stay simple", () => {
  assert.equal(wantsLatestPlan("this"), true);
  assert.equal(wantsLatestPlan("latest approved idea"), true);
  assert.equal(wantsLatestPlan("build a crm"), false);
});

test("custom engine uses the user-provided local command", () => {
  process.env.OPEN_PROJECT_CUSTOM_COMMAND = "my-ai-cli";
  const engine = resolveEngine("custom");
  assert.equal(engine.engine, "custom");
  assert.deepEqual(engine.command, ["my-ai-cli"]);
  delete process.env.OPEN_PROJECT_CUSTOM_COMMAND;
});

test("registry covers broad AI coding engines and IDE adapters", () => {
  for (const engine of ["codex", "claude", "cursor", "windsurf", "copilot", "gemini", "qwen", "opencode", "aider", "continue", "ollama"]) {
    assert.ok(ENGINE_REGISTRY[engine], `${engine} missing`);
  }
});

test("installer creates AI IDE integration files without overwriting existing files", async () => {
  const originalCwd = process.cwd();
  const dir = await mkdtemp(join(tmpdir(), "open-project-"));
  const home = await mkdtemp(join(tmpdir(), "open-project-home-"));
  try {
    process.chdir(dir);
    await writeFile("CLAUDE.md", "keep me", "utf8");

    const result = await installIntegrations({ home });
    assert.equal(result.some((file) => file.path === ".claude/commands/idea.md" && file.status === "created"), true);
    assert.equal(result.some((file) => file.path === "CLAUDE.md" && file.status === "skipped"), true);
    assert.equal(result.some((file) => file.path.endsWith("/.claude/commands/idea.md") && file.scope === "global"), true);
    assert.equal(result.some((file) => file.path.endsWith("/.codex/AGENTS.md") && file.scope === "global"), true);
    assert.match(await readFile(".cursor/rules/open-project.mdc", "utf8"), /30\/6\/2026/);
    assert.match(await readFile(join(home, ".claude/commands/do.md"), "utf8"), /open-project \/do/);
    assert.equal(await readFile("CLAUDE.md", "utf8"), "keep me");
  } finally {
    process.chdir(originalCwd);
    await rm(dir, { recursive: true, force: true });
    await rm(home, { recursive: true, force: true });
  }
});

test("installer can target selected AI coding tools", async () => {
  const originalCwd = process.cwd();
  const dir = await mkdtemp(join(tmpdir(), "open-project-selected-"));
  const home = await mkdtemp(join(tmpdir(), "open-project-selected-home-"));
  try {
    process.chdir(dir);

    const result = await installIntegrations({ home, targets: ["claude", "opencode"] });
    assert.equal(result.some((file) => file.path === ".claude/commands/do.md"), true);
    assert.equal(result.some((file) => file.path === ".opencode/AGENTS.md"), true);
    assert.equal(result.some((file) => file.path === ".cursor/rules/open-project.mdc"), false);
    assert.match(await readFile(join(home, ".opencode/AGENTS.md"), "utf8"), /open project/);
  } finally {
    process.chdir(originalCwd);
    await rm(dir, { recursive: true, force: true });
    await rm(home, { recursive: true, force: true });
  }
});
