#!/usr/bin/env bash
set -euo pipefail

STEP="${1:-}"
FILES="${2:-}"
REASON="${3:-}"
DRIFT="${4:-unknown}"

if [ -z "${STEP}" ] || [ -z "${FILES}" ] || [ -z "${REASON}" ]; then
  echo "Usage: bash scripts/new_checkpoint.sh \"<step>\" \"<files>\" \"<teaching reason>\" \"<drift>\""
  exit 1
fi

STAMP="$(date +%Y%m%d-%H%M%S)"
OUT_DIR="docs/checkpoints"
OUT_FILE="${OUT_DIR}/${STAMP}.md"

mkdir -p "${OUT_DIR}"

cat > "${OUT_FILE}" <<EOF
# Checkpoint ${STAMP}

- Step: ${STEP}
- Main files touched: ${FILES}
- Teaching reason: ${REASON}
- Drift vs main: ${DRIFT}
- Drift command: \`git diff --name-status origin/main...HEAD\`
- Notes:
EOF

echo "Created checkpoint: ${OUT_FILE}"
