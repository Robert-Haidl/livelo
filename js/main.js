(function ($) {

	skel
		.breakpoints({
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		});

	$(function () {

		var $window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#showNavbar'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Mobile?
		if (skel.vars.mobile)
			$body.addClass('is-mobile');
		else
			skel
			.on('-medium !medium', function () {
				$body.removeClass('is-mobile');
			})
			.on('+medium', function () {
				$body.addClass('is-mobile');
			});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

		// Menu.

		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			})

		$(".close").click(function(menuAppears){
				$(".menuToggle").css('opacity','1');
			  });
		
		$('body').click(function(x){
			$(".menuToggle").css('opacity','1');
			  });
			  
		// Fontawesome button

		$('.fas').scroll(function () {
			$(this).css("display", "none");
		});


		// Header.
		if (skel.vars.IEVersion < 9)
			$header.removeClass('alt');

		if ($banner.length > 0 &&
			$header.hasClass('alt')) {

			$window.on('resize', function () {
				$window.trigger('scroll');
			});

			$banner.scrollex({
				bottom: $header.outerHeight() + 1,
				terminate: function () {
					$header.removeClass('alt');
				},
				enter: function () {
					$header.addClass('alt');
				},
				leave: function () {
					$header.removeClass('alt');
				}
			});

		}

	});

})(jQuery);

var loading = false;
function toggleLoading() {
	if (loading == false) {
		loading = true;
		$("body").showLoading();
	} else {
		loading = false;
		$("body").hideLoading();
	}
}

function showSuccessMessage(message){
	swal(
		'Erfolgreich!',
		''+message,
		'success'
	  )
}

function showErrorMessage(message){
	swal(
		'Fehler!',
		''+message,
		'error'
	  )
}


//Animation slogan
var defaultPadding = 1;
if (window.matchMedia("(max-width: 600px)").matches) {
	defaultPadding = 1.5;
}

if (window.matchMedia("(max-width: 800px)").matches) {
	defaultPadding = 1.6;
}

if (window.matchMedia("(max-width: 1050px)").matches) {
	defaultPadding = 1.65;
}


anime.timeline({
		loop: false
	})
	.add({
		targets: '.ml5 .line',
		opacity: [0.5, 1],
		scaleX: [0, 1],
		easing: "easeInOutExpo",
		duration: 1000
	}).add({
		targets: '.ml5 .line',
		duration: 700,
		easing: "easeOutExpo",
		translateY: function (e, i, l) {
			var offset = (defaultPadding * -1) + defaultPadding * 2 * i;
			return offset + "em";
		}
	}).add({
		targets: '.ml5 .ampersand',
		opacity: [0, 1],
		scaleY: [0.5, 1],
		easing: "easeOutExpo",
		duration: 900,
		offset: '-=600'
	}).add({
		targets: '.ml5 .letters-left',
		opacity: [0, 1],
		translateX: ["0.5em", 0],
		easing: "easeOutExpo",
		duration: 900,
		offset: '-=700'
	}).add({
		targets: '.ml5 .letters-right',
		opacity: [0, 1],
		translateX: ["-0.5em", 0],
		easing: "easeOutExpo",
		duration: 900,
		offset: '-=700'
	});

	$('.dropbtn').click(function() { 
		$('.dropdown-content a').css('opacity', '1');
	  });

	  $( ".menuToggle" ).click(function() {
		  $(this).css('opacity','0');
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

