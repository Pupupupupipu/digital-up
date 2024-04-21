<?php
require_once 'connect.php';
$name = $_GET['name']
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
    <form action="addIDUser.php" method="get">
        <input type="text" name="name" id="nameSub" value="<?=$name ?>">
        <input type="text" name="login" id="userLogin">
    </form>
    <style>
        input{
            opacity: 0;
        }
    </style>
    <script>
        $('#userLogin').val( localStorage.getItem('login'))
        $('form').trigger('submit')
    </script>
</body>
</html>