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

Rule for conceptual prompts (no UI/code runtime change):
- Keep `ui` optional; do not duplicate the same UI image across many prompts unless explicitly marked as baseline only.
- Do not capture final book images from raw `docs/prompt-results/*.md` previews.

Examples:
- `P00-ui-01-current-state.png`
- `P03-code-01-initial-form.png`
- `P03-ui-01-empty-preview.png`
- `P03-ui-02-after-input.png`
- `P03-err-01-script-path-404.png`
