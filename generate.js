const fs = require('fs');

const mcqs = [
  "Thẻ nào dùng để tạo bảng trong HTML?|<table>|<tab>|<tr>|<td>|A",
  "Thẻ nào dùng để tạo một hàng trong bảng HTML?|<td>|<tr>|<th>|<row>|B",
  "Sự khác nhau giữa thẻ <td> và <th> là gì?|<th> dùng cho ô tiêu đề, thường hiển thị đậm và căn giữa|<td> dùng cho tiêu đề, <th> dùng cho dữ liệu|Hai thẻ giống nhau hoàn toàn|<td> chỉ dùng trong bảng lớn|A",
  "Thuộc tính nào dùng để gộp nhiều cột trong bảng HTML?|rowspan|colspan|merge|span|B",
  "Để tạo bảng có 2 hàng, mỗi hàng 3 cột, cần tối thiểu bao nhiêu thẻ <td>?|3|5|6|2|C",
  "Thẻ nào dùng để chèn hình ảnh vào trang web?|<image>|<img>|<pic>|<src>|B",
  "Thuộc tính nào của thẻ <img> dùng để chỉ đường dẫn đến tệp hình ảnh?|href|link|src|path|C",
  "Thẻ nào dùng để chèn âm thanh vào trang web?|<music>|<sound>|<audio>|<mp3>|C",
  "Thuộc tính controls trong thẻ <audio> hoặc <video> có tác dụng gì?|Tự động phát khi mở trang|Hiển thị thanh điều khiển phát/dừng|Tắt âm thanh|Làm video chạy lặp lại|B",
  "Thuộc tính alt trong thẻ <img> có ý nghĩa gì?|Làm ảnh hiển thị to hơn|Tạo đường viền cho ảnh|Hiển thị văn bản thay thế khi ảnh không tải được|Làm ảnh tự động tải lại|C",
  "Thẻ <iframe> được sử dụng để:|Tạo bảng trong trang web|Nhúng một trang web khác vào trang hiện tại|Chèn hình nền|Tạo hiệu ứng ứng động|B",
  "Đoạn mã sau có chức năng gì? <video src=\"baihat.mp4\" controls width=\"300\"></video>|Chèn hình ảnh rộng 300px|Chèn video có thanh điều khiển và rộng 300px|Phát âm thanh tự động|Nhúng trang web khác|B",
  "Muốn nhúng video từ YouTube vào trang web, ta nên sử dụng thẻ nào?|<video>|<embed>|<iframe>|<media>|C",
  "Thẻ nào dùng để tạo một biểu mẫu trong HTML?|<input>|<form>|<table>|<fieldset>|B",
  "Thuộc tính nào của thẻ <form> dùng để chỉ nơi gửi dữ liệu đến?|method|action|target|name|B",
  "Kiểu dữ liệu nào của thẻ <input> dùng để nhập mật khẩu?|type=\"text\"|type=\"password\"|type=\"hidden\"|type=\"email\"|B",
  "Sự khác nhau giữa phương thức GET và POST trong biểu mẫu là:|GET gửi dữ liệu qua URL, POST gửi dữ liệu trong phần thân (body)|GET bảo mật hơn POST|POST chỉ dùng cho tìm kiếm|Hai phương thức giống nhau hoàn toàn|A",
  "Thẻ nào cho phép người dùng nhập nhiều dòng văn bản?|<input type=\"text\">|<textarea>|<label>|<option>|B",
  "Khi nhiều nút chọn có cùng thuộc tính name, điều gì xảy ra?|Người dùng có thể chọn nhiều đáp án|Không chọn được đáp án nào|Chỉ chọn được một đáp án (radio)|Biểu mẫu bị lỗi|C",
  "Đoạn mã sau có chức năng gì? <input type=\"checkbox\" name=\"lop\" value=\"12\">|Tạo ô nhập văn bản|Tạo nút chọn một đáp án|Tạo ô cho phép chọn nhiều lựa chọn|Tạo nút gửi dữ liệu|C",
  "Để tạo danh sách thả xuống trong biểu mẫu, ta sử dụng cặp thẻ nào?|<list>...</list>|<dropdown>...</dropdown>|<select>...</select>|<optionlist>...</optionlist>|C",
  "Muốn tạo nút gửi dữ liệu biểu mẫu, ta sử dụng:| <input type=\"submit\">|<button type=\"text\">|<input type=\"data\">|<form type=\"submit\">|A",
  "CSS là viết tắt của cụm từ nào?|Computer Style Sheets|Creative Style System|Cascading Style Sheets|Colorful Style Sheets|C",
  "CSS dùng để làm gì?|Tạo cấu trúc nội dung trang web|Định dạng và trình bày trang web|Xử lí dữ liệu phía máy chủ|Tạo cơ sở dữ liệu|B",
  "Có bao nhiêu cách chèn CSS vào trang HTML?|1|2|3|4|C",
  "Thuộc tính CSS nào dùng để đổi màu chữ?|font-color|text-color|color|background-color|C",
  "Thuộc tính CSS nào dùng để đổi màu nền?|bgcolor|background-color|color-background|bg-color|B",
  "Cú pháp đúng của một quy tắc CSS là:|selector { property: value; }|selector = property: value|property { selector: value }|selector (property = value)|A",
  "Bộ chọn nào dùng để chọn phần tử theo id?|.tenid|#tenid|*tenid|@tenid|B",
  "Bộ chọn nào dùng để chọn phần tử theo class?|.classname|#classname|classname|*classname|A",
  "Thuộc tính nào dùng để căn giữa văn bản?|text-align|align|font-align|center-text|A",
  "Trong ba cách chèn CSS (inline, internal, external), cách nào nên dùng khi muốn áp dụng cho nhiều trang web?|Inline|Internal|External|Cả ba như nhau|C",
  "Đoạn CSS sau có tác dụng gì? p { color: red; }|Làm toàn bộ trang web màu đỏ|Làm chữ trong các thẻ <p> có màu đỏ|Làm nền trang màu đỏ|Làm tiêu đề màu đỏ|B",
  "Muốn tất cả các phần tử có class \"tieude\" có chữ màu xanh, ta viết:|#tieude { color: blue; }|.tieude { color: blue; }|tieude { color: blue; }|*tieude { color: blue; }|B",
  "Để đặt kích thước chữ là 20px cho toàn bộ trang, ta có thể viết:|body { font-size: 20px; }|html { size: 20px; }|font { size: 20px; }|text { font: 20px; }|A",
  "Muốn tạo đường viền 1px, nét liền, màu đen cho một phần tử, ta viết:|border: 1px solid black;|border: black 1px;|border-line: 1 solid black;|outline: 1px black;|A",
  "Đoạn mã sau hiển thị như thế nào? <p style=\"color: green; text-align: center;\">Xin chào</p>|Chữ màu xanh, căn trái|Chữ màu xanh, căn giữa|Chữ màu đỏ, căn giữa|Chữ màu đen, căn phải|B",
  "Cho đoạn mã: <p class=\"doanvan\">Nội dung 1</p> <p>Nội dung 2</p> .doanvan { color: blue; } Kết quả hiển thị là:|Cả hai đoạn đều màu xanh|Chỉ \"Nội dung 1\" màu xanh|Chỉ \"Nội dung 2\" màu xanh|Không đoạn nào màu xanh|B",
  "Cho đoạn CSS: .tieude { text-align: center; } Để áp dụng cho thẻ <h1>, ta viết đúng là:|<h1 id=\"tieude\">Tiêu đề</h1>|<h1 class=\"tieude\">Tiêu đề</h1>|<h1 style=\"tieude\">Tiêu đề</h1>|<h1 name=\"tieude\">Tiêu đề</h1>|B",
  "Cho đoạn mã: <p class=\"a\">Đoạn 1</p> <p class=\"a\">Đoạn 2</p> .a { color: red; } Kết quả là:|Chỉ Đoạn 1 màu đỏ|Chỉ Đoạn 2 màu đỏ|Cả hai đoạn đều màu đỏ|Không đoạn nào màu đỏ|C",
  "Cho đoạn mã: <p class=\"x y\">Văn bản</p> .x { color: red; } .y { font-size: 20px; } Kết quả hiển thị là:|Văn bản màu đỏ|Văn bản cỡ chữ 20px|Văn bản màu đỏ và cỡ chữ 20px|Không thay đổi|C",
  "Cho CSS: .box { border: 1px solid black; } Muốn áp dụng cho thẻ <div>, ta viết:|<div id=\"box\">Nội dung</div>|<div class=\"box\">Nội dung</div>|<div name=\"box\">Nội dung</div>|<div style=\"box\">Nội dung</div>|B",
  "Cho đoạn mã: <p class=\"doan\">A</p> <p id=\"doan\">B</p> .doan { color: green; } Kết quả là:|Cả A và B đều màu xanh lá|Chỉ A màu xanh lá|Chỉ B màu xanh lá|Không thay đổi|B",
  "Cho đoạn CSS: .noidung { background-color: yellow; } Để áp dụng cho nhiều phần tử khác nhau trong cùng trang, ta cần:|Dùng cùng một id|Dùng cùng một class|Tạo nhiều file CSS|Dùng thuộc tính name|B",
  "Cho đoạn mã: <p class=\"a\">1</p> <p class=\"b\">2</p> .a { color: blue; } .b { color: red; } Kết quả hiển thị là:|1 màu xanh, 2 màu đỏ|1 màu đỏ, 2 màu xanh|Cả hai màu xanh|Cả hai màu đỏ|A",
  "Thẻ <div> dùng để làm gì?|Chèn hình ảnh|Tạo khối (vùng) chứa nội dung|Tạo bảng|Tạo liên kết|B",
  "Thẻ <div> thuộc loại phần tử nào?|Inline|Block|Table|Media|B",
  "Thẻ <div> có bắt buộc phải có thẻ đóng không?|Không cần|Có, phải có </div>|Chỉ cần khi có CSS|Chỉ cần khi có hình ảnh|B",
  "Thuộc tính nào thường dùng với <div> để áp dụng CSS?|href|src|class|alt|C",
  "Theo mặc định, <div> sẽ:|Hiển thị cùng dòng|Tự xuống dòng|Ẩn nội dung|Hiển thị chữ in đậm|B",
  "Sự khác nhau giữa <div> và <span> là:|<div> là block, <span> là inline|<div> là inline, <span> là block|Hai thẻ giống nhau|<span> dùng cho bảng|A",
  "Đoạn mã sau có ý nghĩa gì? <div> <p>Xin chào</p> </div>|Tạo một khối chứa đoạn văn|Tạo bảng|Tạo liên kết|Tạo biểu mẫu|A",
  "Nếu một trang có nhiều <div class=\"box\">, điều đó có nghĩa là:|Sai cú pháp|Chỉ có 1 div được hiển thị|Nhiều khối dùng chung định dạng CSS|Trang web bị lỗi|C",
  "Muốn tạo vùng có chiều rộng 300px cho <div>, ta dùng CSS:|size: 300px;|width: 300px;|div-width: 300px;|length: 300px;|B",
  "Để căn giữa nội dung trong <div>, ta có thể dùng:|text-align: center;|align: center;|position: left;|float: down;|A",
  "Cho đoạn mã: <div style=\"color: red;\"> Nội dung </div> Kết quả là:|Nội dung màu đỏ|Nền màu đỏ|Không thay đổi|Viền màu đỏ|A",
  "Cho đoạn CSS: .box { background-color: yellow; } Để áp dụng cho <div>, ta viết:|<div id=\"box\">|<div class=\"box\">|<div name=\"box\">|<div style=\"box\">|B",
  "Cho đoạn mã: <div> <div>Khối 1</div> <div>Khối 2</div> </div> Kết quả hiển thị là:|Hai khối nằm cạnh nhau|Hai khối nằm trên hai dòng khác nhau|Không hiển thị|Bị lỗi|B",
  "Muốn tạo viền cho <div>, ta dùng:|border: 1px solid black;|line: 1px black;|outline-text: black;|frame: solid;|A",
  "Cho đoạn mã: <div style=\"width:200px; height:100px; background-color:blue;\"> </div> Kết quả là:|Một khối màu xanh kích thước 200x100px|Một khối màu xanh 100x200px|Một dòng chữ màu xanh|Không hiển thị|A",
  "Cho đoạn mã: <div id=\"main\"></div> <div id=\"main\"></div> Điều gì xảy ra?|Hoàn toàn đúng|Sai vì id không được trùng|Không hiển thị|Tự động sửa lỗi|B",
  "Muốn đặt hai <div> nằm cạnh nhau, ta có thể dùng:|display: inline-block;|text-align: center;|font-size: 20px;|visibility: hidden;|A",
  "Cho CSS: #khung { width: 400px; } Để áp dụng, ta viết:|<div class=\"khung\">|<div id=\"khung\">|<div name=\"khung\">|<div style=\"khung\">|B",
  "Nếu không có CSS, <div> chủ yếu dùng để:|Tạo cấu trúc bố cục trang|Tạo hiệu ứng động|Phát video|Lưu dữ liệu|A",
  "Cho đoạn mã: <div style=\"border:2px solid red; padding:10px;\"> Nội dung </div> padding:10px; có tác dụng:|Tạo khoảng cách bên ngoài khối|Tạo khoảng cách giữa viền và nội dung|Tạo khoảng cách giữa các div|Làm nội dung to hơn|B",
  "Thẻ nào dùng để tạo danh sách có thứ tự?|<ol>|<ul>|<li>|<list>|A",
  "Thẻ nào dùng để tạo danh sách không thứ tự?|<ol>|<ul>|<li>|<list>|B",
  "Phần tử nào dùng để định nghĩa một mục trong danh sách?|<ol>|<ul>|<li>|<item>|C",
  "Thuộc tính nào dùng để mở liên kết trong một tab mới?|target=\"_blank\"|open=\"new\"|target=\"new\"|href=\"_blank\"|A"
];

