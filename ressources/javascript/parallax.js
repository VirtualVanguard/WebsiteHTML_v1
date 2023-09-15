$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.parallax-bg').css('background-position-y', -(scrollTop / 2) + 'px');
    });
});