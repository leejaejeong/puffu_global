$(document).ready(function () {

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        let offset = 0; // 약간 미리 트리거 시키는 오프셋 추가

        let container01Top = $('.section_02 > .container_01').offset().top - offset;
        let container02Top = $('.section_02 > .container_02').offset().top - offset;
        let container03Top = $('.section_02 > .container_03').offset().top - offset;

        $('.txt_box').removeClass('active');

        if (scrollTop >= container03Top) {
            $('.section_02 > .container_03 > .txt_box').addClass('active');
        } else if (scrollTop >= container02Top) {
            $('.section_02 > .container_02 > .txt_box').addClass('active');
        } else {
            $('.section_02 > .container_01 > .txt_box').addClass('active');
        }
    });
})

