# open project

`open project` is an open-source terminal command layer for turning one simple user request into a strict, production-focused AI coding mission.

It is not an AI model. It is not a hosted SaaS. It does not ask for API keys. It does not secretly call a cloud API.

Instead, it creates high-quality mission prompts and sends them to the AI coding tool or AI IDE the user already has installed, such as Codex, Claude Code, Cursor, Windsurf, GitHub Copilot, Gemini CLI, Qwen Code, OpenCode, Aider, Continue, Ollama, or a custom local command.

## Plain English Explanation

Most people use an AI coder like this:

```text
User: build me an app
AI: writes code immediately
```

That can work for small things, but for serious work the AI often skips planning, forgets edge cases, adds weak code, misses tests, or chooses old libraries.

`open project` changes the shape of the request before the AI coder starts.

It turns this:

```text
/do build me an app
```

into a full production mission:

```text
Understand the goal.
Check assumptions.
Use the required 30/6/2026 technology standard.
Choose the right specialist AI employees.
Split the task into small parts.
Build only what is needed.
Review every line before keeping it.
Run checks.
Report what changed, what passed, and what risk remains.
```

So the project is best understood as:

```text
open project = prompt operating system for AI coding tools
```

It sits before your AI coder and forces a stronger process.

## Why This Exists

Normal AI coding chats are often too loose:

- the user gives a vague task
- the AI starts coding too early
- hidden assumptions become bugs
- old stack choices slip in
- testing is skipped
- security is an afterthought
- final answers sound confident even when checks were not run

`open project` exists to make the AI coder behave more like a serious production team.

It does that by wrapping every task in:

- a mission commander
- research rules
- architecture rules
- specialist employees
- line review rules
- verification gates
- shipping rules

The goal is not to make the interface complicated. The goal is to keep the user command simple while making the AI's internal process much stronger.

## What It Does

`open project` gives the user one install command and three work commands:

```bash
open-project install
open-project /idea "describe the full idea"
open-project /do "build or fix something"
open-project /ship
```

Behind those commands it generates a full AI employee swarm prompt with:

- target-date technology law
- product planning
- architecture planning
- specialist builder roles
- line-by-line self-review rules
- security gates
- test gates
- performance checks
- documentation and release checks

The selected AI coding engine then does the actual thinking, coding, editing, and tool execution.

## What Changes After You Add It

Without `open project`:

```text
You -> AI coder -> code
```

With `open project`:

```text
You -> open project -> target-date locked swarm prompt -> AI coder -> planned/reviewed/checkable output
```

The difference is not that you get a new AI model. The difference is that your existing AI model receives a much stricter, deeper, more production-focused mission.

That means:

- `install` adds project-level AI IDE integration files
- `/idea` helps you turn a rough idea into a serious plan before coding
- `/do` helps the AI coder build with specialist roles and line-review rules
- `/ship` helps verify whether the work is actually ready
- `.open-project/traces/` records the mission prompt that was sent
- `.open-project/plans/approved.md` lets you approve a plan once and build it later

## What It Does Not Do

This project does not magically contain its own artificial intelligence.

It does not:

- include an AI model
- require an AI API key
- replace Codex, Claude Code, Cursor, Windsurf, Copilot, or Ollama
- guarantee bug-free software by itself
- verify official documentation by itself unless the selected AI engine can browse or use tools
- directly edit your target project unless the selected AI coding engine performs those edits

The honest model is:

```text
open project = command router + swarm prompt generator + local state
selected AI coder = actual AI brain and code executor
```

## Can It Build End-to-End Production-Ready Anything?

Honest answer: it can help your selected AI coder build production-ready work, but it cannot guarantee perfect software by itself.

It can produce a much stronger build process because it forces:

- better planning
- current-tech verification
- specialist role coverage
- line-by-line self-review instructions
- test expectations
- security expectations
- final ship checks

But the real output quality still depends on:

- which AI coding engine you use
- whether that engine can edit files
- whether it can browse or verify official docs
- whether tests exist or can be created
- whether the project requirements are clear
- whether the user approves the right plan
- whether the AI actually runs the checks it claims

