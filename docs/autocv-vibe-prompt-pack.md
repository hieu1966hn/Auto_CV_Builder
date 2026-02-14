# AutoCV Vibe Prompt Pack (60 Prompts)

Muc tieu: dung bo prompt nay de dan hoc vien di theo vong lap:
`Prompt -> Code -> Run -> Test -> Bug -> Read code -> Fix -> Test lai`.

## Chuoi giai doan can lam noi bat

- **Giai doan 1 - DOM thuan (`FormData + eventListener`)**: tap trung manh o P21-P35.
- **Giai doan 2 - chuyen sang React**: tap trung manh o P36-P52.
- **Giai doan 3 - xuat PDF bang `@react-pdf/renderer`**: tap trung manh o P53-P55, tong ket o P56-P60.

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
5. Moi vong nen cap nhat checkpoint: ghi lai muc tieu, file da doi, test da chay.

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

### C2. React migration - setup (5 prompts)
36. `Toi muon chuyen AutoCV tu DOM thuan sang React. Hay tao checklist setup config toi thieu (Next, TypeScript, lint, style) theo thu tu de thuc hien.`
37. `Hay viet prompt de thiet lap lint/build metadata cho app React, kem cach test nhanh sau moi buoc.`
38. `Hay huong dan khoa phien ban dependency de moi truong hoc tap chay on dinh, kem cach xu ly khi install loi cache.`
39. `Hay tao prompt bo sung static assets co ban cho app shell React va giai thich tung asset dung de lam gi.`
40. `Sau khi bo sung assets, hay dua checklist smoke test de xac nhan app render binh thuong tren local.`

### C3. React migration - architecture (5 prompts)
41. `Hay tao prompt dung app shell React (layout + global styles) de bat dau chay UI theo component.`
42. `Hay tao prompt chuyen trang chinh sang React page va mo ta diem vao moi cua giao dien.`
43. `Hay tao prompt dinh nghia model du lieu CV + store tap trung, kem giai thich data flow cho nguoi moi.`
44. `Hay tao prompt them cau hinh template va component chon template trong editor React.`
45. `Hay tao prompt dung preview template dau tien va checklist de xac nhan preview cap nhat theo state.`

---

## C4. React migration - mo rong editor (5 prompts)
Muc tieu: mo rong app React tu ban toi thieu thanh bo editor du cho day hoc va su dung ca nhan.

46. `Hay tao prompt them template preview thu 2 de nguoi dung co lua chon phong cach CV.`
47. `Hay tao prompt them template preview thu 3, dam bao component moi van dung chung data model hien tai.`
48. `Hay tao prompt tach form thanh cac component nho (phan 1: thong tin ca nhan + ky nang) de de doc code.`
49. `Hay tao prompt tach form thanh cac component nho (phan 2: kinh nghiem + hoc van), kem checklist test binding.`
50. `Hay tao prompt tach form thanh cac component nho (phan 3: ngon ngu + nguoi tham chieu), giu UI nhat quan.`

### C5. Hoan thien editor + PDF (5 prompts)
51. `Hay tao prompt hoan thien editor tong hop (gom upload anh + ghep cac sub-form) de chuan bi xuat ban.`
52. `Hay tao prompt them Smart Import de parse noi dung CV vao store React, kem checklist test sau import.`
53. `Hay tao prompt bat dau xuat PDF bang @react-pdf/renderer voi template mac dinh.`
54. `Hay tao prompt mo rong bo template PDF cho cac phong cach con lai, dam bao noi dung nhat quan voi preview.`
55. `Hay tao prompt ket noi nut Download PDF va checklist smoke test cho luong tai file.`

### C6. Audit + tong ket phat hanh (5 prompts)
56. `Hay tom tat khac biet giua ban DOM va ban React/PDF bang ngon ngu de nguoi moi de hieu.`
57. `Hay ve lai data flow hien tai cua AutoCV theo chuoi: input -> store -> preview -> PDF.`
58. `Hay tong hop nhung phan da hoan thien va no ky thuat con lai theo bang uu tien.`
59. `Hay de xuat nguyen tac giu/bo cho cac file phuc vu day hoc so voi file phuc vu san pham.`
60. `Hay tao bao cao tong ket chu ky: changelog 3 giai doan, trang thai hien tai, va danh sach uu tien tiep theo.`

---

## Prompt khung dung lap lai moi vong

### Muc co ban (cho hoc vien moi)
`Ban dang ho tro du an AutoCV cho nguoi moi hoc. Hay lam dung 6 muc theo thu tu: (1) Nhac lai muc tieu vong nay, (2) Dua code thay doi toi thieu, (3) Chi ro file can sua, (4) Checklist test thu cong, (5) Neu loi thi cach debug, (6) Giai thich data flow/state/re-render bang ngon ngu don gian.`

### Muc nang cao (khi can on dinh san pham)
`Ban dang ho tro du an AutoCV cho nguoi moi nhung can giu chat luong san pham. Moi tra loi bat buoc gom: (1) muc tieu vong, (2) thay doi toi thieu, (3) file can sua, (4) checklist test + regression, (5) anh can chup theo nhom env/tree/code/ui/err/test, (6) danh gia muc do thay doi small/medium/large.`
