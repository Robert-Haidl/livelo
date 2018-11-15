$(document).ready(function () {
    hideAllPages();
    callListener();
});

function callListener() {
    callClickListener();
}

function callClickListener() {
    $("#start").on("click", function () {
        $('#preisrechner-title').css('animation', 'fade 0.5s');
        $('#preisrechner-title').css('opacity', '0');
        $(this).css('transform', 'scale(2)');
        $(this).css('margin-top', '-200px');
        $(this).css('animation', 'move 1.5s');
        $(this).css('animation-delay', '.5s');
        setTimeout(() => {
            $(".wrapper").css("padding", "2em 0 4em 0");
            $("#preisrechner-title").hide();
            $("#page1").fadeIn();
            $("#start").hide();
        }, 1200);
    });

    $(".pr-item").on("click", function () {
        let page = $(this).attr("forward");
        hideAllPages();
        $("#" + page).fadeIn();
    });
}

function hideAllPages() {
    $(".page").hide();
}