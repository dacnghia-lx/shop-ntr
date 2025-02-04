# Deploy Website lên Firebase Hosting

## Bước 1: Thêm Firebase SDK

[Tìm hiểu phần này trước](https://firebase.google.com/docs/web/setup?hl=en&authuser=0&_gl=1*1i27qx4*_ga*MjEzMjgzNTg4OC4xNzM2MjMwMzkw*_ga_CW55HF8NVT*MTczNzY0MzkwNi4yNi4xLjE3Mzc2NDQ5MDYuMS4wLjA.)

`npm install firebase`


## Bước 2: Cài đặt Firebase CLI

Trước tiên, bạn cần cài đặt Firebase CLI. Mở terminal hoặc command prompt và chạy lệnh sau:

`npm install -g firebase-tools`

## Bước 3: Đăng nhập vào Firebase

Đăng nhập vào tài khoản Firebase của bạn bằng cách chạy lệnh sau:

`firebase login`

## Bước 4: Khởi tạo dự án Firebase

Chuyển đến thư mục dự án của bạn và chạy lệnh sau để khởi tạo dự án Firebase:

`firebase init`

Chọn các tùy chọn sau trong quá trình khởi tạo:

- Chọn Hosting bằng cách sử dụng phím space và nhấn Enter.
- Chọn Use an existing project nếu bạn đã có dự án Firebase, hoặc Create a new project để tạo dự án mới.
- Chọn dự án Firebase của bạn từ danh sách.
- Đặt thư mục public là public (hoặc thư mục chứa các file HTML, CSS, JS của bạn).
- Chọn No cho câu hỏi về cấu hình như một ứng dụng đơn trang (SPA).
- Chọn No cho câu hỏi về việc ghi đè các file hiện có.

## Bước 5: Triển khai trang web lên Firebase Hosting

Sau khi khởi tạo xong, bạn có thể triển khai trang web của mình lên Firebase Hosting bằng cách chạy lệnh sau: 

`firebase deploy`

Xem thêm ở đây để hiểu rõ hơn 👇👇👇

[Triển khai Website lên Firebase Hosting](https://www.youtube.com/watch?v=Ez7e99RS_jw&pp=ygUYZGVwbG95IHdlYiBsw6puIGZpcmViYXNl)