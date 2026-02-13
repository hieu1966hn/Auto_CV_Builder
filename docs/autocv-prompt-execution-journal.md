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
| P06 | DONE | docs/screenshots/prompt-06/ | ket qua: docs/prompt-results/P06.md |
| P07 | DONE | docs/screenshots/prompt-07/ | ket qua: docs/prompt-results/P07.md |
| P08 | DONE | docs/screenshots/prompt-08/ | ket qua: docs/prompt-results/P08.md |
| P09 | DONE | docs/screenshots/prompt-09/ | ket qua: docs/prompt-results/P09.md |
| P10 | DONE | docs/screenshots/prompt-10/ | ket qua: docs/prompt-results/P10.md |
| P11 | DONE | docs/screenshots/prompt-11/ | ket qua: docs/prompt-results/P11.md |
| P12 | DONE | docs/screenshots/prompt-12/ | ket qua: docs/prompt-results/P12.md |
| P13 | DONE | docs/screenshots/prompt-13/ | ket qua: docs/prompt-results/P13.md |
| P14 | DONE | docs/screenshots/prompt-14/ | ket qua: docs/prompt-results/P14.md |
| P15 | DONE | docs/screenshots/prompt-15/ | ket qua: docs/prompt-results/P15.md |
| P16 | DONE | docs/screenshots/prompt-16/ | ket qua: docs/prompt-results/P16.md |
| P17 | DONE | docs/screenshots/prompt-17/ | ket qua: docs/prompt-results/P17.md |
| P18 | DONE | docs/screenshots/prompt-18/ | ket qua: docs/prompt-results/P18.md |
| P19 | DONE | docs/screenshots/prompt-19/ | ket qua: docs/prompt-results/P19.md |
| P20 | DONE | docs/screenshots/prompt-20/ | ket qua: docs/prompt-results/P20.md |
| P21 | DONE | docs/screenshots/prompt-21/ | ket qua: docs/prompt-results/P21.md |
| P22 | DONE | docs/screenshots/prompt-22/ | ket qua: docs/prompt-results/P22.md |
| P23 | DONE | docs/screenshots/prompt-23/ | ket qua: docs/prompt-results/P23.md |
| P24 | DONE | docs/screenshots/prompt-24/ | ket qua: docs/prompt-results/P24.md |
| P25 | DONE | docs/screenshots/prompt-25/ | ket qua: docs/prompt-results/P25.md |
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
6. Neu prompt co doi code, bat buoc co anh `code` theo tung file thay doi.

## 5.1) Luu y cho prompt mang tinh khai niem

- Neu prompt chua tao thay doi giao dien/chay code, uu tien ghi ro \"khong co thay doi UI\" thay vi tao anh phu khong can thiet.
- Anh `ui` chi dung khi co thay doi giao dien that su, hoac danh dau ro la baseline.

Cap nhat quy trinh:
- Anh render tu `docs/prompt-results/*.md` khong dung cho bo anh cuoi de viet sach.

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

## 7) Runs da hoan thanh (P06-P10)

