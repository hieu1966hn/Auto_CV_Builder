# AutoCV Prompt Execution Journal

Tai lieu nay la noi tong hop chinh de viet sach.
Moi prompt se co:
- thong tin vong chay
- bo anh theo nhom
- mo ta anh nam ngay ben duoi anh

## 1) Quy tac dat ten anh

- Thu muc prompt: `docs/screenshots/prompt-XX/`
- Ten file: `PXX-<group>-YY-<short-name>.png`
- Nhom anh:
- `env`: cai moi truong / dependency
- `tree`: them file/folder moi
- `code`: doan code thay doi
- `ui`: giao dien truoc/sau
- `err`: loi terminal/browser
- `test`: ket qua test/checklist

Vi du:
- `P12-code-01-form-validation.png`
- `P12-ui-01-before-submit.png`
- `P12-ui-02-after-submit.png`
- `P12-err-01-email-invalid.png`
- `P00-ui-01-current-state.png` (anh baseline truoc khi bat dau lo trinh prompt)

## 2) So luong anh de xuat moi prompt

- `env`: 0-2 anh
- `tree`: 0-2 anh
- `code`: 2-5 anh
- `ui`: 2-4 anh
- `err`: 0-N anh (moi loi it nhat 1 anh)
- `test`: 1-3 anh

## 3) Bang theo doi toan bo prompt

| Prompt | Trang thai | Thu muc anh | Ghi chu |
|---|---|---|---|
| P01 | DONE | docs/screenshots/prompt-01/ | ket qua: docs/prompt-results/P01.md |
| P02 | DONE | docs/screenshots/prompt-02/ | ket qua: docs/prompt-results/P02.md |
| P03 | DONE | docs/screenshots/prompt-03/ | ket qua: docs/prompt-results/P03.md |
| P04 | DONE | docs/screenshots/prompt-04/ | ket qua: docs/prompt-results/P04.md |
| P05 | DONE | docs/screenshots/prompt-05/ | ket qua: docs/prompt-results/P05.md |
| P06 | TODO | docs/screenshots/prompt-06/ | |
| P07 | TODO | docs/screenshots/prompt-07/ | |
| P08 | TODO | docs/screenshots/prompt-08/ | |
| P09 | TODO | docs/screenshots/prompt-09/ | |
| P10 | TODO | docs/screenshots/prompt-10/ | |
| P11 | TODO | docs/screenshots/prompt-11/ | |
| P12 | TODO | docs/screenshots/prompt-12/ | |
| P13 | TODO | docs/screenshots/prompt-13/ | |
| P14 | TODO | docs/screenshots/prompt-14/ | |
| P15 | TODO | docs/screenshots/prompt-15/ | |
| P16 | TODO | docs/screenshots/prompt-16/ | |
| P17 | TODO | docs/screenshots/prompt-17/ | |
| P18 | TODO | docs/screenshots/prompt-18/ | |
| P19 | TODO | docs/screenshots/prompt-19/ | |
| P20 | TODO | docs/screenshots/prompt-20/ | |
| P21 | TODO | docs/screenshots/prompt-21/ | |
| P22 | TODO | docs/screenshots/prompt-22/ | |
| P23 | TODO | docs/screenshots/prompt-23/ | |
| P24 | TODO | docs/screenshots/prompt-24/ | |
| P25 | TODO | docs/screenshots/prompt-25/ | |
| P26 | TODO | docs/screenshots/prompt-26/ | |
| P27 | TODO | docs/screenshots/prompt-27/ | |
| P28 | TODO | docs/screenshots/prompt-28/ | |
| P29 | TODO | docs/screenshots/prompt-29/ | |
| P30 | TODO | docs/screenshots/prompt-30/ | |
| P31 | TODO | docs/screenshots/prompt-31/ | |
| P32 | TODO | docs/screenshots/prompt-32/ | |
| P33 | TODO | docs/screenshots/prompt-33/ | |
| P34 | TODO | docs/screenshots/prompt-34/ | |
| P35 | TODO | docs/screenshots/prompt-35/ | |
| P36 | TODO | docs/screenshots/prompt-36/ | |
| P37 | TODO | docs/screenshots/prompt-37/ | |
| P38 | TODO | docs/screenshots/prompt-38/ | |
| P39 | TODO | docs/screenshots/prompt-39/ | |
| P40 | TODO | docs/screenshots/prompt-40/ | |
| P41 | TODO | docs/screenshots/prompt-41/ | |
| P42 | TODO | docs/screenshots/prompt-42/ | |
| P43 | TODO | docs/screenshots/prompt-43/ | |
| P44 | TODO | docs/screenshots/prompt-44/ | |
| P45 | TODO | docs/screenshots/prompt-45/ | |
| P46 | TODO | docs/screenshots/prompt-46/ | |
| P47 | TODO | docs/screenshots/prompt-47/ | |
| P48 | TODO | docs/screenshots/prompt-48/ | |
| P49 | TODO | docs/screenshots/prompt-49/ | |
| P50 | TODO | docs/screenshots/prompt-50/ | |
| P51 | TODO | docs/screenshots/prompt-51/ | |
| P52 | TODO | docs/screenshots/prompt-52/ | |
| P53 | TODO | docs/screenshots/prompt-53/ | |
| P54 | TODO | docs/screenshots/prompt-54/ | |
| P55 | TODO | docs/screenshots/prompt-55/ | |
| P56 | TODO | docs/screenshots/prompt-56/ | |
| P57 | TODO | docs/screenshots/prompt-57/ | |
| P58 | TODO | docs/screenshots/prompt-58/ | |
| P59 | TODO | docs/screenshots/prompt-59/ | |
| P60 | TODO | docs/screenshots/prompt-60/ | |

