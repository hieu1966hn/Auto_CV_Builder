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
- Keep `ui` optional; do not duplicate the same UI image across many prompts unless explicitly marked as baseline only.
- Do not capture final book images from raw `docs/prompt-results/*.md` previews.

Rule for React/PDF runtime prompts:
- Prefer real runtime UI screenshots from `npm run dev` (e.g. P45, P55).
- If a browser capture is blank/dark, recapture after waiting for `GET / 200` in dev log.

Examples:
- `P00-ui-01-current-state.png`
- `P03-code-01-initial-form.png`
- `P03-ui-01-empty-preview.png`
- `P03-ui-02-after-input.png`
- `P03-err-01-script-path-404.png`
