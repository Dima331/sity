
var accordion_vertic = document.getElementById("accordion_vertic"),
    accor__it = accordion_vertic.getElementsByClassName("accordion__item"),
    contents = accordion_vertic.getElementsByClassName("accordion__about"),
    title = accordion_vertic.getElementsByClassName("accordion__title"),
    i;
var static = document.getElementsByClassName("accordion__about-static");

accordion_vertic.addEventListener("click", function (e) {
    if (e.target.classList.contains("accordion__link") || e.target.classList.contains("accordion__title")) {
        var trigger;
        if (e.target.classList.contains("accordion__link")) { // если клик по триггеру
            trigger = e.target;
        } else { // значит клик был по тексту и триггер это родительский узел блока с текстом
            trigger = e.target.parentNode;
        }
        e.preventDefault();
        var content = trigger.nextElementSibling;
        var item_2 = trigger.parentNode;

        if (!item_2.classList.contains("cheak")) { // не активный

            for (i = 0; i < accor__it.length; i++) {
                accor__it[i].classList.remove("cheak");
                accor__it[i].classList.remove("accordion__item-active");
            }
            // добавляем active для текущего li
            item_2.classList.add("cheak");
            item_2.classList.add("accordion__item-active");
            // закрываем все блоки с контентом
            for (i = 0; i < contents.length; i++) {
                contents[i].style.width = null;
            }
            // открываем текущий блок с контентом
            var tmp = window.innerWidth - 225;
            if (window.innerWidth < 481 && window.innerWidth > 421) {
                tmp = window.innerWidth - 225;
            }
            if (window.innerWidth <= 455) {
                tmp = window.innerWidth - 131.25;
            }
            if (window.innerWidth >= 1100) {
                content.style.width = 32 + "rem";
            } else if (window.innerWidth <= 768 && window.innerWidth >= 669) {
                content.style.width = tmp + "px";
                for (i = 0; i < static.length; i++) {
                    static[i].style.width = (tmp) + "px";
                }
            }
            else if (window.innerWidth <= 668 && window.innerWidth >= 559) {
                content.style.width = tmp + "px";
                for (i = 0; i < static.length; i++) {
                    static[i].style.width = (tmp) + "px";
                }
            }
            else if (window.innerWidth <= 568) {
                content.style.width = tmp + "px";
                for (i = 0; i < static.length; i++) {
                    static[i].style.width = (tmp) + "px";
                }
            } else {
                content.style.width = 32 + "rem";
            }
        } else { // активный
            // удаляем класс active для текущего li
            item_2.classList.remove("cheak");
            item_2.classList.remove("accordion__item-active");
            content.style.width = null;
        }
    }
});