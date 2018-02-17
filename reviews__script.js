$(document).ready(function () {
    var text ;
    var title ;
    console.log(1111111);
        $('.reviews__button').on('click', function (e) {
            e.preventDefault();
            document.body.classList.add('stop-scrolling');
        text = $(this).siblings('.reviews__about-hidden').text();
        title = $(this).siblings('.reviews__title ').text();
        console.log(text);
        console.log(title);
        $('.full-review__title').text(title);
        $('.full-review__content').text(text);
            $(".full_r").removeClass('hid');
        });
    
    $('.reviews__button-mobile').on('click', function (e) {
        e.preventDefault();
        document.body.classList.add('stop-scrolling');
        text = $(this).siblings('.reviews__about-hidden').text();
        title = $(this).siblings('.reviews__title ').text();
        $('.full-review__title').text(title);
        $('.full-review__content').text(text);
        $(".full_r").removeClass('hid');

        
    });


    $('.full-review__close').on('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('stop-scrolling');
    
       
        $(".full_r").addClass('hid');


    });
});
  



   /* $(document).ready(function () {
        $('.composition').on('click', function (e) {
            $(this).siblings('.compound').css("display", "flex");
        });
    
    });*/