So the correct claim is:

```text
open project is designed to push AI coding tools toward production-ready output.
It is not a mathematical guarantee that every possible app is perfect on the first try.
```

That honesty matters. A serious production tool should tell you what it can prove and what it cannot.

## Target-Date Law

Every mission is locked to this required technology date:

```text
30/6/2026
```

This means the selected AI coder must behave as if all technology choices, libraries, agent frameworks, MCP patterns, AI IDE behavior, and production practices need to be correct for **30/6/2026**, even if the real current date is different.

If something may be stale, deprecated, or uncertain, the AI coder must verify it against official sources before using it.

## Install Into A Project

There are two install layers.

## One Command Setup

After installing the package, users paste one command in the terminal:

```bash
open-project install
```

This opens an interactive selector:

```text
open project install
Select AI coding tools to integrate:
Space = select, a = all, Enter = install, q = cancel

> [x] Claude Code slash commands
  [x] Codex global instructions
  [x] OpenCode instructions
  [x] Cursor rules
  [x] Windsurf rules
  [x] GitHub Copilot instructions
  [x] Continue rules
  [x] Gemini CLI instructions
  [x] Qwen Code instructions
  [x] Common project instruction files
```

The user can select one, many, or all AI coding tools. Pressing **Space** toggles a tool. Pressing **Enter** installs `open project` into every selected tool.

For users who want everything without the selector:

```bash
open-project install --all
```

For users who want a direct command:

```bash
open-project install claude codex opencode cursor windsurf copilot continue gemini qwen
```

That is the intended setup experience.

### 1. Install The Terminal Command

From this repository:

```bash
npm install -g .
```

This makes the terminal command available:

```bash
open-project
```

### 2. Add AI IDE Integrations To The Current Project And Device

Run this once from any project folder:

```bash
open-project install
```

This opens a terminal selector:

```text
Space = select
a     = select/unselect all
Enter = install
q     = cancel
```

The user chooses which AI coding tools to integrate. Then `open project` installs the selected integrations into both the current project and the user profile.

For fully automatic install into every supported target:

```bash
open-project install --all
```

For direct selected install:

```bash
open-project install claude codex opencode cursor windsurf copilot continue gemini qwen
```

This creates two layers of integration files depending on what was selected.

Project-level files:

```text
.claude/commands/idea.md
.claude/commands/do.md
.claude/commands/ship.md
.cursor/rules/open-project.mdc
.windsurf/rules/open-project.md
.github/copilot-instructions.md
.continue/rules/open-project.md
.opencode/AGENTS.md
CLAUDE.md
GEMINI.md
QWEN.md
```

Device-wide/global files:

```text
~/.claude/commands/idea.md
~/.claude/commands/do.md
~/.claude/commands/ship.md
~/.claude/commands/open-project-idea.md
~/.claude/commands/open-project-do.md
~/.claude/commands/open-project-ship.md
~/.codex/AGENTS.md
~/.opencode/AGENTS.md
~/.config/opencode/AGENTS.md
~/.cursor/rules/open-project.mdc
~/.windsurf/rules/open-project.md
~/.continue/rules/open-project.md
~/.gemini/GEMINI.md
~/.qwen/QWEN.md
```

Existing files are skipped, not overwritten.

After this, tools that understand those files can see the `open project` rules. Claude Code gets slash command files for `/idea`, `/do`, and `/ship`. Other AI IDEs get rules/instruction files that tell them to use `open-project`.

Important: every AI IDE has different extension and command support. `open-project install` adds the safest known project and global files. It cannot force a closed-source IDE to support custom slash commands if that IDE does not expose them.

Practical result:

- Claude Code can show global slash commands like `/idea`, `/do`, and `/ship` after a new session/restart.
- Codex, OpenCode, Gemini, Qwen, Cursor, Windsurf, Continue, and Copilot-style tools receive global/project instruction files where supported.
- If a tool does not support custom slash commands, it can still read the rules and use the terminal command `open-project`.

## The Work Commands