### Prompt P06
- Muc tieu: Tao checklist test thu cong cho MVP.
- Prompt da dung: Prompt #06 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P06.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging/testing tai lieu).
- Ket qua: Da co checklist test buoc-qua-buoc cho nguoi moi.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P06 ui 01](docs/screenshots/prompt-06/P06-ui-01-current-state.png)
Mo ta: [P06] [ui] UI baseline cho bo checklist test thu cong.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P07
- Muc tieu: Liet ke loi thuong gap de hoc vien nhan dien nhanh.
- Prompt da dung: Prompt #07 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P07.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging/testing tai lieu).
- Ket qua: Da co danh sach 15 loi thuong gap lam khung debug.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P07 ui 01](docs/screenshots/prompt-07/P07-ui-01-current-state.png)
Mo ta: [P07] [ui] UI baseline dung cho bai hoc nhan dien loi thuong gap.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P08
- Muc tieu: Dinh nghia Definition of Done cho MVP.
- Prompt da dung: Prompt #08 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P08.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging/testing tai lieu).
- Ket qua: Da co bo tieu chi pass/fail cho MVP AutoCV.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P08 ui 01](docs/screenshots/prompt-08/P08-ui-01-current-state.png)
Mo ta: [P08] [ui] UI baseline de doi chieu voi DoD da xac lap.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P09
- Muc tieu: Tao bang test case co cau truc.
- Prompt da dung: Prompt #09 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P09.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging/testing tai lieu).
- Ket qua: Da co bang test case co ID, buoc test, ket qua mong doi, uu tien.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P09 ui 01](docs/screenshots/prompt-09/P09-ui-01-current-state.png)
Mo ta: [P09] [ui] UI baseline de map tung test case voi man hinh that.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P10
- Muc tieu: Chot 5 regression test quan trong phai chay lai.
- Prompt da dung: Prompt #10 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P10.md` (khong doi source code web).
- Lenh run/test: N/A (vong engaging/testing tai lieu).
- Ket qua: Da co top 5 regression test co the dung lap lai moi vong sua bug.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P10 ui 01](docs/screenshots/prompt-10/P10-ui-01-current-state.png)
Mo ta: [P10] [ui] UI baseline cho bo regression test xuyen suot cac vong lap.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

## 8) Runs da hoan thanh (P11-P15)

### Prompt P11
- Muc tieu: Giai thich 6 khai niem co ban qua vi du AutoCV.
- Prompt da dung: Prompt #11 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P11.md` (khong doi source code web).
- Lenh run/test: N/A (vong code-reading tai lieu).
- Ket qua: Da co khung khai niem Input/State/Binding/Render/Event/Validate.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P11 ui 01](docs/screenshots/prompt-11/P11-ui-01-current-state.png)
Mo ta: [P11] [ui] UI baseline dung de gan vi du cho cac khai niem co ban.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P12
- Muc tieu: De xuat thu tu doc code cho nguoi moi.
- Prompt da dung: Prompt #12 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P12.md` (khong doi source code web).
- Lenh run/test: N/A (vong code-reading tai lieu).
- Ket qua: Da co thu tu doc `index.html` -> `scripts/scripts.js` -> `styles.css`.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P12 ui 01](docs/screenshots/prompt-12/P12-ui-01-current-state.png)
Mo ta: [P12] [ui] UI baseline de doi chieu voi file mapping khi doc code.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P13
- Muc tieu: Tao bo cau hoi tu kiem tra khi doc code.
- Prompt da dung: Prompt #13 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P13.md` (khong doi source code web).
- Lenh run/test: N/A (vong code-reading tai lieu).
- Ket qua: Da co 12 cau hoi de lan data flow va debug.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P13 ui 01](docs/screenshots/prompt-13/P13-ui-01-current-state.png)
Mo ta: [P13] [ui] UI baseline de hoc vien map cau hoi vao man hinh that.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P14
- Muc tieu: Minh hoa bug "preview khong cap nhat" va cach lan tim.
- Prompt da dung: Prompt #14 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P14.md` (khong doi source code web).
- Lenh run/test: N/A (vong code-reading tai lieu).
- Ket qua: Da co quy trinh 5 buoc khoanh vung nguyen nhan bug.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P14 ui 01](docs/screenshots/prompt-14/P14-ui-01-current-state.png)
Mo ta: [P14] [ui] UI baseline de mo ta hien tuong preview khong cap nhat.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P15
- Muc tieu: Tao template ghi chu doc code tai su dung.
- Prompt da dung: Prompt #15 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P15.md` (khong doi source code web).
- Lenh run/test: N/A (vong code-reading tai lieu).
- Ket qua: Da co template 9 dong de doc file co he thong.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P15 ui 01](docs/screenshots/prompt-15/P15-ui-01-current-state.png)
Mo ta: [P15] [ui] UI baseline cho bai hoc ghi chu doc code.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

## 9) Runs da hoan thanh (P16-P20)

