# AutoCV Vibe Prompt Pack (60 Prompts)

Muc tieu: dung bo prompt nay de dan hoc vien di theo vong lap:
`Prompt -> Code -> Run -> Test -> Bug -> Read code -> Fix -> Test lai`.

## 0) Quy tac chup anh cho moi prompt

Quy tac dat ten file:
- `PXX-<group>-YY-<short-name>.png`
- `XX`: so prompt, 2 chu so (vi du `01`, `27`, `60`)
- `group`: nhom anh
- `YY`: thu tu anh trong nhom, 2 chu so

Nhom anh mac dinh:
- `env`: cai moi truong / cai dependency
- `tree`: them file/folder moi
- `code`: code thay doi (diff/chunk chinh)
- `ui`: giao dien truoc/sau prompt
- `err`: loi terminal/browser
- `test`: ket qua test/checklist (neu can)

Vi du:
- `P07-code-01-live-preview-hook.png`
- `P07-ui-01-before-input.png`
- `P07-ui-02-after-input.png`
- `P07-err-01-console-404.png`

So luong anh de xuat moi prompt (linh hoat):
- `env`: 0-2 anh
- `tree`: 0-2 anh
- `code`: 2-5 anh
- `ui`: 2-4 anh
- `err`: 0-N anh (moi loi khac nhau it nhat 1 anh)
- `test`: 1-3 anh

Thu muc luu anh:
- `docs/screenshots/prompt-XX/`

Nguyen tac dung:
1. Chi dung 1 prompt moi vong, khong dan nhieu prompt cung luc.
2. Sau khi AI sinh code, luon run + test ngay.
3. Neu co loi, uu tien prompt nhom `Testing` roi `Code Reading`.
4. Chup anh theo quy tac ten o tren de viet sach.
5. Moi vong nen cap nhat checkpoint: `bash scripts/check_drift.sh`.

---

## A. Engaging with AI (Tuong tac AI)
Chua can code ngay. Muc tieu la hieu bai toan va ngon ngu phan mem.

### A1. Problem Decomposition (5 prompts)
1. `Toi chua biet lap trinh. Hay giai thich du an AutoCV cho nguoi moi: muc tieu, nguoi dung, dau vao, dau ra, bang ngon ngu doi thuong.`
2. `Tu du an AutoCV, hay chia bai toan thanh cac khoi nho: nhap lieu, xu ly du lieu, hien thi, xuat ban, bao mat. Moi khoi co nhiem vu gi?`
3. `Hay ve luong du lieu bang chu cho AutoCV: du lieu di tu form toi preview va toi file PDF nhu the nao.`
4. `Cho toi danh sach tinh nang toi thieu (MVP) de AutoCV chay duoc trong 1 trang web don gian, theo thu tu uu tien.`
5. `Hay bien muc tieu AutoCV thanh 10 user stories kieu: "La [ai], toi muon [gi], de [ly do]".`

### A2. Testing (5 prompts)
6. `Voi AutoCV ban MVP, hay tao checklist test thu cong cho nguoi khong biet code, gom buoc test va ket qua mong doi.`
7. `Hay liet ke 15 loi thuong gap khi lam web tao CV cho nguoi moi (vi du nhap thieu du lieu, dinh dang sai, preview khong cap nhat).`
8. `Hay giup toi dinh nghia "xong" cho AutoCV bang tieu chi co the kiem tra duoc (definition of done).`
9. `Tao bang test case gom cot: ID, Muc tieu test, Buoc test, Ket qua mong doi, Muc do uu tien cho AutoCV.`
10. `Hay chi ra 5 test quan trong nhat phai chay lai sau moi lan sua code AutoCV de tranh loi quay lai.`

### A3. Code Reading (5 prompts)
11. `Giai thich 6 khai niem co ban cho nguoi moi: input, state, data binding, render, event, validate bang vi du AutoCV.`
12. `Khi doc code AutoCV, toi nen bat dau tu file nao truoc, va doc theo thu tu nao de hieu nhanh luong du lieu?`
13. `Hay dua ra 12 cau hoi "doc code" ma nguoi moi nen tu hoi khi thay mot file JavaScript/TypeScript trong AutoCV.`
14. `Hay minh hoa 1 bug dien hinh kieu "preview khong cap nhat", roi chi cach lan theo code de tim nguyen nhan.`
15. `Hay cho toi template ghi chu doc code gom: File, Du lieu vao, Du lieu ra, Event, Ham chinh, Rui ro.`

