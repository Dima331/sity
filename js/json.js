const phone = document.querySelector("#user-phone");
const floor = document.querySelector("#user-floor");
phone.addEventListener("keydown", function (e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }
    if (e.key == "-") {
        isDash = true;
    }

    if (e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "Backspace" || e.key == "Delete") {
        isControl = true;
    }
    if (isDigit == false && isDash == false && isControl == false) {
        e.preventDefault();
    }
});
floor.addEventListener("keydown", function (e) {
    let isDigit = false;
    let isControl = false;
    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }

    if (e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "Backspace" || e.key == "Delete") {
        isControl = true;
    }
    if (isDigit == false && isControl == false) {
        e.preventDefault();
    }
});
var content__message = document.querySelector(".message");
const button_exit = document.querySelector(".messege__buttom");
    function submitForm(ev) {
        ev.preventDefault();
        var form = $(ev.target);
        var request = ajaxForm(form);
        request.done(function(msg) {
            var mes = msg.mes,
                status = msg.status;
                $(".order").removeClass("active");
            $("#order__message").removeClass("hidden");
            $(".messege__answer").text("Сообщение отправлено");
        });
        request.fail(function (jqXHR, textStatus) {
            $(".order").removeClass("active");
            $("#order__message").removeClass("hidden");
            $(".messege__answer").text("Ошибка: " + textStatus);
        });
     }; 
     button_exit.addEventListener("click", function (event) {
        event.preventDefault();
        $(".order").addClass("active");
        $("#order__message").addClass("hidden");
    });
// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr("action");

    return $.ajax({
        type: "POST",
        url: url,
        dataType: "JSON",
        data: data
    })
};
$("#data").on("submit", submitForm);
