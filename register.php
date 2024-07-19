<?php
    include_once 'system/function.php';
    $message = '';
if (isset($_POST['username'])) {
    $username = strtolower(trim(str_replace(" ", "", $_POST["username"])));
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

    $stmt = $pdo->prepare("INSERT INTO users (username, password, status, activated, tester, kh) VALUES (?, ?, '1', '1', '1', '1')"); // Prepared statement
    if ($stmt->execute([$username, $password])) {
        $message = '<div class="alert alert-success">Đăng kí thành công!</div>';
    } else {
        $message = '<div class="alert alert-danger">Đã có lỗi gì đó xảy ra, đăng kí thất bại!</div>';
    }
} // N
?>