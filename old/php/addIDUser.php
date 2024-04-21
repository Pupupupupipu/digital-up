<?php
require_once 'connect.php';
$name = $_GET['name'];
$login = $_GET['login'];

$user = mysqli_query($connect, query:"SELECT * FROM `user` WHERE `login` = '$login'");
$user = mysqli_fetch_assoc($user);

// mysqli_query($connect, query:"UPDATE `user` SET `subs`= '$name' WHERE `id`=2");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    <form action="updateSub.php" method="get">
        <input type="number" name="id" value="<?=$user['id'] ?>">
        <input type="text" name="name" value="<?=$name ?>">
        <input type="text" name="login" value="<?=$login ?>">
    </form>
    <style>
        input{
            opacity: 0;
        }
    </style>
    <script>
        $('form').trigger('submit')
    </script>
</body>
</html>
