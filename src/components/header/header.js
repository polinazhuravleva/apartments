require('jquery');

$('.header__navigation').on('click', 'a', function (event) {
    event.preventDefault();
    $('body,html').animate({scrollTop: $(this.hash).offset().top}, 1000);
});