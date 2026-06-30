import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { APPROVED_PLAN, LATEST_PLAN, PLAN_DIR, TRACE_DIR } from "./constants.js";

async function writeText(file, text) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, text, "utf8");
}

async function readText(file) {
  try {
    return await readFile(file, "utf8");
  } catch (error) {
    if (error && error.code === "ENOENT") return "";
    throw error;
  }
}

export async function saveLatestPlan(plan) {
  await writeText(LATEST_PLAN, plan);
}

export async function approveLatestPlan() {
  const latest = await readText(LATEST_PLAN);
  if (!latest.trim()) throw new Error("No latest /idea plan exists to approve.");
  await writeText(APPROVED_PLAN, latest);
  return APPROVED_PLAN;
}

export async function readApprovedPlan() {
  return readText(APPROVED_PLAN);
}

export async function writeTrace(name, content) {
  const safeName = name.replace(/[^a-z0-9.-]+/gi, "-").replace(/^-|-$/g, "");
  const file = `${TRACE_DIR}/${Date.now()}-${safeName || "trace"}.md`;
  await writeText(file, content);
  return file;
}

export async function ensureState() {
  await mkdir(PLAN_DIR, { recursive: true });
  await mkdir(TRACE_DIR, { recursive: true });
}
