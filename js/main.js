$(document).ready(function () {

    $(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $('body').addClass('stop-scroll');
    setTimeout(function () {
        $('body').removeClass('stop-scroll');
    }, 4000);

    gsap.from('header', {
        y: -150,
        duration: 0.5,
        delay: 3.6
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

    let sections = gsap.utils.toArray(".item");

    gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".sec_03",
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: 0.1,
                delay: 0.1,
                ease: "power1.inOut"
            },
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500"
        }
    });

})

