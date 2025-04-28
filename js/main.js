$(document).ready(function () {

    $(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $('body').addClass('stop-scroll');
    setTimeout(function () {
        $('body').removeClass('stop-scroll');
    }, 3500);

    gsap.from('header', {
        y: -150,
        duration: 0.5,
        delay: 3.2
    });
    
    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        let offset = 0; // 약간 미리 트리거 시키는 오프셋 추가

        let container02Top = $('.sec_02 > .container_02').offset().top - offset;
        let container03Top = $('.sec_02 > .container_03').offset().top - offset;

        $('.txt_box').removeClass('active');

        if (scrollTop >= container03Top) {
            $('.sec_02 > .container_03 > .txt_box').addClass('active');
        } else if (scrollTop >= container02Top) {
            $('.sec_02 > .container_02 > .txt_box').addClass('active');
        } else {
            $('.sec_02 > .container_01 > .txt_box').addClass('active');
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.item').forEach((item, i) => {
        ScrollTrigger.create({
            trigger: item,
            start: "top top",
            end: "bottom top",
            snap: 1 / (document.querySelectorAll('.item').length - 1),
            scrub: 1, // 부드럽게 따라오는 느낌
        });
    });

})

