$(document).ready(function () {
    callSubmitListener();
    contactClick();
});

var jsonData = {};

function callSubmitListener() {
    $("#myform").submit(function (e) {
        e.preventDefault();
        $("#myform").serializeArray().map(function (x) {
            jsonData[x.name] = x.value;
        });
        $("#myform").showLoading();
        $.ajax({
            type: "post",
            url: "https://livelo.at/backend/index.php?action=sendBookingRequest",
            data: {
                data: JSON.stringify(jsonData)
            },
            done: function (response) {
                console.log(1);
                $("#myform").hideLoading();
                showSuccessMessage("Danke für Ihre Anfrage.");
                $("#myform")[0].reset();
            },
            error: function (response) {
                console.log(2);
                $("#myform").hideLoading();
                showSuccessMessage("Danke für Ihre Anfrage.");
                $("#myform")[0].reset();
            },
            success: function (response) {
                console.log(3);
                $("#myform").hideLoading();
                showSuccessMessage("Danke für Ihre Anfrage.");
                $("#myform")[0].reset();
            }
        });
        return false;
    });
}


$(document).ready(function() {
    $('.rotate').css('height', $('.rotate').width());
  });

    $('.contactbutton').click(function(){
        $(this).css('animation','contactspread 1.5s');
        $(this).css('animation-fill-mode','forwards');
        $('.contactbutton h2').css('display','none');
        $('.fa-sort-down').css('display','none');
        $('.fa-times-circle').css('transform','rotate(-270deg)');
        $('.fa-times-circle').css('display','block');
        $('#main, #footer').css('opacity','0.2');
        $('#main, #footer').css('transition','opacity 0.5s ease-in-out');
        $('.menuToggle').css('color','white');
        $(this).css('cursor','unset');
});

$('.fa-times-circle').click(function(){
    
});
