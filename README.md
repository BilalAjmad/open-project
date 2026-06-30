# open project

`open project` is a tiny open-source CLI for running a target-date-locked AI employee swarm through the AI coding tool the user already has installed.

It does **not** ship an AI model. It does **not** ask for API keys. It routes production-grade prompts into Codex, Claude Code, Cursor, Windsurf, GitHub Copilot, Ollama, or a custom local command.

## Commands

```bash
open-project /idea "describe your full idea"
open-project /idea approve
open-project /do latest
open-project /do "fix the login bug"
open-project /ship
```

That is the public surface: `/idea`, `/do`, `/ship`.

## Install

```bash
npm install -g .
```

Run from any project folder:

```bash
open-project /idea "build a production-ready SaaS dashboard"
```

Use a specific installed AI coding engine:

```bash
open-project --engine codex /do "build the approved plan"
open-project --engine claude /do "fix failing tests"
open-project --engine ollama /idea "local-first desktop app"
```

Supported adapter names:

```text
codex       OpenAI Codex CLI
claude      Claude Code
cursor      Cursor
windsurf    Windsurf
copilot     GitHub Copilot CLI
gemini      Gemini CLI
qwen        Qwen Code
opencode    OpenCode
aider       Aider
amp         Amp
crush       Crush
continue    Continue
kiro        Kiro
cline       Cline
roo         Roo Code
trae        Trae
zed         Zed AI
vscode      VS Code
jetbrains   JetBrains IDE launcher
ollama      Ollama local model runner
custom      Any command in OPEN_PROJECT_CUSTOM_COMMAND
```

For unsupported tools:

```bash
set OPEN_PROJECT_CUSTOM_COMMAND=my-ai-cli
open-project --engine custom /do "build this"
```

## Target-Date Law

Every generated mission is locked to **30/6/2026** as the required technology date, regardless of today's real date.

The swarm must reject stale defaults, verify uncertain technology against official sources, and avoid old patterns when a production-grade target-date standard exists.

## AI Employee Army

`/idea` activates a planning army for production-ready plans. `/do` activates the implementation army. `/ship` activates final release gates.

The army includes mission, research, product, architecture, builder, code perfection, verification, and production divisions. Code-writing employees must self-review every line before keeping it.

## Line Law

For every line of code the selected AI coder proposes:

1. Does this line need to exist?
2. Is there a simpler standard-library or platform-native line?
3. Is it correct for edge cases and failure modes?
4. Is it secure at trust boundaries?
5. Is it production-safe for 30/6/2026?
6. Does non-trivial logic have the smallest runnable check?
7. Rewrite the line once before keeping it.

## State

`open project` writes local state to:

```text
.open-project/plans/latest.md
.open-project/plans/approved.md
.open-project/traces/
```

Use:

```bash
open-project /idea approve
open-project /do latest
```

to build the last approved plan without copying the whole message.

## Publish To GitHub

When the repo is complete and your machine has GitHub CLI authenticated:

```bash
git init
git add .
git commit -m "Initial open project release"
gh repo create open-project --public --source . --remote origin --push
```

If `gh` is not authenticated, run `gh auth login` first.
