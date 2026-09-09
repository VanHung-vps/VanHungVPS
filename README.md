# HƯỚNG DẪN ĐƯA TRANG WEB HSO LÊN GITHUB PAGES (MIỄN PHÍ 100%)

Trang web này được thiết kế theo kiến trúc Jamstack tĩnh (HTML5 / Vanilla CSS3 / JavaScript ES6) tối ưu 100% cho nền tảng **GitHub Pages**, không cần cài đặt máy chủ hay cơ sở dữ liệu phức tạp.

---

## BƯỚC 1: TẠO REPOSITORY TRÊN GITHUB

1. Đăng nhập vào tài khoản [GitHub](https://github.com).
2. Bấm vào dấu **+** ở góc trên bên phải -> Chọn **New repository**.
3. Đặt tên Repository (ví dụ: `shop-hso` hoặc `hso-community`).
4. Chọn chế độ: **Public** (Bắt buộc để dùng GitHub Pages miễn phí).
5. Bấm **Create repository**.

---

## BƯỚC 2: TẢI TOÀN BỘ CODE LÊN GITHUB

Bạn có thể tải code lên theo 1 trong 2 cách sau:

### Cách 1: Tải trực tiếp trên giao diện web GitHub (Đơn giản nhất)
1. Trong trang repository vừa tạo, bấm **uploading an existing file**.
2. Kéo thả toàn bộ các file và thư mục trong thư mục `web_hso` vào:
   - `index.html`
   - `style.css`
   - `app.js`
   - `data.js`
   - `admin.html`
   - Thư mục `assets/` (chứa `hero_banner.jpg`, `warrior.jpg`, `mage.jpg`)
3. Bấm nút **Commit changes** màu xanh.

### Cách 2: Dùng lệnh Git (Nếu bạn đã cài Git trên máy tính)
Mở terminal trong thư mục `web_hso` và chạy:
```bash
git init
git add .
git commit -m "Khoi tao web shop acc va mod HSO"
git branch -M main
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/TÊN_REPO.git
git push -u origin main
```

---

## BƯỚC 3: BẬT TÍNH NĂNG GITHUB PAGES

1. Tại trang Repository của bạn, bấm vào tab **Settings** (Cài đặt).
2. Ở menu bên trái, tìm và bấm chọn **Pages**.
3. Tại mục **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`
   - **Branch**: Chọn `main` (hoặc `master`), thư mục giữ nguyên `/ (root)`.
   - Bấm nút **Save**.
4. Chờ khoảng 30 giây đến 1 phút, GitHub sẽ xuất hiện dòng thông báo màu xanh kèm đường link website của bạn:
   👉 `https://[tên-github-của-bạn].github.io/[tên-repo]/`

---

## BƯỚC 4: HƯỚNG DẪN QUẢN TRỊ & THÊM ACC MỚI

Khi muốn thêm nick mới, đổi số điện thoại Zalo hoặc chuyển trạng thái sang "ĐÃ BÁN":
1. Mở file `admin.html` (trực tiếp trên trình duyệt máy tính hoặc qua đường link `.../admin.html`).
2. Nhập thông tin nick mới và bấm **Thêm Vào Danh Sách**.
3. Bấm nút **Copy Code** ở mục 4 (Xuất dữ liệu).
4. Vào lại GitHub của bạn -> Mở file `data.js` -> Bấm biểu tượng cây bút (Edit) -> Dán đè toàn bộ code vừa copy -> Bấm **Commit changes**.
5. Website tự động cập nhật dữ liệu mới ngay lập tức!
