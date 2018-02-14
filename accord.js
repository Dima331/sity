
var accordion_vertic = document.getElementById("accordion_vertic"),
    accor__it = accordion_vertic.getElementsByClassName("accordion__item"),
    contents = accordion_vertic.getElementsByClassName("accordion__about"),
    title = accordion_vertic.getElementsByClassName("accordion__title"),
    i;
var static = document.getElementsByClassName("accordion__about-static");
var str = document.getElementsByClassName("accordion__link");
//  alert( window.innerWidth );
console.log(accordion_vertic);
console.log(accor__it);
console.log(contents);


accordion_vertic.addEventListener("click", function (e) {
    if (e.target.classList.contains("accordion__link") || e.target.classList.contains("accordion__title")) {
        var trigger;
        if (e.target.classList.contains("accordion__link")) { // если клик по триггеру
            trigger = e.target;
        } else { // значит клик был по тексту и триггер это родительский узел блока с текстом
            trigger = e.target.parentNode;
        }
        e.preventDefault();
        //var trigger = e.target;
        var content = trigger.nextElementSibling;
        var item_2 = trigger.parentNode;

        if (!item_2.classList.contains("cheak")) { // не активный
            // удаляем active для всех li
            for (i = 0; i < accor__it.length; i++) {
               accor__it[i].classList.remove("cheak");
                accor__it[i].classList.remove("accordion__item-active");
             
               // contents[i].classList.add("visually-hidden");
            }
            for (i = 0; i < contents.length; i++) {
             //   contents[i].classList.add("visually-hidden");
            }
            // добавляем active для текущего li
            item_2.classList.add("cheak");
            item_2.classList.add("accordion__item-active");
            // закрываем все блоки с контентом
            for (i = 0; i < contents.length; i++) {
                contents[i].style.width = null;
              //  contents[i].classList.add("visually-hidden");
            }
            // открываем текущий блок с контентом
            var tmp = window.innerWidth - 259;
            console.log(54986549);

            if (window.innerWidth < 481 && window.innerWidth > 421) {
                tmp = window.innerWidth - 274;
            }
            if (window.innerWidth <= 420) {
                tmp = window.innerWidth - 148;
            }

            if (window.innerWidth >= 1100) {
                content.style.width = 32 + "rem";
            } else if (window.innerWidth <= 768 && window.innerWidth >= 669) {
                content.style.width = tmp + "px";
                for (i = 0; i < static.length; i++) {
                    static[i].style.width = (tmp - 70) + "px";
                }
            }
            else if (window.innerWidth <= 668 && window.innerWidth >= 559) {
                content.style.width = tmp + "px";
                for (i = 0; i < static.length; i++) {
                    static[i].style.width = (tmp - 30) + "px";
                }
            }
            else if (window.innerWidth <= 568) {
                content.style.width = tmp + "px";
                for (i = 0; i < static.length; i++) {
                    static[i].style.width = (tmp - 20) + "px";
                }
            } else {
                content.style.width = 32 + "rem";
            }
            //content.classList.remove("visually-hidden");
        } else { // активный
            // удаляем класс active для текущего li
            item_2.classList.remove("cheak");
            item_2.classList.remove("accordion__item-active");
            // закрываем текущий блок с контентом
            content.style.width = null;
            // contents.classList.add("visually-hidden");
            function hid() {
                console.log("ssss");
                for (i = 0; i < contents.length; i++) {
                //    contents[i].classList.add("visually-hidden");
                    console.log("ssss");
                }
            }
        }
    }
});