---

## B. Creating with AI (Sang tao AI)
Muc tieu: tao tinh nang nhanh nhung van kiem soat hanh vi bang test + doc code.

### B1. Problem Decomposition (5 prompts)
16. `Dua tren luong Input -> Data -> Display -> Export -> Security, hay de xuat roadmap trien khai AutoCV trong 8 vong lap nho.`
17. `Hay viet ke hoach vong lap so 1: chi lam form nhap lieu toi thieu (ho ten, email, ky nang) va tieu chi test di kem.`
18. `Hay viet ke hoach vong lap so 2: them data validation va thong bao loi than thien cho nguoi moi dung.`
19. `Hay viet ke hoach vong lap so 3: them live preview, neu ro du lieu nao bind vao vi tri nao cua CV.`
20. `Hay viet ke hoach vong lap so 4: them chuc nang export PDF A4, neu gioi han ky thuat can chap nhan o ban dau.`

### B2. Testing (5 prompts)
21. `Hay sinh code [tinh nang hien tai], sau do tu kem test manual checklist ngay duoi code de toi chay tung buoc.`
22. `Toi vua chay va thay loi: [mo ta loi]. Hay dua quy trinh debug 5 buoc: gia thuyet -> kiem tra -> ket luan -> sua -> test lai.`
23. `Hay tao bo du lieu test bien cho AutoCV: thieu email, ky nang qua dai, ky tu dac biet, khoang trang thua, copy-paste da dong.`
24. `Sau khi sua bug, hay de xuat test regression toi thieu de chac rang cac phan cu khong bi hong.`
25. `Hay tra loi theo mau bat buoc: Nguyen nhan goc, File can sua, Doan can sua, Cach test lai, Rui ro con lai.`

### B3. Code Reading (5 prompts)
26. `Giai thich doan code ban vua sinh theo luong du lieu: du lieu vao tu dau, xu ly o dau, render o dau.`
27. `Chi ro bien nao dang dong vai tro "state", ai cap nhat no, va dieu kien nao khien UI re-render.`
28. `Gan comment ngan vao code o nhung diem kho hieu nhat de nguoi moi co the doc duoc sau 1 tuan.`
29. `Hay chi ra 3 mui code (code smell) trong phien ban hien tai va cach refactor an toan tung buoc nho.`
30. `Viet cho toi so do call flow bang text khi nguoi dung bam nut "Tao CV" tu event den cap nhat giao dien.`

---

## C. Managing AI (Quan ly AI)
Muc tieu: quan ly dau ra, bao mat, nang cap san pham va kiem soat no ky thuat.

### C1. Problem Decomposition (5 prompts)
31. `Dong vai product owner: chia backlog AutoCV thanh 3 muc uu tien Now/Next/Later voi ly do ngan gon.`
32. `Hay giup toi quyet dinh du lieu nao chi luu local, du lieu nao cho phep gui server, theo rui ro bao mat.`
33. `De xuat policy du lieu cho AutoCV ca nhan: luu bao lau, khi nao xoa, thong bao gi cho nguoi dung.`
34. `Tao bang trade-off giua 2 huong: web tinh chay local vs web co backend luu CV online.`
35. `Hay lap ke hoach nang cap AutoCV tu ban ca nhan sang ban co the chia se cho ban be dung thu an toan.`

### C2. Testing (5 prompts)
36. `Tao checklist kiem thu bao mat muc co ban cho AutoCV: XSS, input sanitation, ro ri du lieu, file upload an toan.`
37. `Dua ra kich ban kiem thu quyen rieng tu: nguoi dung muon xoa du lieu ngay sau phien lam viec thi he thong xu ly the nao.`
38. `Hay tao test plan truoc khi phat hanh ban moi: smoke test, regression test, compatibility test tren mobile/desktop.`
39. `Mo phong 1 su co that: export PDF loi font tieng Viet. Hay dua runbook xu ly su co theo tung buoc.`
40. `Hay de xuat bo chi so theo doi chat luong ban phat hanh AutoCV (ty le loi, thoi gian sua, ty le test pass).`

