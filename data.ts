import { Question } from './types';

export const questions: Question[] = [
  {
    id: "mcq_1",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để tạo bảng trong HTML?",
    options: [
      "A. <table>",
      "B. <tab>",
      "C. <tr>",
      "D. <td>"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_2",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để tạo một hàng trong bảng HTML?",
    options: [
      "A. <td>",
      "B. <tr>",
      "C. <th>",
      "D. <row>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_3",
    category: "HTML",
    type: "MCQ",
    text: "Sự khác nhau giữa thẻ <td> và <th> là gì?",
    options: [
      "A. <th> dùng cho ô tiêu đề, thường hiển thị đậm và căn giữa",
      "B. <td> dùng cho tiêu đề, <th> dùng cho dữ liệu",
      "C. Hai thẻ giống nhau hoàn toàn",
      "D. <td> chỉ dùng trong bảng lớn"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_4",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính nào dùng để gộp nhiều cột trong bảng HTML?",
    options: [
      "A. rowspan",
      "B. colspan",
      "C. merge",
      "D. span"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_5",
    category: "HTML",
    type: "MCQ",
    text: "Để tạo bảng có 2 hàng, mỗi hàng 3 cột, cần tối thiểu bao nhiêu thẻ <td>?",
    options: [
      "A. 3",
      "B. 5",
      "C. 6",
      "D. 2"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_6",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để chèn hình ảnh vào trang web?",
    options: [
      "A. <image>",
      "B. <img>",
      "C. <pic>",
      "D. <src>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_7",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính nào của thẻ <img> dùng để chỉ đường dẫn đến tệp hình ảnh?",
    options: [
      "A. href",
      "B. link",
      "C. src",
      "D. path"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_8",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để chèn âm thanh vào trang web?",
    options: [
      "A. <music>",
      "B. <sound>",
      "C. <audio>",
      "D. <mp3>"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_9",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính controls trong thẻ <audio> hoặc <video> có tác dụng gì?",
    options: [
      "A. Tự động phát khi mở trang",
      "B. Hiển thị thanh điều khiển phát/dừng",
      "C. Tắt âm thanh",
      "D. Làm video chạy lặp lại"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_10",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính alt trong thẻ <img> có ý nghĩa gì?",
    options: [
      "A. Làm ảnh hiển thị to hơn",
      "B. Tạo đường viền cho ảnh",
      "C. Hiển thị văn bản thay thế khi ảnh không tải được",
      "D. Làm ảnh tự động tải lại"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_11",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ <iframe> được sử dụng để:",
    options: [
      "A. Tạo bảng trong trang web",
      "B. Nhúng một trang web khác vào trang hiện tại",
      "C. Chèn hình nền",
      "D. Tạo hiệu ứng ứng động"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_12",
    category: "HTML",
    type: "MCQ",
    text: "Đoạn mã sau có chức năng gì? <video src=\"baihat.mp4\" controls width=\"300\"></video>",
    options: [
      "A. Chèn hình ảnh rộng 300px",
      "B. Chèn video có thanh điều khiển và rộng 300px",
      "C. Phát âm thanh tự động",
      "D. Nhúng trang web khác"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_13",
    category: "HTML",
    type: "MCQ",
    text: "Muốn nhúng video từ YouTube vào trang web, ta nên sử dụng thẻ nào?",
    options: [
      "A. <video>",
      "B. <embed>",
      "C. <iframe>",
      "D. <media>"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_14",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để tạo một biểu mẫu trong HTML?",
    options: [
      "A. <input>",
      "B. <form>",
      "C. <table>",
      "D. <fieldset>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_15",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính nào của thẻ <form> dùng để chỉ nơi gửi dữ liệu đến?",
    options: [
      "A. method",
      "B. action",
      "C. target",
      "D. name"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_16",
    category: "HTML",
    type: "MCQ",
    text: "Kiểu dữ liệu nào của thẻ <input> dùng để nhập mật khẩu?",
    options: [
      "A. type=\"text\"",
      "B. type=\"password\"",
      "C. type=\"hidden\"",
      "D. type=\"email\""
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_17",
    category: "HTML",
    type: "MCQ",
    text: "Sự khác nhau giữa phương thức GET và POST trong biểu mẫu là:",
    options: [
      "A. GET gửi dữ liệu qua URL, POST gửi dữ liệu trong phần thân (body)",
      "B. GET bảo mật hơn POST",
      "C. POST chỉ dùng cho tìm kiếm",
      "D. Hai phương thức giống nhau hoàn toàn"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_18",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào cho phép người dùng nhập nhiều dòng văn bản?",
    options: [
      "A. <input type=\"text\">",
      "B. <textarea>",
      "C. <label>",
      "D. <option>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_19",
    category: "HTML",
    type: "MCQ",
    text: "Khi nhiều nút chọn có cùng thuộc tính name, điều gì xảy ra?",
    options: [
      "A. Người dùng có thể chọn nhiều đáp án",
      "B. Không chọn được đáp án nào",
      "C. Chỉ chọn được một đáp án (radio)",
      "D. Biểu mẫu bị lỗi"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_20",
    category: "HTML",
    type: "MCQ",
    text: "Đoạn mã sau có chức năng gì? <input type=\"checkbox\" name=\"lop\" value=\"12\">",
    options: [
      "A. Tạo ô nhập văn bản",
      "B. Tạo nút chọn một đáp án",
      "C. Tạo ô cho phép chọn nhiều lựa chọn",
      "D. Tạo nút gửi dữ liệu"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_21",
    category: "HTML",
    type: "MCQ",
    text: "Để tạo danh sách thả xuống trong biểu mẫu, ta sử dụng cặp thẻ nào?",
    options: [
      "A. <list>...</list>",
      "B. <dropdown>...</dropdown>",
      "C. <select>...</select>",
      "D. <optionlist>...</optionlist>"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_22",
    category: "HTML",
    type: "MCQ",
    text: "Muốn tạo nút gửi dữ liệu biểu mẫu, ta sử dụng:",
    options: [
      "A. <input type=\"submit\">",
      "B. <button type=\"text\">",
      "C. <input type=\"data\">",
      "D. <form type=\"submit\">"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_23",
    category: "CSS",
    type: "MCQ",
    text: "CSS là viết tắt của cụm từ nào?",
    options: [
      "A. Computer Style Sheets",
      "B. Creative Style System",
      "C. Cascading Style Sheets",
      "D. Colorful Style Sheets"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_24",
    category: "CSS",
    type: "MCQ",
    text: "CSS dùng để làm gì?",
    options: [
      "A. Tạo cấu trúc nội dung trang web",
      "B. Định dạng và trình bày trang web",
      "C. Xử lí dữ liệu phía máy chủ",
      "D. Tạo cơ sở dữ liệu"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_25",
    category: "CSS",
    type: "MCQ",
    text: "Có bao nhiêu cách chèn CSS vào trang HTML?",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_26",
    category: "CSS",
    type: "MCQ",
    text: "Thuộc tính CSS nào dùng để đổi màu chữ?",
    options: [
      "A. font-color",
      "B. text-color",
      "C. color",
      "D. background-color"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_27",
    category: "CSS",
    type: "MCQ",
    text: "Thuộc tính CSS nào dùng để đổi màu nền?",
    options: [
      "A. bgcolor",
      "B. background-color",
      "C. color-background",
      "D. bg-color"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_28",
    category: "CSS",
    type: "MCQ",
    text: "Cú pháp đúng của một quy tắc CSS là:",
    options: [
      "A. selector { property: value; }",
      "B. selector = property: value",
      "C. property { selector: value }",
      "D. selector (property = value)"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_29",
    category: "CSS",
    type: "MCQ",
    text: "Bộ chọn nào dùng để chọn phần tử theo id?",
    options: [
      "A. .tenid",
      "B. #tenid",
      "C. *tenid",
      "D. @tenid"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_30",
    category: "CSS",
    type: "MCQ",
    text: "Bộ chọn nào dùng để chọn phần tử theo class?",
    options: [
      "A. .classname",
      "B. #classname",
      "C. classname",
      "D. *classname"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_31",
    category: "CSS",
    type: "MCQ",
    text: "Thuộc tính nào dùng để căn giữa văn bản?",
    options: [
      "A. text-align",
      "B. align",
      "C. font-align",
      "D. center-text"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_32",
    category: "CSS",
    type: "MCQ",
    text: "Trong ba cách chèn CSS (inline, internal, external), cách nào nên dùng khi muốn áp dụng cho nhiều trang web?",
    options: [
      "A. Inline",
      "B. Internal",
      "C. External",
      "D. Cả ba như nhau"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_33",
    category: "CSS",
    type: "MCQ",
    text: "Đoạn CSS sau có tác dụng gì? p { color: red; }",
    options: [
      "A. Làm toàn bộ trang web màu đỏ",
      "B. Làm chữ trong các thẻ <p> có màu đỏ",
      "C. Làm nền trang màu đỏ",
      "D. Làm tiêu đề màu đỏ"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_34",
    category: "CSS",
    type: "MCQ",
    text: "Muốn tất cả các phần tử có class \"tieude\" có chữ màu xanh, ta viết:",
    options: [
      "A. #tieude { color: blue; }",
      "B. .tieude { color: blue; }",
      "C. tieude { color: blue; }",
      "D. *tieude { color: blue; }"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_35",
    category: "CSS",
    type: "MCQ",
    text: "Để đặt kích thước chữ là 20px cho toàn bộ trang, ta có thể viết:",
    options: [
      "A. body { font-size: 20px; }",
      "B. html { size: 20px; }",
      "C. font { size: 20px; }",
      "D. text { font: 20px; }"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_36",
    category: "CSS",
    type: "MCQ",
    text: "Muốn tạo đường viền 1px, nét liền, màu đen cho một phần tử, ta viết:",
    options: [
      "A. border: 1px solid black;",
      "B. border: black 1px;",
      "C. border-line: 1 solid black;",
      "D. outline: 1px black;"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_37",
    category: "CSS",
    type: "MCQ",
    text: "Đoạn mã sau hiển thị như thế nào? <p style=\"color: green; text-align: center;\">Xin chào</p>",
    options: [
      "A. Chữ màu xanh, căn trái",
      "B. Chữ màu xanh, căn giữa",
      "C. Chữ màu đỏ, căn giữa",
      "D. Chữ màu đen, căn phải"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_38",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <p class=\"doanvan\">Nội dung 1</p> <p>Nội dung 2</p> .doanvan { color: blue; } Kết quả hiển thị là:",
    options: [
      "A. Cả hai đoạn đều màu xanh",
      "B. Chỉ \"Nội dung 1\" màu xanh",
      "C. Chỉ \"Nội dung 2\" màu xanh",
      "D. Không đoạn nào màu xanh"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_39",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn CSS: .tieude { text-align: center; } Để áp dụng cho thẻ <h1>, ta viết đúng là:",
    options: [
      "A. <h1 id=\"tieude\">Tiêu đề</h1>",
      "B. <h1 class=\"tieude\">Tiêu đề</h1>",
      "C. <h1 style=\"tieude\">Tiêu đề</h1>",
      "D. <h1 name=\"tieude\">Tiêu đề</h1>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_40",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <p class=\"a\">Đoạn 1</p> <p class=\"a\">Đoạn 2</p> .a { color: red; } Kết quả là:",
    options: [
      "A. Chỉ Đoạn 1 màu đỏ",
      "B. Chỉ Đoạn 2 màu đỏ",
      "C. Cả hai đoạn đều màu đỏ",
      "D. Không đoạn nào màu đỏ"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_41",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <p class=\"x y\">Văn bản</p> .x { color: red; } .y { font-size: 20px; } Kết quả hiển thị là:",
    options: [
      "A. Văn bản màu đỏ",
      "B. Văn bản cỡ chữ 20px",
      "C. Văn bản màu đỏ và cỡ chữ 20px",
      "D. Không thay đổi"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_42",
    category: "CSS",
    type: "MCQ",
    text: "Cho CSS: .box { border: 1px solid black; } Muốn áp dụng cho thẻ <div>, ta viết:",
    options: [
      "A. <div id=\"box\">Nội dung</div>",
      "B. <div class=\"box\">Nội dung</div>",
      "C. <div name=\"box\">Nội dung</div>",
      "D. <div style=\"box\">Nội dung</div>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_43",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <p class=\"doan\">A</p> <p id=\"doan\">B</p> .doan { color: green; } Kết quả là:",
    options: [
      "A. Cả A và B đều màu xanh lá",
      "B. Chỉ A màu xanh lá",
      "C. Chỉ B màu xanh lá",
      "D. Không thay đổi"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_44",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn CSS: .noidung { background-color: yellow; } Để áp dụng cho nhiều phần tử khác nhau trong cùng trang, ta cần:",
    options: [
      "A. Dùng cùng một id",
      "B. Dùng cùng một class",
      "C. Tạo nhiều file CSS",
      "D. Dùng thuộc tính name"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_45",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <p class=\"a\">1</p> <p class=\"b\">2</p> .a { color: blue; } .b { color: red; } Kết quả hiển thị là:",
    options: [
      "A. 1 màu xanh, 2 màu đỏ",
      "B. 1 màu đỏ, 2 màu xanh",
      "C. Cả hai màu xanh",
      "D. Cả hai màu đỏ"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_46",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ <div> dùng để làm gì?",
    options: [
      "A. Chèn hình ảnh",
      "B. Tạo khối (vùng) chứa nội dung",
      "C. Tạo bảng",
      "D. Tạo liên kết"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_47",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ <div> thuộc loại phần tử nào?",
    options: [
      "A. Inline",
      "B. Block",
      "C. Table",
      "D. Media"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_48",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ <div> có bắt buộc phải có thẻ đóng không?",
    options: [
      "A. Không cần",
      "B. Có, phải có </div>",
      "C. Chỉ cần khi có CSS",
      "D. Chỉ cần khi có hình ảnh"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_49",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính nào thường dùng với <div> để áp dụng CSS?",
    options: [
      "A. href",
      "B. src",
      "C. class",
      "D. alt"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_50",
    category: "HTML",
    type: "MCQ",
    text: "Theo mặc định, <div> sẽ:",
    options: [
      "A. Hiển thị cùng dòng",
      "B. Tự xuống dòng",
      "C. Ẩn nội dung",
      "D. Hiển thị chữ in đậm"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_51",
    category: "HTML",
    type: "MCQ",
    text: "Sự khác nhau giữa <div> và <span> là:",
    options: [
      "A. <div> là block, <span> là inline",
      "B. <div> là inline, <span> là block",
      "C. Hai thẻ giống nhau",
      "D. <span> dùng cho bảng"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_52",
    category: "HTML",
    type: "MCQ",
    text: "Đoạn mã sau có ý nghĩa gì? <div> <p>Xin chào</p> </div>",
    options: [
      "A. Tạo một khối chứa đoạn văn",
      "B. Tạo bảng",
      "C. Tạo liên kết",
      "D. Tạo biểu mẫu"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_53",
    category: "HTML",
    type: "MCQ",
    text: "Nếu một trang có nhiều <div class=\"box\">, điều đó có nghĩa là:",
    options: [
      "A. Sai cú pháp",
      "B. Chỉ có 1 div được hiển thị",
      "C. Nhiều khối dùng chung định dạng CSS",
      "D. Trang web bị lỗi"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_54",
    category: "CSS",
    type: "MCQ",
    text: "Muốn tạo vùng có chiều rộng 300px cho <div>, ta dùng CSS:",
    options: [
      "A. size: 300px;",
      "B. width: 300px;",
      "C. div-width: 300px;",
      "D. length: 300px;"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_55",
    category: "CSS",
    type: "MCQ",
    text: "Để căn giữa nội dung trong <div>, ta có thể dùng:",
    options: [
      "A. text-align: center;",
      "B. align: center;",
      "C. position: left;",
      "D. float: down;"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_56",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <div style=\"color: red;\"> Nội dung </div> Kết quả là:",
    options: [
      "A. Nội dung màu đỏ",
      "B. Nền màu đỏ",
      "C. Không thay đổi",
      "D. Viền màu đỏ"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_57",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn CSS: .box { background-color: yellow; } Để áp dụng cho <div>, ta viết:",
    options: [
      "A. <div id=\"box\">",
      "B. <div class=\"box\">",
      "C. <div name=\"box\">",
      "D. <div style=\"box\">"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_58",
    category: "HTML",
    type: "MCQ",
    text: "Cho đoạn mã: <div> <div>Khối 1</div> <div>Khối 2</div> </div> Kết quả hiển thị là:",
    options: [
      "A. Hai khối nằm cạnh nhau",
      "B. Hai khối nằm trên hai dòng khác nhau",
      "C. Không hiển thị",
      "D. Bị lỗi"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_59",
    category: "CSS",
    type: "MCQ",
    text: "Muốn tạo viền cho <div>, ta dùng:",
    options: [
      "A. border: 1px solid black;",
      "B. line: 1px black;",
      "C. outline-text: black;",
      "D. frame: solid;"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_60",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <div style=\"width:200px; height:100px; background-color:blue;\"> </div> Kết quả là:",
    options: [
      "A. Một khối màu xanh kích thước 200x100px",
      "B. Một khối màu xanh 100x200px",
      "C. Một dòng chữ màu xanh",
      "D. Không hiển thị"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_61",
    category: "HTML",
    type: "MCQ",
    text: "Cho đoạn mã: <div id=\"main\"></div> <div id=\"main\"></div> Điều gì xảy ra?",
    options: [
      "A. Hoàn toàn đúng",
      "B. Sai vì id không được trùng",
      "C. Không hiển thị",
      "D. Tự động sửa lỗi"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_62",
    category: "CSS",
    type: "MCQ",
    text: "Muốn đặt hai <div> nằm cạnh nhau, ta có thể dùng:",
    options: [
      "A. display: inline-block;",
      "B. text-align: center;",
      "C. font-size: 20px;",
      "D. visibility: hidden;"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_63",
    category: "CSS",
    type: "MCQ",
    text: "Cho CSS: #khung { width: 400px; } Để áp dụng, ta viết:",
    options: [
      "A. <div class=\"khung\">",
      "B. <div id=\"khung\">",
      "C. <div name=\"khung\">",
      "D. <div style=\"khung\">"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_64",
    category: "HTML",
    type: "MCQ",
    text: "Nếu không có CSS, <div> chủ yếu dùng để:",
    options: [
      "A. Tạo cấu trúc bố cục trang",
      "B. Tạo hiệu ứng động",
      "C. Phát video",
      "D. Lưu dữ liệu"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_65",
    category: "CSS",
    type: "MCQ",
    text: "Cho đoạn mã: <div style=\"border:2px solid red; padding:10px;\"> Nội dung </div> padding:10px; có tác dụng:",
    options: [
      "A. Tạo khoảng cách bên ngoài khối",
      "B. Tạo khoảng cách giữa viền và nội dung",
      "C. Tạo khoảng cách giữa các div",
      "D. Làm nội dung to hơn"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_66",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để tạo danh sách có thứ tự?",
    options: [
      "A. <ol>",
      "B. <ul>",
      "C. <li>",
      "D. <list>"
    ],
    correctAnswer: "A"
  },
  {
    id: "mcq_67",
    category: "HTML",
    type: "MCQ",
    text: "Thẻ nào dùng để tạo danh sách không thứ tự?",
    options: [
      "A. <ol>",
      "B. <ul>",
      "C. <li>",
      "D. <list>"
    ],
    correctAnswer: "B"
  },
  {
    id: "mcq_68",
    category: "HTML",
    type: "MCQ",
    text: "Phần tử nào dùng để định nghĩa một mục trong danh sách?",
    options: [
      "A. <ol>",
      "B. <ul>",
      "C. <li>",
      "D. <item>"
    ],
    correctAnswer: "C"
  },
  {
    id: "mcq_69",
    category: "HTML",
    type: "MCQ",
    text: "Thuộc tính nào dùng để mở liên kết trong một tab mới?",
    options: [
      "A. target=\"_blank\"",
      "B. open=\"new\"",
      "C. target=\"new\"",
      "D. href=\"_blank\""
    ],
    correctAnswer: "A"
  },
  {
    id: "tf_70",
    category: "HTML",
    type: "TF",
    text: "Thẻ <img> được dùng để chèn hình ảnh vào trang web HTML.",
    correctAnswer: true
  },
  {
    id: "tf_71",
    category: "HTML",
    type: "TF",
    text: "Thẻ <audio> không cần thẻ đóng (</audio>) khi chèn âm thanh vào trang web.",
    correctAnswer: false
  },
  {
    id: "tf_72",
    category: "HTML",
    type: "TF",
    text: "Thuộc tính controls trong thẻ <video> giúp hiển thị các nút điều khiển như phát, tạm dừng và điều chỉnh âm lượng.",
    correctAnswer: true
  },
  {
    id: "tf_73",
    category: "HTML",
    type: "TF",
    text: "Thuộc tính alt trong thẻ <img> dùng để thay đổi kích thước của hình ảnh khi hiển thị.",
    correctAnswer: false
  },
  {
    id: "tf_74",
    category: "HTML",
    type: "TF",
    text: "Đoạn mã sau sẽ nhúng một trang web khác vào trang hiện tại: <iframe src=\"https://example.com\"></iframe>",
    correctAnswer: true
  },
  {
    id: "tf_75",
    category: "HTML",
    type: "TF",
    text: "Thẻ <form> dùng để tạo biểu mẫu nhập dữ liệu trên trang web.",
    correctAnswer: true
  },
  {
    id: "tf_76",
    category: "HTML",
    type: "TF",
    text: "Thuộc tính action trong thẻ <form> dùng để chỉ phương thức gửi dữ liệu.",
    correctAnswer: false
  },
  {
    id: "tf_77",
    category: "HTML",
    type: "TF",
    text: "<input type=\"text\"> dùng để nhập một dòng văn bản.",
    correctAnswer: true
  },
  {
    id: "tf_78",
    category: "HTML",
    type: "TF",
    text: "<input type=\"password\"> hiển thị nội dung người dùng nhập dưới dạng ký tự ẩn.",
    correctAnswer: true
  },
  {
    id: "tf_79",
    category: "HTML",
    type: "TF",
    text: "Thẻ <textarea> chỉ cho phép nhập một dòng văn bản.",
    correctAnswer: false
  },
  {
    id: "tf_80",
    category: "HTML",
    type: "TF",
    text: "Phương thức GET gửi dữ liệu thông qua URL của trình duyệt.",
    correctAnswer: true
  },
  {
    id: "tf_81",
    category: "HTML",
    type: "TF",
    text: "Phương thức POST hiển thị toàn bộ dữ liệu gửi đi trên thanh địa chỉ trình duyệt.",
    correctAnswer: false
  },
  {
    id: "tf_82",
    category: "HTML",
    type: "TF",
    text: "Các nút <input type=\"radio\"> có cùng thuộc tính name chỉ cho phép chọn một đáp án.",
    correctAnswer: true
  },
  {
    id: "tf_83",
    category: "HTML",
    type: "TF",
    text: "<input type=\"checkbox\"> chỉ cho phép người dùng chọn một phương án duy nhất.",
    correctAnswer: false
  },
  {
    id: "tf_84",
    category: "HTML",
    type: "TF",
    text: "Thẻ <select> dùng để tạo danh sách thả xuống trong biểu mẫu.",
    correctAnswer: true
  },
  {
    id: "tf_85",
    category: "HTML",
    type: "TF",
    text: "Thẻ <option> phải nằm bên trong thẻ <select>.",
    correctAnswer: true
  },
  {
    id: "tf_86",
    category: "HTML",
    type: "TF",
    text: "<input type=\"submit\"> dùng để gửi dữ liệu của biểu mẫu.",
    correctAnswer: true
  },
  {
    id: "tf_87",
    category: "HTML",
    type: "TF",
    text: "Nếu trong một form có hai ô <input type=\"radio\"> khác thuộc tính name, người dùng có thể chọn cả hai.",
    correctAnswer: true
  },
  {
    id: "tf_88",
    category: "HTML",
    type: "TF",
    text: "Nếu bỏ thuộc tính name trong thẻ <input>, dữ liệu của ô đó vẫn được gửi về máy chủ khi submit.",
    correctAnswer: false
  },
  {
    id: "tf_89",
    category: "HTML",
    type: "TF",
    text: "Trong một form, có thể sử dụng nhiều nút <input type=\"submit\">.",
    correctAnswer: true
  },
  {
    id: "tf_90",
    category: "HTML",
    type: "TF",
    text: "Thuộc tính required trong thẻ <input> bắt buộc người dùng phải nhập dữ liệu trước khi gửi form.",
    correctAnswer: true
  },
  {
    id: "tf_91",
    category: "HTML",
    type: "TF",
    text: "Thẻ <label> giúp tăng khả năng truy cập và khi nhấp vào label có thể chọn ô nhập tương ứng.",
    correctAnswer: true
  },
  {
    id: "tf_92",
    category: "HTML",
    type: "TF",
    text: "<input type=\"email\"> giúp kiểm tra định dạng email cơ bản trước khi gửi dữ liệu.",
    correctAnswer: true
  },
  {
    id: "tf_93",
    category: "HTML",
    type: "TF",
    text: "Có thể đặt thẻ <form> lồng bên trong một thẻ <form> khác.",
    correctAnswer: false
  },
  {
    id: "tf_94",
    category: "HTML",
    type: "TF",
    text: "Thuộc tính placeholder dùng để hiển thị gợi ý trong ô nhập dữ liệu.",
    correctAnswer: true
  },
  {
    id: "tf_95",
    category: "HTML",
    type: "TF",
    text: "Thẻ <a> luôn yêu cầu thuộc tính href để hoạt động như một liên kết.",
    correctAnswer: true
  },
  {
    id: "tf_96",
    category: "CSS",
    type: "TF",
    text: "CSS có thể được viết trực tiếp bên trong thẻ HTML thông qua thuộc tính style.",
    correctAnswer: true
  },
  {
    id: "tf_97",
    category: "CSS",
    type: "TF",
    text: "Thuộc tính margin dùng để tạo khoảng cách bên trong giữa nội dung và viền của phần tử.",
    correctAnswer: false
  },
  {
    id: "tf_98",
    category: "HTML",
    type: "TF",
    text: "Thẻ <iframe> được sử dụng để nhúng một trang web khác vào trong trang web hiện tại.",
    correctAnswer: true
  },
  {
    id: "tf_99",
    category: "CSS",
    type: "TF",
    text: "Trong CSS, id selector được bắt đầu bằng dấu chấm (.).",
    correctAnswer: false
  },
  {
    id: "tf_100",
    category: "HTML",
    type: "TF",
    text: "Thuộc tính alt trong thẻ <img> là bắt buộc để trang web đạt chuẩn và hỗ trợ người khiếm thị.",
    correctAnswer: true
  }
];