### Prompt P16
- Muc tieu: Tao roadmap 8 vong lap cho giai doan creating.
- Prompt da dung: Prompt #16 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P16.md` (khong doi source code web).
- Lenh run/test: N/A (vong planning tai lieu).
- Ket qua: Da co roadmap 8 buoc theo luong Input -> Data -> Display -> Export -> Security.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P16 ui 01](docs/screenshots/prompt-16/P16-ui-01-current-state.png)
Mo ta: [P16] [ui] UI baseline de dinh huong roadmap tinh nang.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P17
- Muc tieu: Ke hoach chi tiet vong lap #1 (form toi thieu).
- Prompt da dung: Prompt #17 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P17.md` (khong doi source code web).
- Lenh run/test: N/A (vong planning tai lieu).
- Ket qua: Da co pham vi va tieu chi test cho vong lap #1.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P17 ui 01](docs/screenshots/prompt-17/P17-ui-01-current-state.png)
Mo ta: [P17] [ui] UI baseline de map cac truong cua form toi thieu.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P18
- Muc tieu: Ke hoach vong lap #2 (validation than thien).
- Prompt da dung: Prompt #18 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P18.md` (khong doi source code web).
- Lenh run/test: N/A (vong planning tai lieu).
- Ket qua: Da co danh sach validate uu tien va test pass/fail.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P18 ui 01](docs/screenshots/prompt-18/P18-ui-01-current-state.png)
Mo ta: [P18] [ui] UI baseline cho bai hoc bo sung validation.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P19
- Muc tieu: Ke hoach vong lap #3 (live preview).
- Prompt da dung: Prompt #19 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P19.md` (khong doi source code web).
- Lenh run/test: N/A (vong planning tai lieu).
- Ket qua: Da co mapping du lieu chi tiet tu form sang preview.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P19 ui 01](docs/screenshots/prompt-19/P19-ui-01-current-state.png)
Mo ta: [P19] [ui] UI baseline de doi chieu mapping data binding.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

### Prompt P20
- Muc tieu: Ke hoach vong lap #4 (export PDF A4).
- Prompt da dung: Prompt #20 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `docs/prompt-results/P20.md` (khong doi source code web).
- Lenh run/test: N/A (vong planning tai lieu).
- Ket qua: Da co huong lam, gioi han chap nhan va tieu chi test cho export.
- Drift danh gia: large (trang thai chung cua branch; prompt nay khong tang drift code).

#### Anh ui
![P20 ui 01](docs/screenshots/prompt-20/P20-ui-01-current-state.png)
Mo ta: [P20] [ui] UI baseline cho bai hoc mo rong sang xuat ban.

#### Anh code
Khong co thay doi code o prompt nay.

#### Anh err
Khong phat sinh loi.

## 10) Runs da hoan thanh (P21-P25)

### Prompt P21
- Muc tieu: Them validation co ban va trang thai du lieu tren UI.
- Prompt da dung: Prompt #21 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `index.html`, `styles.css`, `scripts/scripts.js`, `docs/prompt-results/P21.md`.
- Lenh run/test: mo trang local + test tay cac truong form.
- Ket qua: Co khung validation va badge trang thai tren preview.
- Drift danh gia: large (trang thai chung cua branch).

#### Anh ui
![P21 ui 01](docs/screenshots/prompt-21/P21-ui-01-validation-layout.png)
Mo ta: [P21] [ui] Giao dien co them khoi validation va badge trang thai.

#### Anh code
![P21 code 01](docs/screenshots/prompt-21/P21-code-01-index-validation-block.png)
Mo ta: [P21] [code] `index.html` them `validation-summary` va status badge.
![P21 code 02](docs/screenshots/prompt-21/P21-code-02-styles-validation-status.png)
Mo ta: [P21] [code] `styles.css` them style validation + status classes.
![P21 code 03](docs/screenshots/prompt-21/P21-code-03-scripts-validation-flow.png)
Mo ta: [P21] [code] `scripts/scripts.js` them luong collect/render validation.

### Prompt P22
- Muc tieu: Debug loi he thong khong cap nhat preview/validation.
- Prompt da dung: Prompt #22 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `index.html`, `docs/prompt-results/P22.md`.
- Lenh run/test: reload trang sau khi sua script path.
- Ket qua: JS da nap dung, luong input -> preview/validation da chay.
- Drift danh gia: large (trang thai chung cua branch).

