<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Генератор паролей, которые легко запомнить!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href='http://fonts.googleapis.com/css?family=PT+Sans+Caption' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script src="js/jquery-1.11.1.min.js"></script>
</head>
<body>
    <div class="row">
        <div class="content">
            <a
                    href="http://simplepassword.ru"
                    title="simplepassword.ru - генератор паролей, которые легко запомнить!"
                    id="header"
                    ><span class="fa fa-lightbulb-o bigicon"></span> Этот пароль легко запомнить!</a>
            <div class="control">
                <input type="text" placeholder="" value="" id="passwordInput">
                <button class="btn btn-default wide" id="moreButton">Ещё</button>
            </div>
        </div>
    </div>
    <div class="footer left">
        &copy; 2014 <a href="http://den.bz/program/generator-zapominayushhikhsya-parolejj.html">www.den.bz</a>
    </div>
    <div class="footer center">
        <script type="text/javascript" src="//yandex.st/share/share.js"
                charset="utf-8"></script>
        <div class="yashare-auto-init" data-yashareL10n="ru"
             data-yashareType="button" data-yashareQuickServices="vkontakte,facebook,twitter,odnoklassniki,moimir"

            ></div>
    </div>
    <div class="footer right">
        <div id="options">
            <input type="checkbox" id="symbolsOption" value="1"> Без символов &laquo;-_!&raquo;
        </div>
        <i class="fa fa-cog"></i> <a href="#" id="optionsLink">опции</a>
        <i class="fa fa-git-square"></i> <a href="https://github.com/maindefine/simplepassword.ru" target="_blank">исходники</a>
    </div>

    <script src="js/config.js"></script>
    <script src="js/cookie.js"></script>
    <script src="js/functions.js"></script>
    <script src="js/actions.js"></script>

    <?php include(__DIR__.'/inc/counters.php'); ?>
</body>
</html>
