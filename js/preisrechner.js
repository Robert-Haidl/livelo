$(document).ready(function () {
    hideAllPages();
    callListener();
});

function callListener(){
    callClickListener();
}

function callClickListener(){
    $("#start").on("click", function () {
        $("#page1").show();
    });

    $(".pr-item").on("click", function () {
        let page = $(this).attr("forward");
        hideAllPages();
        console.log("Go to page:"+page);
        $("#"+page).show();
    });
}

function hideAllPages(){
    $(".page").hide();
}