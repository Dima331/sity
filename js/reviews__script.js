$(document).ready(function () {
    var text;
    var title;
    $(".reviews__button").on("click", function (e) {
        e.preventDefault();
        $(".reviews").removeClass("active");
        text = $(this).siblings(".reviews__about-hidden").text();
        title = $(this).siblings(".reviews__title ").text();
        $(".full-review__title").text(title);
        $(".full-review__content").text(text);
        $(".full").removeClass("hidden");
    });
    $(".reviews__button-mobile").on("click", function (e) {
        e.preventDefault();
        document.body.classList.add("stop-scrolling");
        text = $(this).siblings(".reviews__about-hidden").text();
        title = $(this).siblings(".reviews__title ").text();
        $(".full-review__title").text(title);
        $(".full-review__content").text(text);
        $(".full_r").removeClass("hidden");
        $(".reviews").removeClass("active");
    });
    $(".full-review__close").on("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("stop-scrolling");
        $(".reviews").addClass("active");
        $(".full").addClass("hidden");
    });
});
