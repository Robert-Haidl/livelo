$(document).ready(function () {
  hideAllPages();
  callListener();
  hideStart();
});
    
$(".pr-item").on("click", function () {
  let page = $(this).attr("forward");
  hideStart();
  hideAllPages();
  $("#" + page).fadeIn();
});

function hideAllPages() {
  $(".page").hide();
}

function callListener() {
  callClickListener();
}

function hideStart(){
  $(".pagestart").hide();
}

$(".firstbutton, .lastbutton").off("click");