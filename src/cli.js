import { buildDoPrompt, buildIdeaPrompt, buildShipPrompt } from "./prompts.js";
import { ensureState, approveLatestPlan, readApprovedPlan, saveLatestPlan, writeTrace } from "./state.js";
import { parseOptions, resolveEngine, runEngine } from "./engine.js";
import { isApproval, parseCommand, requireInput, validatePrompt, wantsLatestPlan } from "./gates.js";
import { installIntegrations } from "./integrations.js";
import { selectIntegrationTargets } from "./select.js";

export async function runCli(rawArgs) {
  const { options, rest } = parseOptions(rawArgs);
  const { command, input } = parseCommand(rest);
  requireInput(command, input);
  await ensureState();

  if (command === "install") {
    const requestedTargets = input
      .split(/\s+/)
      .filter(Boolean)
      .filter((arg) => !arg.startsWith("--"));
    const targets = input.includes("--all") || requestedTargets.length
      ? (requestedTargets.length ? requestedTargets : ["all"])
      : await selectIntegrationTargets();
    const files = await installIntegrations({ targets });
    console.log("open project integrations installed:");
    for (const file of files) console.log(`- ${file.status} (${file.scope}): ${file.path}`);
    return;
  }

  if (command === "/idea" && isApproval(input)) {
    const file = await approveLatestPlan();
    console.log(`Approved latest plan: ${file}`);
    return;
  }

  const approvedPlan = command === "/do" && wantsLatestPlan(input) ? await readApprovedPlan() : "";
  const task = approvedPlan ? "Build the latest approved idea plan." : input;
  const prompt = command === "/idea"
    ? buildIdeaPrompt(input)
    : command === "/do"
      ? buildDoPrompt(task, approvedPlan)
      : buildShipPrompt();

  validatePrompt(prompt);
  const trace = await writeTrace(command.slice(1), prompt);

  if (options.dryRun) {
    if (command === "/idea") await saveLatestPlan(prompt);
    console.log(prompt);
    console.log(`\nTrace: ${trace}`);
    return;
  }

  const engine = resolveEngine(options.engine);
  const result = await runEngine(engine, prompt);

  if (command === "/idea") await saveLatestPlan(result.output || prompt);

  console.log(result.output);
  console.log(`\nEngine: ${engine.engine}`);
  console.log(`Trace: ${trace}`);

  if (result.code) process.exitCode = result.code;
}
