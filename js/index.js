$(document).ready(function () {
	callListener();
});

function callListener(){
    loadParticles();
    callClickListener();
}

function loadParticles(){
	particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
	});
}

function callClickListener(){
    $("#more_information").on("click", function(e){
        alert("not implemented yet");
    });
}