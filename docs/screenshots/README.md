# Screenshot Naming Guide

Use one folder per prompt:
- `docs/screenshots/prompt-XX/`

Use this filename format:
- `PXX-<group>-YY-<short-name>.png`

Groups:
- `env`: environment setup / dependencies
- `tree`: new file/folder structure
- `code`: code changes
- `ui`: UI changes
- `err`: errors
- `test`: test evidence

Required rule:
- If a prompt changes code, capture at least one `code` image for each changed file.
- Use names like:
- `P21-code-01-index-validation-block.png`
- `P21-code-02-styles-validation-status.png`
- `P21-code-03-scripts-validation-flow.png`

Rule for conceptual prompts (no UI/code runtime change):
- Keep `ui` optional; do not duplicate the same UI image across many prompts unless explicitly marked as initial checkpoint only.
- Do not capture final book images from raw `docs/prompt-results/*.md` previews.

Rule for React/PDF runtime prompts:
- Prefer real runtime UI screenshots from `npm run dev` (e.g. P45, P55).
- If a browser capture is blank/dark, recapture after waiting for `GET / 200` in dev log.

Rule for UI criteria screenshots:
- Neu prompt co phan `Tieu chi test` (hoac `Checklist test` / `Test`), so anh `ui` phai bang so tieu chi.
- Dat ten theo thu tu:
  - `PXX-ui-01-runtime-test-criterion-1.png`
  - `PXX-ui-02-runtime-test-criterion-2.png`
  - ...
- File `PXX-ui-01-runtime-after-prompt.png` duoc giu lai de tuong thich journal (copy tu criterion #1).
- Neu prompt chua co section test ro rang, replay dung mac dinh `3` anh UI (`DEFAULT_UI_CRITERIA=3`).

Replay command (capture UI for all prompts in one run):
- `node scripts/replay_prompt_ui_runtime.mjs`
- Optional range: `START_PROMPT=21 END_PROMPT=25 node scripts/replay_prompt_ui_runtime.mjs`
- Optional default criteria count: `DEFAULT_UI_CRITERIA=3 START_PROMPT=19 END_PROMPT=60 node scripts/replay_prompt_ui_runtime.mjs`
- If replaying from an old checkpoint/worktree, prefer webpack mode:
  - `NEXT_ARGS='dev --webpack -H 127.0.0.1 -p 3100' START_PROMPT=36 END_PROMPT=55 node scripts/replay_prompt_ui_runtime.mjs`

Examples:
- `P00-ui-01-current-state.png`
- `P03-code-01-initial-form.png`
- `P03-ui-01-empty-preview.png`
- `P03-ui-02-after-input.png`
- `P03-err-01-script-path-404.png`