## 4) Mau block chi tiet cho moi prompt

Sao chep block nay cho tung prompt va thay `PXX` thanh so prompt thuc te.

```md
### Prompt PXX

- Muc tieu:
- Prompt da dung:
- File thay doi:
- Lenh run/test:
- Ket qua:
- Drift danh gia: <small|medium|large>

#### Anh env (neu co)
![PXX env 01](docs/screenshots/prompt-XX/PXX-env-01-example.png)
Mo ta: [PXX] [env] ...

#### Anh tree (neu co)
![PXX tree 01](docs/screenshots/prompt-XX/PXX-tree-01-example.png)
Mo ta: [PXX] [tree] ...

#### Anh code
![PXX code 01](docs/screenshots/prompt-XX/PXX-code-01-example.png)
Mo ta: [PXX] [code] ...

#### Anh ui
![PXX ui 01](docs/screenshots/prompt-XX/PXX-ui-01-example.png)
Mo ta: [PXX] [ui] ...

#### Anh err (neu co)
![PXX err 01](docs/screenshots/prompt-XX/PXX-err-01-example.png)
Mo ta: [PXX] [err] ...

#### Anh test (khuyen nghi)
![PXX test 01](docs/screenshots/prompt-XX/PXX-test-01-example.png)
Mo ta: [PXX] [test] ...
```

## 5) Quy trinh thao tac moi vong

1. Chay 1 prompt tu `docs/autocv-vibe-prompt-pack.md`.
2. Ap dung code -> run -> test -> fix neu can.
3. Chup anh theo nhom phu hop (`env/tree/code/ui/err/test`).
4. Dan block chi tiet Prompt PXX vao tai lieu nay, dat anh va mo ta ngay ben duoi anh.
5. Cap nhat trang thai Prompt PXX trong bang theo doi (TODO -> DONE).

## 6) Runs da hoan thanh (P01-P05)

### Prompt P01
- Muc tieu: Giai thich du an AutoCV cho nguoi moi.
- Prompt da dung: Prompt #01 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P01.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging, chua code).
- Ket qua: Da co mo ta muc tieu, input/output, va cach hieu don gian.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P01 ui 01](docs/screenshots/prompt-01/P01-ui-01-current-state.png)
Mo ta: [P01] [ui] Anh baseline UI tai thoi diem bat dau lo trinh prompt.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P02
- Muc tieu: Phan ra bai toan thanh cac khoi Input/Data/Display/Export/Security.
- Prompt da dung: Prompt #02 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P02.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging, chua code).
- Ket qua: Da co cau truc 5 khoi de hoc vien hieu pham vi he thong.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P02 ui 01](docs/screenshots/prompt-02/P02-ui-01-current-state.png)
Mo ta: [P02] [ui] UI giu nguyen, minh hoa giai doan phan ra bai toan truoc khi coding.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P03
- Muc tieu: Mo ta luong du lieu bang chu.
- Prompt da dung: Prompt #03 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P03.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging, chua code).
- Ket qua: Da co luong chinh input -> state -> preview, kem luong export va bao mat.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P03 ui 01](docs/screenshots/prompt-03/P03-ui-01-current-state.png)
Mo ta: [P03] [ui] UI baseline dung de doi chieu voi data flow duoc mo ta trong prompt.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P04
- Muc tieu: Xac dinh danh sach tinh nang MVP theo uu tien.
- Prompt da dung: Prompt #04 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P04.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging, chua code).
- Ket qua: Da co roadmap MVP -> should-have -> next-stage de dat huong trien khai.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P04 ui 01](docs/screenshots/prompt-04/P04-ui-01-current-state.png)
Mo ta: [P04] [ui] UI hien tai duoc dung lam moc de doi chieu voi danh sach MVP.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P05
- Muc tieu: Tao 10 user stories cho AutoCV.
- Prompt da dung: Prompt #05 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P05.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging, chua code).
- Ket qua: Da co 10 user stories de dung cho backlog va bai giang.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P05 ui 01](docs/screenshots/prompt-05/P05-ui-01-current-state.png)
Mo ta: [P05] [ui] UI baseline cho giai doan xay backlog user stories.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.
