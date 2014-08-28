/**
 * Обновляет пароль на странице
 */
function updatePasswordAtPage()
{
    var password;
    do {
        password = generate($('#noSymbolsOption').prop('checked'), $('#noRepeatSyllableOption').prop('checked'));
    } while (!isSafePassword(password));

    $('#passwordInput').val(password);
    $('#passwordInput').fadeIn(400);
}

$(function() {
    updatePasswordAtPage();
    $('.row').fadeIn(400);
    if (getCookie('no_symbols') == 1) {
        $('#noSymbolsOption').prop('checked', true);
    }
    if (getCookie('no_repeat_syllable') == 1) {
        $('#noRepeatSyllableOption').prop('checked', true);
    }
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
    setCookie('no_symbols', $(this).prop('checked') ? 1 : 0, 90, '/');
    return false;
})

$('#noRepeatSyllableOption').on('change', function() {
    setCookie('no_repeat_syllable', $(this).prop('checked') ? 1 : 0, 90, '/');
    return false;
})

$('#optionsLink').on('click', function() {
    if ($('#options').is(':visible'))
        $('#options').fadeOut(200);
    else
        $('#options').fadeIn(200);
    return false;
})
