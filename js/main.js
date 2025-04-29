$(document).ready(function () {

    gsap.registerPlugin(ScrollTrigger);

    $(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $('body').addClass('stop-scroll');
    setTimeout(function () {
        $('body').removeClass('stop-scroll');
    }, 4800);

    gsap.from('header', {
        y: -80,
        duration: 0.5,
        delay: 4.5
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".main_visual01",
            start: "top center",
            toggleActions: "play none none none",
            markers: false
        }
    });

    tl.fromTo(".txt_01",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
    )
        .to(".txt_01",
            { opacity: 0, duration: 0.5, delay: 0.5, ease: "power2.inOut" }
        )
        .fromTo(".txt_02",
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power2.out" }
        );

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


    // sec_02 텍스트 페이드 인 아웃
    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        let winHeight = $(window).height();
    
        $('.sec_02 .container').each(function () {
            let $this = $(this);
            let offsetTop = $this.offset().top;
            let offsetBottom = offsetTop + $this.outerHeight();
    
            // 뷰포트 중앙 기준
            if (scrollTop + winHeight / 2 >= offsetTop && scrollTop + winHeight / 2 < offsetBottom) {
                $('.sec_02 .txt_box').removeClass('active');
                $this.find('.txt_box').addClass('active');
            }
        });
    });
    
    // $(window).on('scroll', function () {
    //     let scrollTop = $(window).scrollTop();
    //     let offset = 200; // 필요 시 조정

    //     let container1Top = $('.sec_02 > .container_01').offset().top - offset;
    //     let container2Top = $('.sec_02 > .container_02').offset().top - offset;
    //     let container3Top = $('.sec_02 > .container_03').offset().top - offset;

    //     let activeTarget;

    //     if (scrollTop >= container3Top) {
    //         activeTarget = $('.sec_02 > .container_03 > .txt_box');
    //     } else if (scrollTop >= container2Top) {
    //         activeTarget = $('.sec_02 > .container_02 > .txt_box');
    //     } else if (scrollTop >= container1Top) {
    //         activeTarget = $('.sec_02 > .container_01 > .txt_box');
    //     }

    //     $('.sec_02 .txt_box').each(function () {
    //         if ($(this).is(activeTarget)) {
    //             if (!$(this).hasClass('active')) {
    //                 $(this).addClass('active');
    //             }
    //         } else {
    //             $(this).removeClass('active');
    //         }
    //     });
    // });


    // sec_03 풀페이지
    // const sections = gsap.utils.toArray(".itemBox > .item");

    // gsap.to(sections, {
    //     yPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".itemBox",
    //         pin: true,
    //         pinSpacing: false, // 여백 제거
    //         scrub: 1,
    //         snap: {
    //             snapTo: 1 / (sections.length - 1), // 1/3 = 0.333씩 snap
    //             duration: 0.1,
    //             delay: 0.1,
    //             ease: "power1.inOut"
    //         },
    //         end: () => "+=" + window.innerHeight * (sections.length - 1)
    //     }
    // });

    const container = document.querySelector('.itemBox');
    const sections = gsap.utils.toArray(".itemBox > .item");

    gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            // markers: true,
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: 0.1,
                delay: 0.1,
                ease: "power1.inOut"
            },
            end: () => "+=" + container.offsetHeight * (sections.length - 1)
        }
    });



    gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3, // 카드마다 0.3초 간격으로 순차 등장
        scrollTrigger: {
            trigger: ".card_container",
            start: "top 80%", // card_container가 화면 80% 위치에 오면 시작
            toggleActions: "play none none none",
            markers: false // 개발 중 디버깅할 때 true
        }
    });

})

