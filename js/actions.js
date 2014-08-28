/**
 * Обновляет пароль на странице
 */
function updatePasswordAtPage()
{
    var password;
    do {
        password = generate();
    } while ($.isNumeric(password));

    $('#passwordInput').val(password);
    $('#passwordInput').fadeIn(400);
}


$(function() {
    updatePasswordAtPage();
    $('.row').fadeIn(400);
})

$('#moreButton').on('click', function() {
    $('#passwordInput').fadeOut(200, function() {
        updatePasswordAtPage();
    });

    return false;
})
