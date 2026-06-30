import test from "node:test";
import assert from "node:assert/strict";
import { buildDoPrompt, buildIdeaPrompt } from "../src/prompts.js";
import { parseCommand, validatePrompt, wantsLatestPlan } from "../src/gates.js";
import { ENGINE_REGISTRY, resolveEngine } from "../src/engine.js";

test("accepts only the three slash commands", () => {
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
