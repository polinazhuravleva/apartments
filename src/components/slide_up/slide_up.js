require('jquery');

const $topBtn = $('.slide-wrapper');
$(window).scroll(() => {
    $(document).scrollTop() > 1000 ? $topBtn.fadeIn() :$topBtn.fadeOut();
});
$topBtn.on('click', () => $('html, body').animate({scrollTop: 0}, 800));