const tfs = [
  "Thẻ <img> được dùng để chèn hình ảnh vào trang web HTML.|true",
  "Thẻ <audio> không cần thẻ đóng (</audio>) khi chèn âm thanh vào trang web.|false",
  "Thuộc tính controls trong thẻ <video> giúp hiển thị các nút điều khiển như phát, tạm dừng và điều chỉnh âm lượng.|true",
  "Thuộc tính alt trong thẻ <img> dùng để thay đổi kích thước của hình ảnh khi hiển thị.|false",
  "Đoạn mã sau sẽ nhúng một trang web khác vào trang hiện tại: <iframe src=\"https://example.com\"></iframe>|true",
  "Thẻ <form> dùng để tạo biểu mẫu nhập dữ liệu trên trang web.|true",
  "Thuộc tính action trong thẻ <form> dùng để chỉ phương thức gửi dữ liệu.|false",
  "<input type=\"text\"> dùng để nhập một dòng văn bản.|true",
  "<input type=\"password\"> hiển thị nội dung người dùng nhập dưới dạng ký tự ẩn.|true",
  "Thẻ <textarea> chỉ cho phép nhập một dòng văn bản.|false",
  "Phương thức GET gửi dữ liệu thông qua URL của trình duyệt.|true",
  "Phương thức POST hiển thị toàn bộ dữ liệu gửi đi trên thanh địa chỉ trình duyệt.|false",
  "Các nút <input type=\"radio\"> có cùng thuộc tính name chỉ cho phép chọn một đáp án.|true",
  "<input type=\"checkbox\"> chỉ cho phép người dùng chọn một phương án duy nhất.|false",
  "Thẻ <select> dùng để tạo danh sách thả xuống trong biểu mẫu.|true",
  "Thẻ <option> phải nằm bên trong thẻ <select>.|true",
  "<input type=\"submit\"> dùng để gửi dữ liệu của biểu mẫu.|true",
  "Nếu trong một form có hai ô <input type=\"radio\"> khác thuộc tính name, người dùng có thể chọn cả hai.|true",
  "Nếu bỏ thuộc tính name trong thẻ <input>, dữ liệu của ô đó vẫn được gửi về máy chủ khi submit.|false",
  "Trong một form, có thể sử dụng nhiều nút <input type=\"submit\">.|true",
  "Thuộc tính required trong thẻ <input> bắt buộc người dùng phải nhập dữ liệu trước khi gửi form.|true",
  "Thẻ <label> giúp tăng khả năng truy cập và khi nhấp vào label có thể chọn ô nhập tương ứng.|true",
  "<input type=\"email\"> giúp kiểm tra định dạng email cơ bản trước khi gửi dữ liệu.|true",
  "Có thể đặt thẻ <form> lồng bên trong một thẻ <form> khác.|false",
  "Thuộc tính placeholder dùng để hiển thị gợi ý trong ô nhập dữ liệu.|true",
  "Thẻ <a> luôn yêu cầu thuộc tính href để hoạt động như một liên kết.|true",
  "CSS có thể được viết trực tiếp bên trong thẻ HTML thông qua thuộc tính style.|true"
];

let output = `import { Question } from './types';\n\nexport const questions: Question[] = [\n`;

let idCounter = 1;

mcqs.forEach((q, index) => {
  const parts = q.split('|');
  const text = parts[0];
  const options = parts.slice(1, 5);
  const correct = parts[5];
  
  const formattedOptions = options.map((opt, i) => {
    const prefix = String.fromCharCode(65 + i);
    return `"${prefix}. ${opt.replace(/"/g, '\\"')}"`;
  }).join(',\n      ');

  output += `  {
    id: "mcq_${idCounter++}",
    type: "MCQ",
    question: "${text.replace(/"/g, '\\"')}",
    options: [
      ${formattedOptions}
    ],
    correctAnswer: "${correct}"
  },\n`;
});

tfs.forEach((q, index) => {
  const parts = q.split('|');
  const text = parts[0];
  const correct = parts[1];

  output += `  {
    id: "tf_${idCounter++}",
    type: "TF",
    question: "${text.replace(/"/g, '\\"')}",
    correctAnswer: ${correct}
  },\n`;
});

output += `];\n`;

fs.writeFileSync('data.ts', output);
console.log('Done');
