# Demo Branch Alignment Policy

## 1) Goal and Priority
- Long-term goal: keep this workspace close to the project baseline reference.
- Short-term goal: keep `cv-builder` useful for teaching the Vibe Coding loop:
  `Prompt -> Code -> Run -> Test -> Bug -> Read code -> Fix -> Re-test`.
- Conflict rule: if teaching flow conflicts with immediate alignment, prioritize teaching flow.
- Alignment window: perform reconciliation every round, not only at milestones.

## 2) Operating Rules Per Round
- Every code change must map to a teaching objective.
- Keep diffs local. Avoid wide repo changes for single-topic lessons.
- After each round, record:
  - current step in the loop
  - core files touched
  - teaching reason
  - drift level vs baseline (`small` / `medium` / `large`)
- If drift grows across multiple rounds, add a reconciliation note immediately.

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

## 5) Reconciliation Routine (Each Round)
- During each round:
  - review `git diff --name-status origin/HEAD...HEAD`
  - separate lesson-only changes from durable product changes
  - apply the smallest correction needed to stay near baseline
- If a requested lesson conflicts with alignment target, confirm with user before expanding scope.

## 6) Locked Defaults
- Working branch: `cv-builder`
- Baseline reference: `origin/HEAD`
- Default policy: keep teaching flow natural while reconciling each round.
