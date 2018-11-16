$(document).ready(function () {
    callSubmitListener();
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
