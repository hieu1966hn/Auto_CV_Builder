# Checkpoint Log

Store one file per teaching round in this folder.

Filename format:
- `YYYYMMDD-HHMMSS.md`

Minimum fields (required):
- Step
- Core files touched
- Teaching reason
- Drift vs baseline (`small` / `medium` / `large`)

Recommended command flow:
1. Run drift check: `bash scripts/check_drift.sh`
2. Create checkpoint file:
   `bash scripts/new_checkpoint.sh "<step>" "<files>" "<teaching reason>" "<drift>"`
3. Add optional notes and commit with lesson changes.
