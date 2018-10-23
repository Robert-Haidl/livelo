$(document).ready(function () {
	callListener();
});

function callListener(){
    loadParticles();
    callClickListener();
}

function loadParticles(){
	particlesJS.load('landing', 'assets/particlesjs-config.json', function() {
	});
}

