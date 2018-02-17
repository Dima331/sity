var items = document.getElementById("items"),
    composition = document.getElementsByClassName("composition"),
    compound = document.getElementsByClassName("slideburger__left-compound");
    //burgers = document.getElementsByClassName("composition__img2");
var sizee;

sizee = window.innerWidth;
window.addEventListener('resize', function () {
    sizee = window.innerWidth;
    if (window.innerWidth >= 949) {
        for (i = 0; i < compound.length; i++) {
            compound[i].style.display = null;
        }
    }
});
items.addEventListener("click", function (e) {
    if (e.target.classList.contains("slideburger__left-composition")
        || e.target.classList.contains("composition__title")
        //  || $('.composition__img2').click()) {
    ) {
        var trigger;
        if (e.target.classList.contains("slideburger__left-composition")) { // если клик по триггеру
            trigger = e.target;
        } else { // значит клик был по тексту и триггер это родительский узел блока с текстом
            trigger = e.target.parentNode;
        }


        console.log(34565);
        //var trigger = e.target;
        var content = trigger.nextElementSibling;
        console.log(sizee);
        if (sizee >= 951) {
            console.log(36);
            for (i = 0; i < compound.length; i++) {
                compound[i].style.display = null;
            }
        } else if (sizee < 951) {
            console.log(compound);
            content.style.display = "flex";
        }
    }
    /* if (e.target.classList.contains("slideburger__left-cross")) {
 
         /* условие на крестик */
    //   console.log(8746758);
    //    var trigger = e.target;
    //    var item = trigger.parentNode;
    //var item_2 = item.parentNode;
    //item_2.style.display = null;
    //    item.style.display = null;

    /*
        if (e.target.classList.contains("cross__burger")) {
            
                    /* условие на крестик 
                    console.log(8746758);
                    var trigger = e.target;
                    var item = trigger.parentNode;
                    var item_2 = item.parentNode;
                    item_2.style.display = null;
            
    }*/

});



$(document).ready(function () {

    $('.slideburger__left-cross').on('click', function (e) {
        //console.log(9485)
        console.log($(this).parent());
        $(this).parent().css("display", "none");

    });
});
$(document).ready(function () {
    $('.composition').on('click', function (e) {
        $(this).siblings('.compound').css("display", "flex");
        if (window.innerWidth >= 949) {
            for (i = 0; i < compound.length; i++) {
                compound[i].style.display = null;
            }
        }
    });

});

/*
$('.composition').click(function(){
    alert('Вы нажали на элемент "foo"');
  });
*/

/*
for (var i = 0; i < burgers.length; i++) {
    burgers.addEventListener("click", function () {
        console.log(766777);
    if (sizee >= 951) {
        console.log(777777);
        for (i = 0; i < compound.length; i++) {
            compound[i].style.display = null;
        }
    } else if (sizee < 951) {
        console.log(88888888);
        content.style.display = "flex";
    }
});
}  */