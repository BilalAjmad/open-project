# open project integration

This repository uses open project.

When the user asks for idea planning, building, fixing, reviewing, or shipping:

- Prefer `open-project /idea "..."` for raw ideas and production-ready plans.
- Prefer `open-project /do "..."` for build/fix/refactor/research implementation work.
- Prefer `open-project /ship` for final production readiness review.
- Respect the target technology date: 30/6/2026.
- Do not require an AI API key from open project.
- Use the installed AI coding tool as the actual model/executor.
- Every non-trivial code change needs the smallest runnable check.
- Code-writing agents must self-review every line before keeping it.
