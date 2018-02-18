var items = document.getElementById("items"),
    composition = document.getElementsByClassName("composition"),
    compound = document.getElementsByClassName("compound");
var sizeWindow;

sizeWindow = window.innerWidth;
window.addEventListener("resize", function () {
    sizeWindow = window.innerWidth;
    if (window.innerWidth >= 949) {
        for (i = 0; i < compound.length; i++) {
            compound[i].style.display = null;
        }
    }
});
items.addEventListener("click", function (e) {
    if (e.target.classList.contains("composition")
        || e.target.classList.contains("composition__title")){
        var trigger;
        if (e.target.classList.contains("composition")) {
            trigger = e.target;
        } else { 
            trigger = e.target.parentNode;
        }
        var content = trigger.nextElementSibling;
        if (sizeWindow >= 951) {
            for (i = 0; i < compound.length; i++) {
                compound[i].style.display = null;
            }
        } else if (sizeWindow < 951) {
            content.style.display = "flex";
        }
    }
});
$(document).ready(function () {
    $(".slideburger__left-cross").on("click", function (e) {
        $(this).parent().css("display", "none");
    });
});
$(document).ready(function () {
    $(".composition").on("click", function (e) {
        $(this).siblings(".compound").css("display", "flex");
        if (window.innerWidth >= 949) {
            for (i = 0; i < compound.length; i++) {
                compound[i].style.display = null;
            }
        }
    });
});