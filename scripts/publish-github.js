#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: "inherit", shell: process.platform === "win32", ...options });
  if (result.status !== 0) process.exit(result.status || 1);
}

function canRun(command, args = ["--version"]) {
  return spawnSync(command, args, { stdio: "ignore", shell: process.platform === "win32" }).status === 0;
}

if (!canRun("git")) {
  console.error("git is required to publish.");
  process.exit(1);
}

if (!canRun("gh")) {
  console.error("GitHub CLI is required. Install gh and run gh auth login.");
  process.exit(1);
}

if (!canRun("gh", ["auth", "status"])) {
  console.error("GitHub CLI is not authenticated. Run gh auth login.");
  process.exit(1);
}

if (!existsSync(".git")) run("git", ["init"]);

run("git", ["add", "."]);
run("git", ["commit", "-m", "Initial open project release"]);
run("gh", ["repo", "create", "open-project", "--public", "--source", ".", "--remote", "origin", "--push"]);
