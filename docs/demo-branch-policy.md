# Demo Branch Alignment Policy

## 1) Goal and Priority
- Long-term goal: keep this workspace close to `origin/main`.
- Short-term goal: keep `cv-builder` useful for teaching the Vibe Coding loop:
  `Prompt -> Code -> Run -> Test -> Bug -> Read code -> Fix -> Re-test`.
- Conflict rule: if teaching flow conflicts with immediate alignment, prioritize teaching flow.
- Alignment window: do larger reconciliation at milestone checkpoints (end of module / end of term).

## 2) Operating Rules Per Round
- Every code change must map to a teaching objective.
- Keep diffs local. Avoid wide repo changes for single-topic lessons.
- After each round, record:
  - current step in the loop
  - main files touched
  - teaching reason
  - drift level vs `main` (`small` / `medium` / `large`)
- If drift grows across multiple rounds, add a reconciliation note to milestone backlog.

## 3) Process Interface
- Input:
  - lesson prompt
  - bug to demonstrate
  - target learning outcome
- Output:
  - minimal code change that demonstrates the intended step
  - short code-reading explanation (where data flows, state owner, why render/update happens)
- Guardrail:
  - no uncontrolled drift growth from round to round

## 4) Drift Classification (Default)
- `small`: <= 8 changed files and no core-structure changes.
- `medium`: 9-25 changed files, or limited core-structure changes.
- `large`: > 25 changed files, or broad core-structure changes.

Core-structure paths:
- `src/`
- `public/`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `README.md`

## 5) Milestone Reconciliation
- Before a milestone close:
  - review `git diff --name-status origin/main...HEAD`
  - separate lesson-only changes from durable product changes
  - plan merge/rework to move branch back near `main`
- If a requested lesson conflicts with alignment target, confirm with user before expanding scope.

## 6) Locked Defaults
- Working branch: `cv-builder`
- Baseline branch: `main` / `origin/main`
- Default policy: prioritize demo flow now, do strong alignment at milestones.
