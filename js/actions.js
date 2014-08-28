/**
 * Обновляет пароль на странице
 */
function updatePasswordAtPage()
{
    var password;
    do {
        password = generate($('#symbolsOption').prop('checked'));
    } while ($.isNumeric(password));

    $('#passwordInput').val(password);
    $('#passwordInput').fadeIn(400);
}

$(function() {
    updatePasswordAtPage();
    $('.row').fadeIn(400);
    if (getCookie('symbols') == 1) {
        $('#symbolsOption').prop('checked', true);
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

$('#symbolsOption').on('change', function() {
    setCookie('symbols', $(this).prop('checked') ? 1 : 0, 90, '/');
    return false;
})

$('#optionsLink').on('click', function() {
    if ($('#options').is(':visible'))
        $('#options').fadeOut(200);
    else
        $('#options').fadeIn(200);
    return false;
})
