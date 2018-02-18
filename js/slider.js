var leftArrow = document.querySelector(".burgers__left-arrow");
var rightArrow = document.querySelector(".burgers__right-arrow");
var sliderList = document.querySelector(".slideburger");
var sliderContainer = document.querySelector(".burgers__content");
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;

leftArrow.addEventListener("click", function (e) {
  e.preventDefault();
  sliderList.style.transition = 0.3 + "s";
  var currentLeft = (parseInt(getComputedStyle(sliderList).left));
  if (start > 1 && currentLeft % size == 0) {
    sliderList.style.left = currentLeft + size + "px";
    start--;
  } else if (currentLeft % size == 0) {
    sliderList.style.left = currentLeft - 4 * size + "px";
    start = 5;
  }
})
rightArrow.addEventListener("click", function (e) {
  e.preventDefault();
  sliderList.style.transition = 0.3 + "s";
  var currentLeft = (parseInt(getComputedStyle(sliderList).left));
  if (start < 5 && currentLeft % size == 0) {
    sliderList.style.left = currentLeft - size + "px";
    start++;
  } else if (currentLeft % size == 0) {
    sliderList.style.left = 0 + "px";
    start = 1;
  }
})
window.addEventListener("resize", function () {
  size = parseInt(getComputedStyle(sliderContainer).width);
  sliderList.style.transition = 0 + "s";
  sliderList.style.left = -size * (start - 1) + "px";
});