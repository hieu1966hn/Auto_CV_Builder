#!/usr/bin/env bash
set -euo pipefail

BASE_REF="${1:-origin/main}"
TARGET_REF="${2:-HEAD}"

if ! git rev-parse --verify "${BASE_REF}" >/dev/null 2>&1; then
  echo "Error: base ref '${BASE_REF}' not found."
  exit 1
fi

if ! git rev-parse --verify "${TARGET_REF}" >/dev/null 2>&1; then
  echo "Error: target ref '${TARGET_REF}' not found."
  exit 1
fi

DIFF_OUTPUT="$(git diff --name-status "${BASE_REF}...${TARGET_REF}")"

if [ -z "${DIFF_OUTPUT}" ]; then
  echo "Drift level: small"
  echo "Changed files: 0"
  echo "Core-structure changes: 0"
  echo "Status: branch is aligned with ${BASE_REF}."
  exit 0
fi

CHANGED_COUNT="$(printf '%s\n' "${DIFF_OUTPUT}" | sed '/^$/d' | wc -l | tr -d ' ')"
ADD_COUNT="$(printf '%s\n' "${DIFF_OUTPUT}" | grep -c '^A' || true)"
MOD_COUNT="$(printf '%s\n' "${DIFF_OUTPUT}" | grep -c '^M' || true)"
DEL_COUNT="$(printf '%s\n' "${DIFF_OUTPUT}" | grep -c '^D' || true)"

CORE_PATTERN='^[ADM][[:space:]]+(src/|public/|package\.json$|package-lock\.json$|next\.config\.ts$|tsconfig\.json$|README\.md$)'
CORE_COUNT="$(printf '%s\n' "${DIFF_OUTPUT}" | grep -E -c "${CORE_PATTERN}" || true)"

DRIFT_LEVEL="small"
if [ "${CHANGED_COUNT}" -gt 25 ] || [ "${CORE_COUNT}" -gt 10 ]; then
  DRIFT_LEVEL="large"
elif [ "${CHANGED_COUNT}" -gt 8 ] || [ "${CORE_COUNT}" -gt 0 ]; then
  DRIFT_LEVEL="medium"
fi

echo "Base ref: ${BASE_REF}"
echo "Target ref: ${TARGET_REF}"
echo "Drift level: ${DRIFT_LEVEL}"
echo "Changed files: ${CHANGED_COUNT} (A:${ADD_COUNT} M:${MOD_COUNT} D:${DEL_COUNT})"
echo "Core-structure changes: ${CORE_COUNT}"
echo
echo "Top changes:"
printf '%s\n' "${DIFF_OUTPUT}" | head -n 20
