<?php
header('Content-Type: application/json');

// Kết nối CSDL
$host = "localhost";
$user = "root";
$pass = "";
$db = "tttk-kh";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  echo json_encode(["success" => false, "message" => "Kết nối CSDL thất bại"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$email = $conn->real_escape_string($data['email']);
$password = $conn->real_escape_string($data['password']);

// Kiểm tra tài khoản
$sql = "SELECT * FROM `tttk-kh` WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  if ($password === $row['password']) { // Với hệ thống thực tế nên dùng password_verify
    echo json_encode(["success" => true, "user" => $row]);
  } else {
    echo json_encode(["success" => false, "message" => "Sai mật khẩu"]);
  }
} else {
  echo json_encode(["success" => false, "message" => "Không tìm thấy tài khoản"]);
}

$conn->close();
?>