#### Anh ui
![P22 ui 01](docs/screenshots/prompt-22/P22-ui-01-script-fix-active.png)
Mo ta: [P22] [ui] Sau fix script path, hanh vi validation duoc kich hoat.

#### Anh code
![P22 code 01](docs/screenshots/prompt-22/P22-code-01-index-script-path-fix.png)
Mo ta: [P22] [code] `index.html` sua duong dan script de kich hoat JS runtime.

### Prompt P23
- Muc tieu: Bo sung bo du lieu test bien va thao tac nhanh.
- Prompt da dung: Prompt #23 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `index.html`, `styles.css`, `scripts/scripts.js`, `docs/prompt-results/P23.md`.
- Lenh run/test: bam `Tai du lieu bien`, kiem tra canh bao, bam `Xoa nhanh`.
- Ket qua: Co bo nut test bien + reset, phuc vu demo test case bien.
- Drift danh gia: large (trang thai chung cua branch).

#### Anh ui
![P23 ui 01](docs/screenshots/prompt-23/P23-ui-01-edge-tools.png)
Mo ta: [P23] [ui] Form co them nut `Tai du lieu bien` va `Xoa nhanh`.

#### Anh code
![P23 code 01](docs/screenshots/prompt-23/P23-code-01-index-action-row.png)
Mo ta: [P23] [code] `index.html` them action-row voi 3 nut thao tac.
![P23 code 02](docs/screenshots/prompt-23/P23-code-02-styles-action-buttons.png)
Mo ta: [P23] [code] `styles.css` them style cho `action-row`, `secondary-btn`, `ghost-btn`.
![P23 code 03](docs/screenshots/prompt-23/P23-code-03-scripts-edge-reset.png)
Mo ta: [P23] [code] `scripts/scripts.js` them ham nap du lieu bien va reset nhanh.

### Prompt P24
- Muc tieu: Them regression checklist de test lai sau moi lan sua.
- Prompt da dung: Prompt #24 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `index.html`, `styles.css`, `docs/prompt-results/P24.md`.
- Lenh run/test: mo panel regression va doi chieu tung muc test.
- Ket qua: Co panel checklist regression toi thieu ngay tren giao dien.
- Drift danh gia: large (trang thai chung cua branch).

#### Anh ui
![P24 ui 01](docs/screenshots/prompt-24/P24-ui-01-regression-checklist.png)
Mo ta: [P24] [ui] Bo sung panel checklist regression phuc vu test lap lai.

#### Anh code
![P24 code 01](docs/screenshots/prompt-24/P24-code-01-index-regression-panel.png)
Mo ta: [P24] [code] `index.html` them panel regression checklist trong form.
![P24 code 02](docs/screenshots/prompt-24/P24-code-02-styles-regression-panel.png)
Mo ta: [P24] [code] `styles.css` them style panel regression.

### Prompt P25
- Muc tieu: Chot mau bao cao fix bug theo 5 muc bat buoc.
- Prompt da dung: Prompt #25 trong `docs/autocv-vibe-prompt-pack.md`.
- File thay doi: `index.html`, `styles.css`, `docs/prompt-results/P25.md`.
- Lenh run/test: mo panel mau bao cao va xac nhan hien du 5 muc.
- Ket qua: Co panel huong dan fix bug theo format chuan.
- Drift danh gia: large (trang thai chung cua branch).

#### Anh ui
![P25 ui 01](docs/screenshots/prompt-25/P25-ui-01-fix-report-template.png)
Mo ta: [P25] [ui] Preview co them panel mau bao cao fix bug 5 muc bat buoc.

#### Anh code
![P25 code 01](docs/screenshots/prompt-25/P25-code-01-index-report-panel.png)
Mo ta: [P25] [code] `index.html` them panel mau bao cao fix bug.
![P25 code 02](docs/screenshots/prompt-25/P25-code-02-styles-report-panel.png)
Mo ta: [P25] [code] `styles.css` them style cho report panel.

Ghi chu chat luong anh:
- Tu P21 tro di, anh tap trung vao UI/runtime thay doi that su.
- Khong dung anh render tu `docs/prompt-results/` de tranh boi canh den va gay nham.
