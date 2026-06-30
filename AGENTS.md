# open project agent rules

- The work slash commands are `/idea`, `/do`, and `/ship`.
- The non-slash `install` command opens an AI coding tool selector and writes project-level plus device-wide integration files.
- There is no `/setup` command. Setup is normal package installation, `open-project install`, plus optional `--engine`.
- Never bundle an AI model or require an API key.
- Use the user's installed AI coding engine or AI IDE adapter.
- Every mission is locked to the target technology date: 30/6/2026.
- Anything uncertain or possibly stale must be verified against official sources before implementation.
- Code-writing agents must self-review every line before keeping it.
- Non-trivial logic needs the smallest runnable check.
- Prefer standard library and platform features before adding dependencies.
- Be honest in docs: this project is currently a prompt-orchestration CLI, not a standalone autonomous runtime.
- Do not claim mechanical line-by-line verification unless code actually implements it.
