$('.ml6 .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({
    loop: false
  })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1500,
    delay: function (el, i) {
      return 50 * i;
    }
  });

$('.ml3').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({
    loop: false
  })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function (el, i) {
      return 150 * (i + 1)
    }
  });

  // Wrap every letter in a span
$('.ml10 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 45 * i;
    }
  });

  $(".page2, .page3, .page4, .page5 ").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
