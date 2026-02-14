# Demo Lesson Development Policy

## 1) Goal and Priority
- Long-term goal: giu workspace tien dan den ban AutoCV hoan thien, co the van hanh on dinh.
- Short-term goal: giu `cv-builder` phuc vu day vong lap Vibe Coding:
  `Prompt -> Code -> Run -> Test -> Bug -> Read code -> Fix -> Re-test`.
- Conflict rule: neu xung dot giua toc do day hoc va pham vi sua code, uu tien flow day hoc nhung van giu thay doi o muc nho.
- Review window: danh gia thay doi sau moi vong, khong doi den moc lon.

## 2) Operating Rules Per Round
- Moi thay doi code phai gan voi mot muc tieu bai hoc.
- Giu diff cuc bo. Tranh sua lan rong khi bai hoc chi tap trung 1 van de.
- Sau moi vong, ghi:
  - buoc hien tai trong vong lap
  - file chinh bi tac dong
  - ly do su pham
  - muc do thay doi (`small` / `medium` / `large`)
- Neu 2-3 vong lien tiep co muc `large`, vong ke tiep theo uu tien lam sach va on dinh.

## 3) Process Interface
- Input:
  - prompt bai hoc
  - bug can minh hoa
  - kien thuc muc tieu cua vong
- Output:
  - patch toi thieu de minh hoa dung buoc quy trinh
  - giai thich ngan theo goc doc code (data flow, state owner, vi sao render/update)
- Guardrail:
  - khong de thay doi vuot tam kiem soat qua nhieu vong lien tiep

## 4) Change-Level Classification
- `small`: <= 8 file doi va khong tac dong lon den cau truc app.
- `medium`: 9-25 file doi, hoac co it thay doi cau truc.
- `large`: > 25 file doi, hoac thay doi cau truc tren dien rong.

Core-structure paths:
- `src/`
- `public/`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `README.md`

## 5) Round Review Routine
- Trong moi vong:
  - review `git diff --name-status <checkpoint-ref>...HEAD`
  - tach thay doi chi phuc vu bai hoc va thay doi nen giu lau dai
  - uu tien buoc lam sach toi thieu de code de doc, de test, de mo rong
- Neu yeu cau moi lam tang scope qua nhanh, xac nhan lai voi user truoc khi mo rong.

## 6) Locked Defaults
- Working branch: `cv-builder`
- Baseline reference: checkpoint gan nhat hoac `origin/HEAD`
- Default policy: giu flow day hoc tu nhien va chat luong app on dinh qua tung vong.
