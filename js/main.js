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
        delay: 3.5
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

    // let sections = gsap.utils.toArray(".sec_03 .item");
    // let sections = gsap.utils.toArray(".sec_03 > .itemBox > .item");

    // gsap.to(sections, {
    //     yPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".sec_03",
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: 1,
    //         markers: true,
    //         snap: {
    //             snapTo: 1 / (sections.length - 1),
    //             duration: 0.1,
    //             delay: 0.1,
    //             ease: "power1.inOut"
    //         },

    //         end: () => "+=" + (window.innerHeight * sections.length - 1)
    //         // end: "+=1500"
    //     }
    // });


    const sections = gsap.utils.toArray(".itemBox > .item");

    gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".itemBox",
            pin: true,
            pinSpacing: false,
            scrub: 1,
            markers: true,
            snap: {
                snapTo: 1 / (sections.length - 1), // 1/3 = 0.333씩 snap
                duration: 0.1,
                delay: 0.1,
                ease: "power1.inOut"
            },
            end: () => "+=" + window.innerHeight * (sections.length - 1)
        }
    });



    $(function () {
        $("a[href^='#']").on("click", function (e) {
            e.preventDefault(); // 기본 점프 이동 막기
            let target = $($(this).attr("href"));
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 600); // 600ms 부드럽게 이동
            }
        });
    });

})

