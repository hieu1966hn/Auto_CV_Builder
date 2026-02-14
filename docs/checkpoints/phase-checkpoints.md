# Phase Checkpoints (Rollback Map)

Muc tieu: co moc quay lui ro rang theo 3 giai doan de day hoc va review.

## Checkpoint list

1. DOM phase checkpoint (`phase-dom-p25`)
- Commit: `558a305`
- Noi dung: ket thuc lo trinh DOM toi P25 (validation + edge data + regression + bug-report panel).

2. React phase checkpoint (`phase-react-p52`)
- Commit: `609c5b5`
- Noi dung: khoi phuc React architecture va bo component cốt loi.

3. PDF phase checkpoint (`phase-pdf-p60`)
- Commit: `69dab5c`
- Noi dung: React/PDF runtime evidence day du (UI that + test log + journal cap nhat).

Branch checkpoints:
- `checkpoint-dom-p25` -> `558a305`
- `checkpoint-react-p52` -> `609c5b5`
- `checkpoint-pdf-p60` -> `69dab5c`

Strict-lite replay map:
- `docs/checkpoints/strict-lite-replay-map.md`

## Cach quay lui nhanh

- Xem checkpoint:
  - `git tag --list 'phase-*'`

- Tao branch moi tu checkpoint DOM:
  - `git switch -c demo-from-dom phase-dom-p25`

- Tao branch moi tu checkpoint React:
  - `git switch -c demo-from-react phase-react-p52`

- Tao branch moi tu checkpoint PDF:
  - `git switch -c demo-from-pdf phase-pdf-p60`

## Cach so sanh giua cac moc

- So sanh DOM -> React:
  - `git diff --name-status phase-dom-p25..phase-react-p52`

- So sanh React -> PDF:
  - `git diff --name-status phase-react-p52..phase-pdf-p60`

## Luu y

- Muc tieu day hoc: rollback theo checkpoint, sau do tiep tuc prompt-loop.
- Muc tieu san pham: branch `cv-builder` van bam sat huong kien truc dich.
