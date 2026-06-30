import readline from "node:readline";
import { INTEGRATION_TARGETS } from "./integrations.js";

function render(selected, cursor) {
  process.stdout.write("\x1Bc");
  console.log("open project install");
  console.log("Select AI coding tools to integrate:");
  console.log("Space = select, a = all, Enter = install, q = cancel\n");

  INTEGRATION_TARGETS.forEach((target, index) => {
    const pointer = index === cursor ? ">" : " ";
    const checked = selected.has(target.id) ? "[x]" : "[ ]";
    console.log(`${pointer} ${checked} ${target.label}`);
  });
}

export function selectIntegrationTargets({ input = process.stdin, output = process.stdout } = {}) {
  if (!input.isTTY || !output.isTTY) {
    return Promise.resolve(["all"]);
  }

  readline.emitKeypressEvents(input);
  input.setRawMode(true);

  return new Promise((resolve, reject) => {
    let cursor = 0;
    const selected = new Set(INTEGRATION_TARGETS.map((target) => target.id));

    function done(targets) {
      input.setRawMode(false);
      input.off("keypress", onKeypress);
      process.stdout.write("\n");
      resolve(targets);
    }

    function fail(error) {
      input.setRawMode(false);
      input.off("keypress", onKeypress);
      reject(error);
    }

    function onKeypress(_character, key) {
      try {
        if (key.name === "up") cursor = Math.max(0, cursor - 1);
        if (key.name === "down") cursor = Math.min(INTEGRATION_TARGETS.length - 1, cursor + 1);
        if (key.name === "space") {
          const id = INTEGRATION_TARGETS[cursor].id;
          if (selected.has(id)) selected.delete(id);
          else selected.add(id);
        }
        if (key.name === "a") {
          const allSelected = selected.size === INTEGRATION_TARGETS.length;
          selected.clear();
          if (!allSelected) {
            for (const target of INTEGRATION_TARGETS) selected.add(target.id);
          }
        }
        if (key.name === "return") {
          done(selected.size ? [...selected] : []);
          return;
        }
        if (key.name === "q" || (key.ctrl && key.name === "c")) {
          done([]);
          return;
        }
        render(selected, cursor);
      } catch (error) {
        fail(error);
      }
    }

    input.on("keypress", onKeypress);
    render(selected, cursor);
  });
}
