<?php
require_once 'connect.php';
$name = $_GET['name'];
$login = $_GET['login'];
$idUser = $_GET['id'];

mysqli_query($connect, query:"UPDATE `user` SET `subs`= '$name' WHERE `id`=$idUser");
header('Location:../sub.php');
?>
<script>
    $('.personal-link').trigger('click')
</script>