### `/idea`

Use `/idea` when the user has a raw idea and wants a production-ready plan before building.

Example:

```bash
open-project /idea "I want to build an AI SaaS for real estate lead automation"
```

What happens:

1. `open project` builds a planning-swarm prompt.
2. The prompt tells the selected AI coder to clarify only important unknowns.
3. The AI coder creates a production-ready plan.
4. The user can keep improving the plan.
5. When the user likes it, they approve it:

```bash
open-project /idea approve
```

The approved plan is saved locally:

```text
.open-project/plans/approved.md
```

### `/do`

Use `/do` to build, fix, refactor, research, generate, or implement.

Examples:

```bash
open-project /do "fix the login bug"
open-project /do "build a production-ready REST API"
open-project /do latest
```

`/do latest` uses the last approved `/idea` plan.

What happens:

1. `open project` builds an implementation-swarm prompt.
2. The prompt activates the full AI employee army.
3. The selected AI coding engine receives the mission.
4. The AI coder is instructed to split work into micro-tasks.
5. Every code-writing agent must self-review every line before keeping it.
6. The final response must include changed files, checks run, security notes, and remaining risks.

### `/ship`

Use `/ship` for final release readiness.

Example:

```bash
open-project /ship
```

What happens:

1. `open project` creates a production-gate prompt.
2. The AI coder checks tests, docs, security, dependency freshness, release readiness, and rollback notes.
3. The AI coder must not claim production-ready unless all gates pass or gaps are clearly listed.

## AI Employee Army

The project prompt activates these divisions.

There are **61 named AI employee roles** in the current registry.

They are not separate paid models. They are specialist roles inside the mission prompt. The selected AI coder is instructed to simulate or orchestrate these roles while planning and building.

Why so many roles? Because production software is not just "write code." It includes product clarity, research, architecture, security, tests, docs, release readiness, and edge-case thinking.

### Mission Division

- Mission Commander
  Understands the whole task and keeps the work aligned.
- Intent Parser
  Converts vague user language into exact work.
- Scope Lock Agent
  Prevents random extra features and uncontrolled expansion.
- Assumption Detector
  Finds hidden assumptions before they become bugs.
- Ambiguity Resolver
  Marks unclear requirements that need user confirmation.
- Success Criteria Agent
  Defines what "done" means.

### Research Division

- Target-Date Research Agent
  Enforces the 30/6/2026 technology requirement.
- Official Docs Verifier
  Pushes the AI to verify uncertain facts from official sources.
- Dependency Freshness Agent
  Avoids stale or abandoned packages.
- Framework Selection Agent
  Chooses the right framework for the job.
- Horizon Tech Scanner
  Checks whether newer production patterns exist.
- Outdated-Tech Blocker
  Blocks old defaults when better current options exist.

### Product Division

- Product Spec Agent
  Turns ideas into concrete product requirements.
- User Flow Agent
  Maps how users move through the product.
- Acceptance Criteria Agent
  Defines pass/fail behavior for features.
- Edge Case Agent
  Finds unusual but realistic cases.
- UX Requirement Agent
  Adds usability and accessibility expectations.
- Scale Strategy Agent
  Thinks about growth, load, and future expansion.

### Architecture Division

- System Architect
  Designs the whole technical shape.
- Data Architect
  Designs data models, storage, and relationships.
- API Architect
  Designs endpoints, contracts, and service boundaries.
- Agentic Workflow Architect
  Designs AI-agent flows, handoffs, and tool use.
- MCP Architect
  Designs Model Context Protocol tool/resource integration.
- Security Architect
  Designs auth, permission, secrets, and trust boundaries.
- Deployment Architect
  Designs how the system runs in production.
- Observability Architect
  Designs logs, traces, metrics, and debugging visibility.

### Builder Division

- Frontend Production Engineer
  Builds UI, components, accessibility, and responsive behavior.
- Backend Production Engineer
  Builds server logic, APIs, and business rules.
- Database Engineer
  Builds schemas, migrations, and queries.
- Auth Engineer
  Builds login, sessions, roles, and permissions.
