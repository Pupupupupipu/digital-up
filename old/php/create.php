<?php
require_once 'connect.php';

$login = $_POST['login'];
$password = $_POST['password'];

mysqli_query($connect, query: "INSERT INTO `user` (`id`, `login`, `password`, `subs`) VALUES (NULL, '$login', '$password', '')");
 
header('Location: ../index.html');
?>
<script>
    localStorage.setItem('login', <? $login?>)
    localStorage.setItem('password', <? $password?>)
</script>
