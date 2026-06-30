import { COMMANDS, TARGET_DATE_LABEL } from "./constants.js";

export function parseCommand(argv) {
  const command = argv[0];
  if (!COMMANDS.has(command)) {
    throw new Error(`Use one of: ${[...COMMANDS].join(", ")}`);
  }
  return { command, input: argv.slice(1).join(" ").trim() };
}

export function requireInput(command, input) {
  if (command === "/ship") return;
  if (!input) throw new Error(`${command} needs text after it.`);
}

export function validatePrompt(prompt) {
  const required = [TARGET_DATE_LABEL, "No hidden API key", "Every line"];
  const lowerPrompt = prompt.toLowerCase();
  const missing = required.filter((text) => !lowerPrompt.includes(text.toLowerCase()));
  if (missing.length) {
    throw new Error(`Internal prompt missed required law(s): ${missing.join(", ")}`);
  }
}

export function isApproval(input) {
  return /^(approve|approved|final|yeh plan final hai|plan final)$/i.test(input.trim());
}

export function wantsLatestPlan(input) {
  return /^(this|latest|latest approved idea|approved plan|yeh wala banwo)$/i.test(input.trim());
}