- Realtime Engineer
  Builds WebSocket, live sync, or event-driven features.
- Queue Worker Engineer
  Builds background jobs and async processing.
- AI Agent Engineer
  Builds agent logic and AI workflows.
- MCP Tool Engineer
  Builds or connects MCP tools safely.
- DevOps Engineer
  Builds scripts, environments, and deployment setup.
- Mobile Engineer
  Handles mobile app concerns when needed.
- Desktop Engineer
  Handles desktop app concerns when needed.
- Browser Extension Engineer
  Handles extension manifests, permissions, and browser APIs.
- Game Engineer
  Handles game loops, rules, state, and interaction.
- Automation Engineer
  Builds repeatable automation.
- Integration Engineer
  Connects external services and APIs.
- Migration Engineer
  Handles upgrades and data/code migration.

### Code Perfection Division

- Line-Level Self Reviewer
  Forces every generated line through a review loop.
- Simplicity Enforcer
  Removes unnecessary abstractions and boilerplate.
- Edge Case Hunter
  Checks unusual inputs, states, and failure modes.
- Type Safety Agent
  Pushes strong types and safer interfaces where applicable.
- Error Handling Agent
  Ensures real failures are handled clearly.
- Dependency Minimalist
  Blocks unnecessary packages.
- Dead Code Blocker
  Prevents unused code from being added.

### Verification Division

- Unit Test Agent
  Adds small checks for isolated logic.
- Integration Test Agent
  Checks connected pieces together.
- E2E Test Agent
  Checks user-level flows where appropriate.
- Accessibility Test Agent
  Checks keyboard, screen reader, contrast, and UX basics.
- Security Test Agent
  Checks injection, auth, secrets, and unsafe commands.
- Performance Test Agent
  Checks speed, memory, and bottlenecks.
- Regression Agent
  Ensures fixes do not break old behavior.
- CI Agent
  Ensures checks can run automatically.

### Production Division

- Secrets Scanner
  Looks for leaked keys and sensitive data.
- Supply Chain Auditor
  Checks dependency and package risk.
- Release Engineer
  Prepares versioning and release steps.
- Docs Engineer
  Updates README, install, usage, and examples.
- Changelog Agent
  Summarizes changes for users.
- Package Agent
  Checks package metadata and distribution readiness.
- Deployment Readiness Agent
  Checks environment and deploy requirements.
- Final Gatekeeper
  Gives the final pass/fail production judgment.

## How The Swarm Works In Practice

The current version does not spawn 61 separate processes. It creates one strong mission prompt that tells the selected AI coder to apply those 61 roles.

Example:

```bash
open-project /do "build a SaaS dashboard"
```

The CLI generates a prompt that says, in effect:

```text
You are the implementation swarm.
Use the Mission, Research, Product, Architecture, Builder, Code Perfection, Verification, and Production divisions.
Respect the 30/6/2026 target-date law.
Split the task.
Build minimally.
Review every line.
Run checks.
Report risks.
```

Then the selected AI coder receives that prompt.

If you use Codex, Codex handles the actual coding.
If you use Claude Code, Claude Code handles the actual coding.
If you use Cursor or Windsurf, those IDE agents handle the actual coding.
If no engine is found, `open project` prints the prompt so you can paste it into any AI coding tool.

## Normal AI vs open project

| Area | Normal AI coding chat | With `open project` |
| --- | --- | --- |
| User command | Usually vague | Still simple, but converted into a strict mission |
| Planning | Often skipped | Required by `/idea` and embedded in `/do` |
| Tech freshness | Depends on model memory | Target-date law forces verification |
| Specialists | One generic assistant | 61 role swarm prompt |
| Code review | Often after code | Required before keeping each line |
| Tests | Often optional | Non-trivial logic must have checks |
| Security | Often late | Security division included by default |
| Docs | Often forgotten | Docs engineer included |
| Final claim | May overstate confidence | `/ship` must list gaps if not ready |

## Beginner Example

User:

```bash
open-project /idea "I want an app for booking salon appointments"
```

Expected behavior:

