$(document).ready(function () {
    callListener();
});

function callListener() {
    loadParticles();
    callClickListener();
    let json = {
      "name": "Hurensohn"
    }
    console.log("Hallo: "+json.name);
}

function loadParticles() {
    particlesJS.load('landing', 'assets/particles-index.json', function () {});
}

function callClickListener() {
    $("#more_information").on("click", function (e) {
    });


    var options = {
        strings: ["IT Lösungen", "SEO", "Webdesign", "Appdesign"],
        typeSpeed: 200,
        loop: true,
        loopCount: Infinity,
        backSpeed: 150,
        showCursor: false
    }

    var typed = new Typed(".typer", options);


}


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

$('.dropbtn').click(function() { 
  $('.dropdown-content a').css('opacity', '1');
});

$( ".menuToggle" ).click(function() {
  $(this).css('opacity','0');
});

$('body').click(function() {
  $(".menuToggle").css('opacity','1');
});


