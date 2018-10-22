$(document).ready(function () {
	callListener();
});

function callListener(){
	backgroundMovementListener();
	loadParticles();
}

function backgroundMovementListener(){
	var movementStrength = 15;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$("body").mousemove(function (e) {
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('body').css("background-position", newvalueX + "px     " + newvalueY + "px");
	});
}

function loadParticles(){
	particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
	});
}