```text
open project creates a planning prompt.
The AI coder asks important questions if needed.
It creates a plan: users, salons, services, calendar, payments, admin panel, database, security, tests.
The user improves the plan.
The user approves it.
```

Then:

```bash
open-project /do latest
```

Expected behavior:

```text
The AI coder builds from the approved plan using the full production mission.
```

## Advanced Example

User:

```bash
open-project --engine codex /do "build an MCP-first AI research agent with local approval gates"
```

Expected behavior:

```text
The prompt activates agentic workflow, MCP, security, observability, testing, and production roles.
The selected AI coder should design tools, approval boundaries, trace logs, and tests before claiming completion.
```

## Line-by-Line Code Law

For every line of code the selected AI coder proposes, it receives this rule:

```text
1. Does this line need to exist?
2. Is there a simpler standard-library or platform-native line?
3. Is it correct for edge cases and failure modes?
4. Is it secure at trust boundaries?
5. Is it production-safe for the target date?
6. Does non-trivial logic have the smallest runnable check?
7. Rewrite the line once before keeping it.
```

This is a strict instruction to the AI coder. The current CLI does not mechanically inspect each generated line itself; it forces the selected AI engine to apply this protocol inside the build mission.

After terminal install, run from any project directory:

```bash
open-project /idea "your full idea"
```

## AI Coding Engine Selection

Auto-detection checks common commands on `PATH`.

You can force an engine:

```bash
open-project --engine codex /do "build the approved plan"
open-project --engine claude /do "fix failing tests"
open-project --engine cursor /idea "AI CRM app"
open-project --engine ollama /do "review this local project"
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

For a custom tool:

```bash
set OPEN_PROJECT_CUSTOM_COMMAND=my-ai-cli
open-project --engine custom /do "build this"
```

## What Happens After Installing

After `npm install -g .`, your terminal gets this command:

```bash
open-project
```

When you run it:

1. It reads your slash command.
2. It builds a target-date-locked swarm prompt.
3. It saves a trace in `.open-project/traces/`.
4. It sends the prompt to the selected AI coding engine if available.
5. If no engine is found, it prints the full prompt so you can paste it into any AI IDE or coding agent.

After `open-project install`, your current project and user profile get AI IDE instruction files. That is the part that makes Claude Code/Cursor/Windsurf/Copilot/OpenCode/Codex-style tools aware of `open project`.

## Local State

The tool writes only local project state:

```text
.open-project/plans/latest.md
.open-project/plans/approved.md
.open-project/traces/
```

These files are ignored by git.

## Current Version Truth

Version `0.1.0` is the first working MVP.

It already has:

- the three-command interface
- broad AI coder and AI IDE adapter registry
- target-date law
- employee army registry
- `/idea` approval flow
- `/do latest`
- `/ship` production gate prompt
- local traces
- Node test coverage

It does not yet have:

- a real multi-process swarm runtime
- built-in browser research
- built-in GitHub publishing through the GitHub plugin
- mechanical per-line AST review
- built-in CI workflow generation

Those are future upgrades. The current version is a strong prompt-orchestration layer, not a standalone autonomous software factory.

## Roadmap To A Real Autonomous Runtime

The current MVP is intentionally small. The next production upgrades would be:

1. Mechanical diff scanner that checks every changed line after the AI edits files.
2. Real agent runner that can execute specialist roles as separate turns.
3. Built-in official-doc research connector.
4. GitHub plugin publishing that can create repositories when the connector exposes that permission.
5. CI workflow generator.
6. Project-type templates.
7. Security policy engine for shell commands and MCP tools.
8. Report card scoring for `/ship`.

This roadmap is how `open project` moves from prompt-orchestration toward a true autonomous AI software factory.

## Test

```bash
npm test
```

Expected result:

```text
5 tests passed
0 failed
```

## Publish To GitHub

If the repository already exists on GitHub:

```bash
git remote add origin https://github.com/<owner>/open-project.git
git branch -M main
git push -u origin main
```

If Git asks for credentials, make sure the logged-in account owns the repository.
