<?php
 require_once 'php/connect.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Insomnia
    </title>
    <link rel="shortcut icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="styles/style-kat.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

<body>
    <div class="header">
        <div class="nav">
            <ul class="left">
                <div class="title">INSOMNIA</div>
                <li><a href="index.html" class="underline-one">Главная</a></li>
                <li><a href="katalog.php" class="underline-one">Каталог</a></li>

                <li><a href="sub.php" class="underline-one">Подписки</a></li>
            </ul>
            <ul class="right">
                <!-- <li><a href="#" class="underline-one" id="promo-menu">Ввести промокод</a></li> -->
                <li><a href="#" class="underline-one" id="signIn-menu">Войти</a></li>
            </ul>
        </div>
    </div>

    <main>
        <section class="popular-container">
            <h1 class="title-popular">
                Популярное</h1>
            <div class="popular-items">
            <?php
                $films = mysqli_query($connect, query:"SELECT * FROM `film` LIMIT 8");
                $films = mysqli_fetch_all($films);
                foreach($films as $film){
                    ?>
                    
                    <a class="popular-imgLink" href="filmInfo.php?id=<?= $film[0] ?>" >
                    <img class="popular-img"
                    src=" <?= $film[6] ?> "
                    alt=" <?= $film[8] ?> ">
                    </a>
                 <?php   
                }
            ?>
            </div>
            <button class="next pnext"> <img class="next-img" src="img/next.svg" alt=""> </button>
            <button class="pred ppred"> <img class="pred-img" src="img/pred.svg" alt=""></button>
        </section>

        <section class="serials-container">
            <h1 class="title-serials">Выбираем сериал</h1>
            <div class="serials-items">
                <?php
                $films = mysqli_query($connect, query:"SELECT * FROM `film` LIMIT 8 offset 8");
                $films = mysqli_fetch_all($films);
                foreach($films as $film){
                    ?>
                    
                    <a class="serials-imgLink" href="filmInfo.php?id=<?= $film[0] ?>" >
                    <img class="serials-img"
                    src=" <?= $film[6] ?> "
                    alt=" <?= $film[8] ?> ">
                    </a>
                 <?php   
                }
            ?>
            
            </div>
            <button class="next snext"> <img class="next-img" src="img/next.svg" alt=""> </button>
            <button class="pred spred"> <img class="pred-img" src="img/pred.svg" alt=""></button>
        </section>

        <section class="horror-container">
            <h1 class="title-horror">Современные хорроры</h1>
            <div class="horror-items">
                <?php
                $films = mysqli_query($connect, query:"SELECT * FROM `film` LIMIT 8 offset 16");
                $films = mysqli_fetch_all($films);
                foreach($films as $film){
                    ?>
                    
                    <a class="horror-imgLink" href="filmInfo.php?id=<?= $film[0] ?>" >
                    <img class="horror-img"
                    src=" <?= $film[6] ?> "
                    alt=" <?= $film[8] ?> ">
                    </a>
                 <?php   
                }
            ?>
            </div>
            <button class="next hnext"> <img class="next-img" src="img/next.svg" alt=""> </button>
            <button class="pred hpred"> <img class="pred-img" src="img/pred.svg" alt=""></button>
        </section>

        <section class="add-container">
            <div class="title-add"> Подписка на Amediateka</div>
            <div class="price-add">599₽ в месяц</div>
            <a href="sub.php">
                <button class="add-btn">Оформить</button>
            </a>
        </section>

        <section class="genres-container">
            <h1 class="title-genres">Жанры</h1>
            <div class="genres-items">
                <a class="link-genre" href="filmInfo.php">Комедии</a>
                <a class="link-genre" href="">Мультфильмы</a>
                <a class="link-genre" href="">Семейные</a>
                <a class="link-genre" href="">Фантастика</a>
                <a class="link-genre" href="">Драмы</a>
            </div>
        </section>
    </main>

    </div>
    <footer>
        <div class="footer-text-container">
            <ul class="footer-img-list">
                <li><a href="https://vk.com/vika_titovva" target="_blank"><img class = "img-footer" src="img/vk.png"></a></li>
                <li><a href="https://t.me/vikall_ll" target="_blank"><img class = "img-footer" src="img/tg.png"></a></li>
                <li><a href="https://www.youtube.com/watch?v=_lMlsPQJs6U" target="_blank"><img class = "img-footer" src="img/yt.png"></a></li>
            </ul>
            © Insomnia 2022, 18+
        </div>
    </footer>

    <div class="promo">
        <img id="close-promo" src="img/x-circle-fill.svg" alt="">
        <h3 id="title-promo">АКТИВАЦИЯ ПРОМОКОДА</h3>
        <hr>
        <form class="promo-form">
            <h2 id="enter-promo">Введите промокод</h2>
            <div class="enter">
                <input type="text" name="promo" id="promo">
                <button id="btn-promo" type="submit">Активировать</button>
            </div>
            <p id="helpPromo">Служба технической поддержки:
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjWCDqdxDdjTbhVZrDMlVNTpjZvXmVqZZtKkGfjzZzfXmLGWFCWZXWDHCWXrXBvmdl"
                    target="_blank">
                    mail@Insomnia.tv</a> или бесплатно по телефону в России — 8 800 700 55 33 и в Казахстане — 8 800 200
                55 33
            </p>
        </form>
        <div class="whyWe">
            <h2 id="title-whyWe">Преимущества Insomnia</h2>
            <img id="img-whyWe"
                src="https://yastatic.net/s3/ott-static/landings/production/default/1.108.0-1/for-mobile.d4961cf27cfa2b6a7ccf02767a428db4.png"
                alt="">
            <ul class="promoList">
                <li class="promoList-item">
                    <img class="promoList-img" src="img/plus-circle.svg" alt="">
                    <p class="promoList-p"><b>Премьеры</b> каждый день и сотни подборок</p>
                </li>
                <li class="promoList-item">
                    <img class="promoList-img" src="img/tv.svg" alt="">
                    <img class="promoList-img" src="img/phone.svg" alt="">
                    <p class="promoList-p">Доступ для всей семьи на <b>5 устройствах</b></p>
                </li>
                <li class="promoList-item">
                    <img class="promoList-img" src="img/arrow-down-circle.svg" alt="">
                    <p class="promoList-p"><b>Загрузка</b> на мобильные устройства</p>
                </li>
                <li class="promoList-item">
                    <img class="promoList-img" id="volume-img" src="img/volume-down.svg" alt="">
                    <p class="promoList-p">Смотрите <b>на языке оригинала</b> с субтитрами</p>
                </li>
            </ul>
        </div>
    </div>

    <div class="signIn">
        <img id="close-signIn" src="img/x-circle-fill.svg" alt="">
        <h3 id="main-title-signIn"><a class="signInLink">ВХОД</a> ИЛИ <a class="signUpLink">РЕГИСТРАЦИЯ</a></h3>
        <hr>
        <form class="signIn-form">
            <h2 id="title-signIn">Вход</h2>
            <div class="signIn-items">
                <input type="email" name="login" id="loginIn" placeholder="login">
                <input type="password" name="password" id="passwordIn" placeholder="password">
                <button id="btn-signIn" type="submit">Войти</button>
            </div>
        </form>
    </div>

    <div class="signUp">
        <img id="close-signUp" src="img/x-circle-fill.svg" alt="">
        <h3 id="main-title-signIn"><a class="signInLink">ВХОД</a> ИЛИ <a class="signUpLink">РЕГИСТРАЦИЯ</a></h3>
        <hr>
        <form action="php/create.php" method="post" class="signIn-form">
            <h2 id="title-signIn">Регистрация</h2>
            <div class="signIn-items">
                <input type="email" name="login" id="loginUp" placeholder="login">
                <input type="password" name="password" id="passwordUp" placeholder="password">
                <button id="btn-signUp" type="submit">Зарегестрироваться</button>
            </div>
            <p class="agree">Продолжая, я соглашаюсь с
                <a class="signIn-link">Пользовательским соглашением</a>
                и <a class="signIn-link">Политикой конфиденциальности</a>
            </p>

            <div class="check">
                <input type="checkbox" name="iWant" id="iWant" required>
            <p class="agree" id="checkAgree">Хочу узнавать о новинках и актуальных предложениях в соответствии с
                <a class="signIn-link">Правилами рассылок</a>
            </p>
            </div>
        </form>
    </div>

    <div class="personalSpace">
        <img id="close-personal" src="img/x-circle-fill.svg" alt="">
        <h3 id="title-personalSpace">ЛИЧНЫЙ КАБИНЕТ</h3>
        <hr>
        <div class="personal-container">
            <div class="personal-form">
                <div class="info">
                    <img class="userIcon" src="img/person-circle.svg" alt="">
                    <p id="UserName"></p>
                </div>
                <h3 id="personal-subs">Подписка</h3>
                <p id="subUser">
                 
                </p>
            </div>
            <button id="exit">Выйти</button>
        </div>
        
    </div>

    <script src="scripts/checkSignIn.js"></script>
    <script type="text/javascript" language="javascript" src="scripts/forms.js"></script>
    <script src="scripts/slider.js"></script>
</body>

</html>