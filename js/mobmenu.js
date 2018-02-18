const hamburgerMenu_start = document.querySelector("#hamburger-menu");
const hamburgerMenu_end = document.querySelector("#mobmenu__cross");
var contentMenu = document.querySelector(".hero__mobmenu");
const hamburgerMenu_link = document.querySelectorAll(".mobmenu__link");

hamburgerMenu_start.addEventListener("click", function () {
  document.body.classList.add("stop-scrolling");
  $(".hero").removeClass("active");
  if (contentMenu.classList.contains("animation")) {
    contentMenu.classList.remove("animation");
  }
  contentMenu.classList.remove("hidden");
  contentMenu.classList.add("animationRevers");
});
hamburgerMenu_end.addEventListener("click", function () {
  contentMenu.classList.remove("animationRevers");
  contentMenu.classList.add("animation");
  setTimeout(addhidden, 1000);
  document.body.classList.remove("stop-scrolling");
   $(".hero").addClass("active");
  function addhidden() {
    contentMenu.classList.add("hidden");
    contentMenu.classList.remove("animach");
  }
});
for (i = 0; i < hamburgerMenu_link.length; i++) {
  hamburgerMenu_link[i].addEventListener("click", function () {
    contentMenu.classList.remove("animationRevers");
    contentMenu.classList.add("animation");
    setTimeout(addhidden, 1000);
    document.body.classList.remove("stop-scrolling");
    function addhidden() {
      contentMenu.classList.add("hidden");
      contentMenu.classList.remove("animation");
    }
  });
}