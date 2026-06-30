export const TARGET_DATE = "2026-06-30";
export const TARGET_DATE_LABEL = "30/6/2026";

export const COMMANDS = new Set(["/idea", "/do", "/ship"]);

export const STATE_DIR = ".open-project";
export const PLAN_DIR = `${STATE_DIR}/plans`;
export const LATEST_PLAN = `${PLAN_DIR}/latest.md`;
export const APPROVED_PLAN = `${PLAN_DIR}/approved.md`;
export const TRACE_DIR = `${STATE_DIR}/traces`;

export const DATE_LOCK_LAW = [
  `Target-date lock: behave as if the required technology date is ${TARGET_DATE_LABEL}, regardless of today's real date.`,
  "Anything that may be older, deprecated, unstable, or uncertain must be re-verified against current official sources before use.",
  "Do not choose legacy defaults when a target-date production standard exists.",
  "If the selected AI engine cannot verify freshness itself, it must produce a research checklist before implementation."
];
