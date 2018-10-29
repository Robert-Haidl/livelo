$(document).ready(function () {
    callListener();
});

function callListener() {
    loadParticles();
    callClickListener();
}

function loadParticles() {
    particlesJS.load('landing', 'assets/particlesjs-config.json', function () {});
}

function callClickListener() {
    $("#more_information").on("click", function (e) {
        alert("not implemented yet");
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