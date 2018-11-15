$(document).ready(function () {
    $(window).scroll(function () {
        var element1height = $(".wrapper").position().top;
        var st = $(this).scrollTop();
        if (st < element1height) {
            $(".menuToggle").css("color", "white");
        } else {
            $(".menuToggle").css("color", "black");
        }
    });
});