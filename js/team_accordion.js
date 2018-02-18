var accordionTeam = document.getElementById("accordion-team"),
itemTeamOver = accordionTeam.getElementsByClassName("team-acco__item"),
contentsTeam = accordionTeam.getElementsByClassName("team-acco__content"),
i;

accordionTeam.addEventListener("click", function (e) {
if (e.target.classList.contains("team-acco__trigger")) {
  e.preventDefault();
  var trigger = e.target;
  var content = trigger.nextElementSibling;
  var itemTeam = trigger.parentNode;

  if (!itemTeam.classList.contains("point")) { // не активный
    // удаляем active для всех li
    for (i = 0; i < itemTeamOver.length; i++) {
      itemTeamOver[i].classList.remove("point");
      itemTeamOver[i].classList.remove("team-acco__item_active");
    }
    // добавляем active для текущего li
    itemTeam.classList.add("point");
    itemTeam.classList.add("team-acco__item_active");
    // закрываем все блоки с контентом
    for (i = 0; i < contentsTeam.length; i++) {
        contentsTeam[i].style.height = null;
    }
    // открываем текущий блок с контентом
    content.style.height = content.scrollHeight + 24 + "px";

  } else { // активный
    // удаляем класс active для текущего li
    itemTeam.classList.remove("point");
    itemTeam.classList.remove("team-acco__item_active");
    // закрываем текущий блок с контентом
    content.style.height = null;
  }
}
});