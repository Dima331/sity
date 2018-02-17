console.log(8943659);
const phone = document.querySelector("#user-phone");
const flove = document.querySelector("#user-flove");

phone.addEventListener("keydown", function (e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;

    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }

    if (e.key == '-') {
        isDash = true;
    }

    if (e.key == "ArrowLeft" || e.key == 'ArrowRight' || e.key == 'Backspace'|| e.key == 'Delete') {
        isControl = true;
    }
    if (isDigit == false && isDash == false && isControl == false) {
        e.preventDefault();
    }
});
flove.addEventListener("keydown", function (e) {
    let isDigit = false;
    let isControl = false;
    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }

    if (e.key == "ArrowLeft" || e.key == 'ArrowRight' || e.key == 'Backspace' || e.key == 'Delete') {
        isControl = true;
    }
    if (isDigit == false && isControl == false) {
        e.preventDefault();
    }
});





var content__message = document.querySelector(".full_r");
const button_ex = document.querySelector(".messege__buttom");
$('#data').on('submit', submitForm);

function submitForm(ev) {
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');
    console.log(form);
    console.log(data);
    ajaxForm(form).done(function (msg) {
        var mes = msg.mes,
            status = msg.status;

            document.body.classList.add('stop-scrolling');
            /*if (content__message.classList.contains('animach')) {
              content__message.classList.remove('animach');
            }*/
           
            $('#order__message').removeClass("hid");
           
           // $('.messege__answer').text("Request failed: " + textStatus);

        /*
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }*/
    }).fail(function (jqXHR, textStatus) {

        document.body.classList.add('stop-scrolling');
       /* if (content__message.classList.contains('animach')) {
          content__message.classList.remove('animach');
        }*/
        if (content__message.classList.contains('animach')) {
            content__message.classList.remove('animach');
          }
          content__message.classList.add('active2');
        $('#order__message').removeClass("hid");
        $('.messege__answer').text("Request failed: " + textStatus);
        

    // alert("Request failed: " + textStatus);


    });

};

button_ex.addEventListener("click", function (event) {
      event.preventDefault();
    //  content__message.classList.remove('active2');
    //  content__message.classList.add('animach');
   //   setTimeout(addhidden, 1000);
   $('#order__message').addClass("hid");
      document.body.classList.remove('stop-scrolling');
     /* function addhidden() {
        content__message.classList.add('hidden');
        content__message.classList.remove('animach');
      }*/
    });  



// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');

    return $.ajax({
        type: 'POST',
        url: url,
        dataType: 'JSON',
        data: data
    })
};