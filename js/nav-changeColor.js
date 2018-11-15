$(document).ready(function () {
    $(window).scroll(function () {
        var element1height = $(".wrapper").position().top;
        var element1bottom = $(".wrapper").height()+element1height;
        var st = $(this).scrollTop();
        if (st < element1height) {
            $(".menuToggle").css("color", "white");
        } else {
            $(".menuToggle").css("color", "black");
        }
        /*

                if (st > element1bottom) {
            $(".menuToggle").css("color", "white");
        } else {
            $(".menuToggle").css("color", "black");
        }

        */

    });
});