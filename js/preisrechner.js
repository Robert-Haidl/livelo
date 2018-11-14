$(document).ready(function () {
    hideAllPages();
    callListener();
});

function callListener(){
    callClickListener();
}

function callClickListener(){
    $("#start").on("click", function () {
            $('#preisrechner-title').css('animation','fade 0.5s');
            $('#preisrechner-title').css('opacity','0');
            $(this).css('transform','scale(2)');
            $(this).css('margin-top','-200px');
            $(this).css('animation','move 2.5s');
            $(this).css('animation-delay','1s');

            setTimeout(() => {
                $("#page1").fadeIn();
                $("#start").hide();
            }, 2500);
    });

    $(".pr-item").on("click", function () {
        let page = $(this).attr("forward");
        hideAllPages();
        console.log("Go to page:"+page);
        $("#"+page).fadeIn();
    });
}

function hideAllPages(){
    $(".page").hide();
}