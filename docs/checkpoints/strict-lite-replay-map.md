# Strict-Lite Replay Map

Muc tieu: replay UI theo checkpoint lich su cho cac prompt co doi code lon, de anh minh hoa gan sat moc thay doi thuc te.

## Prompt ranges va checkpoint

1. DOM bugfix milestone
- Prompt: `P21-P25`
- Checkpoint commit: `7946abc`
- Ly do: day la moc commit chot thay doi DOM validation/edge/regression/report panel.

2. DOM read/refactor + React/PDF migration milestone
- Prompt: `P28-P29`, `P36-P55`
- Checkpoint commit: `609c5b5`
- Ly do: day la moc commit lon gom code thay doi cho cac prompt nay.

## Luu y gioi han

- Strict-lite khong phai strict-per-prompt commit.
- Mot so prompt duoc tao trong cung mot commit lich su, nen replay dung theo checkpoint gom nhom.
- Anh van duoc dat data rieng theo prompt de de doi chieu trong tai lieu.

## Lenh replay

- Full runtime (tat ca prompt):
  - `npm run replay:ui`

- Replay theo khoang:
  - `START_PROMPT=21 END_PROMPT=25 npm run replay:ui`
  - `START_PROMPT=36 END_PROMPT=55 npm run replay:ui`
