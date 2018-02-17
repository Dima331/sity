const button_start = document.querySelector("#button__start");
const button_exit = document.querySelector("#maincontent__cross");
var content = document.querySelector(".maincontent__content");
const maincontent__link = document.querySelectorAll(".maincontent__link");

button_start.addEventListener("click", function () {
  document.body.classList.add('stop-scrolling');

  if (content.classList.contains('animach')) {
    content.classList.remove('animach');
  }
  content.classList.remove('hidden');
  content.classList.add('active2');
});
button_exit.addEventListener("click", function () {
  content.classList.remove('active2');
  content.classList.add('animach');
  setTimeout(addhidden, 1000);
  document.body.classList.remove('stop-scrolling');
  function addhidden() {
    content.classList.add('hidden');
    content.classList.remove('animach');
  }
 });   
 for (i = 0; i < maincontent__link.length; i++) {
  maincontent__link[i].addEventListener("click", function () {
    content.classList.remove('active2');
    content.classList.add('animach');
    setTimeout(addhidden, 1000);
    document.body.classList.remove('stop-scrolling');
    function addhidden() {
      content.classList.add('hidden');
      content.classList.remove('animach');
    }
});
 }