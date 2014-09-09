/**
 * Обновляет пароль на странице
 */
function updatePasswordAtPage()
{
    var password;
    do {
        password = generate(
            $('#noSymbolsOption').prop('checked'),
            $('#noRepeatSyllableOption').prop('checked'),
            $('#noWords').prop('checked')
        );
    } while (!isSafePassword(password));

    $('#passwordInput').val(password);
    $('#passwordInput').fadeIn(400);
}

$(function() {
    if (getCookie('no_symbols') == 1) {
        $('#noSymbolsOption').prop('checked', true);
    }
    if (getCookie('no_repeat_syllable') == 1) {
        $('#noRepeatSyllableOption').prop('checked', true);
    }
    if (getCookie('no_words') == 1) {
        $('#noWords').prop('checked', true);
    }
    if (getCookie(LAST_UPDATE_COOKIE_NAME) != 1) {
        $('#updates').fadeIn(1000);
    }

    updatePasswordAtPage();
    $('.row').fadeIn(400);
})

$('#moreButton').on('click', function() {
    if ($('#options').is(':visible'))
        $('#options').fadeOut(200);

    $('#passwordInput').fadeOut(200, function() {
        updatePasswordAtPage();
    });

    return false;
})

$('#noSymbolsOption').on('change', function() {
    setCookie('no_symbols', $(this).prop('checked') ? 1 : 0);
    return false;
})

$('#noRepeatSyllableOption').on('change', function() {
    setCookie('no_repeat_syllable', $(this).prop('checked') ? 1 : 0);
    return false;
})

$('#noWords').on('change', function() {
    setCookie('no_words', $(this).prop('checked') ? 1 : 0);
    return false;
})

$('#optionsLink').on('click', function() {
    if ($('#options').is(':visible'))
        $('#options').fadeOut(200);
    else
        $('#options').fadeIn(200);
    if (getCookie(LAST_UPDATE_COOKIE_NAME) != 1) {
        setCookie(LAST_UPDATE_COOKIE_NAME, 1);
        $('#updates').fadeOut(1000);
    }
    return false;
})
