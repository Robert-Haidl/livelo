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

function callClickListener(){
    $("#more_information").on("click", function(e){
        alert("not implemented yet");
	});
	

var options = {
  strings: ["IT Lösungen", "Suchmaschinenoptimierung", "Webdesign", "Appdesign"],
  typeSpeed: 200
}

var typed = new Typed(".typer", options);
}

