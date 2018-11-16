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
        $.ajax({
            type: "post",
            url: "https://livelo.at/backend/index.php?action=sendBookingRequest",
            data: {
                data: JSON.stringify(jsonData)
            },
            success: function (response) {
                if (response.status == "OK") {
                    $("#myform")[0].reset();
                    alert("Mail wurde versendet");
                    //onSuccess
                } else {
                    //onError
                    alert("Es ist ein Fehler aufgetreten!");
                }
            }
        });
        return false;
    });
}