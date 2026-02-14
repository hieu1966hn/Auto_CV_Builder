# Checkpoint Log

Store one file per teaching round in this folder.

Filename format:
- `YYYYMMDD-HHMMSS.md`

Minimum fields (required):
- Step
- Core files touched
- Teaching reason
- Change level this round (`small` / `medium` / `large`)

Recommended command flow:
1. Review current diff: `git diff --name-status <checkpoint-ref>...HEAD`
2. Create checkpoint file:
   `bash scripts/new_checkpoint.sh "<step>" "<files>" "<teaching reason>" "<change-level>"`
3. Add optional notes and commit with lesson changes.

Phase rollback map:
- See `docs/checkpoints/phase-checkpoints.md` for named git checkpoints (`phase-dom-p25`, `phase-react-p52`, `phase-pdf-p60`).
