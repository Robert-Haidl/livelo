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

function myFunction(queries) {
  if (queries.matches) { // If media query matches
      $('.portfolio-monitor').css('display','none');
      $('.portfolio-phone').css('display','block');

      $('.inner-img1').css('display','none');
      $('.inner-img1-mobile').css('display','block');

      $('.inner-img2').css('display','none');
      $('.inner-img2-mobile').css('display','block');

      $('.inner-img3').css('display','none');
      $('.inner-img3-mobile').css('display','block');
  } else {
    $('.portfolio-monitor').css('display','block');
    $('.portfolio-phone').css('display','none');

    $('.inner-img1').css('display','block');
    $('.inner-img1-mobile').css('display','none');

    $('.inner-img2').css('display','block');
    $('.inner-img2-mobile').css('display','none');

    $('.inner-img3').css('display','block');
    $('.inner-img3-mobile').css('display','none');
  }
}

var queries = window.matchMedia("(max-width: 600px)")
myFunction(queries)
queries.addListener(myFunction) // Attach listener function on state changes