### C3. Code Reading (5 prompts)
41. `Audit giup toi kien truc hien tai: phan nao de hong nhat khi them tinh nang moi, vi sao.`
42. `Doc code va liet ke du lieu nhay cam nao dang di qua app, vi tri nao can che/ma hoa/khong log.`
43. `Hay chi ra cac diem coupling cao trong code hien tai va cach tach module de de bao tri hon.`
44. `Viet ban do thu muc du an AutoCV theo ngon ngu nguoi moi: moi file lam gi, phu thuoc vao dau.`
45. `Tao mau "phien review code voi AI" de toi dung lai moi tuan: Muc tieu, Diff chinh, Rui ro, Test da chay, Viec tiep theo.`

---

## D. Alignment with `main` (Bat buoc de khong lech qua xa)
Muc tieu: sau khi hoc vien da quen vong lap, dung nhom prompt nay de dua branch demo ve gan voi `origin/main`.

### D1. Problem Decomposition (5 prompts)
46. `Hay so sanh nhanh branch hien tai voi origin/main: file nao them, file nao xoa, file nao doi. Tra ket qua theo bang A/M/D.`
47. `Tu diff voi main, hay chia ke hoach dong bo thanh 3 dot nho: (1) khoi phuc cau truc, (2) khoi phuc config, (3) gop logic bai hoc.`
48. `Hay lap bang quyet dinh giu/bo cho tung thay doi lon, kem ly do su pham va tac dong ky thuat.`
49. `Neu muc tieu la "gan main nhat co the", hay xep thu tu khoi phuc file tu de den kho, uu tien file can cho build chay.`
50. `Hay de xuat ke hoach commit nho de dong bo (moi commit 1 y), de de review va rollback khi can.`

### D2. Testing (5 prompts)
51. `Sau moi commit dong bo ve main, hay dua checklist test bat buoc de chac rang app khong vo.`
52. `Hay tao bo regression test danh cho giai doan reconciliation voi main: UI, data flow, export, basic security.`
53. `Neu phat hien xung dot giua "feature demo" va "main", hay de xuat cach giai quyet co thu tu uu tien ro rang.`
54. `Hay danh gia drift hien tai theo muc small/medium/large dua tren so file thay doi va core-structure changes.`
55. `Khi ket thuc dot dong bo, hay yeu cau AI tu bao cao: con lech gi voi main, rui ro nao chua xu ly, buoc tiep theo la gi.`

### D3. Code Reading (5 prompts)
56. `Hay giai thich nhung khac biet quan trong nhat giua code hien tai va origin/main bang ngon ngu nguoi moi.`
57. `Chi ro phan state/data flow nao trong branch demo dang khac voi main va tac dong den hanh vi nguoi dung.`
58. `Hay tom tat nhung file da duoc khoi phuc tu main, file nao con no dong bo, va tai sao.`
59. `Voi tung file con lech main, hay cho 1 ly do giu lai hoac 1 de xuat merge lai de dat can bang day hoc + san pham.`
60. `Tao bao cao cuoi ky: muc do gan voi main (phan tram uoc tinh), changelog chinh, va danh sach viec can dong bo dot sau.`

---

## Prompt khung dung lap lai moi vong

### Muc co ban (cho hoc vien moi)
`Ban dang ho tro du an AutoCV cho nguoi moi hoc. Hay lam dung 6 muc theo thu tu: (1) Nhac lai muc tieu vong nay, (2) Dua code thay doi toi thieu, (3) Chi ro file can sua, (4) Checklist test thu cong, (5) Neu loi thi cach debug, (6) Giai thich data flow/state/re-render bang ngon ngu don gian.`

### Muc nang cao (khi can bam sat main)
`Ban dang ho tro branch demo AutoCV nhung phai giu khong lech qua xa origin/main. Moi tra loi bat buoc gom: (1) muc tieu vong, (2) diff du kien voi main, (3) patch toi thieu, (4) test + regression, (5) anh can chup theo nhom env/tree/code/ui/err/test, (6) danh gia drift small/medium/large.`
