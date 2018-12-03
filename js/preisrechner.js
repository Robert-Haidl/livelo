$(document).ready(function () {
    hideAllPages();
    callListener();
});

function callListener() {
    callClickListener();
}

var price = 0;

function callClickListener() {
    $("#start").on("click", function () {
            $("#start").css('animation','fade 2s');
            $("#page1").fadeIn();
            $("#start").hide();
    });

    $(".pr-item").on("click", function () {
        let page = $(this).attr("forward");
        console.log(page);
        hideAllPages();
        $("#" + page).fadeIn();
        let item_price = $(this).attr("extraCost");
        price += parseInt(item_price);
        $("#price").text(""+price+" €");
    });
}

function hideAllPages() {
    $(".page").hide();
}
