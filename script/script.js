(function ($) {

    const just = {
        init() {
            this.header();
            this.section1();
            this.section2();
        },
        header() {
            $('.main-btn').on({
                mouseenter() {
                    $('.sub').stop().slideDown(300);
                },
                focus(){
                    $('.sub').stop().show(0);
                }
            });
            

            $('#nav').on({
                mouseleave() {
                    $('.sub').stop().slideUp(300);
                }
            });
            
        }, //헤더
        section1() {
            let cnt = 0;

            function mainSlide() { // 0 1 2
                console.log(cnt);
                $('.slide-wrap').stop().animate({ top: `${-300 * cnt}px` }, 600, function () {
                    if (cnt > 2) cnt = 0;
                    $('.slide-wrap').stop().animate({ top: `${-300 * cnt}px` }, 0);
                });
            }

            function nextCount() {
                cnt++;
                mainSlide();
            }

            function autoTimer() {
                setInterval(nextCount, 3000);
            }
            autoTimer();

        }, // 섹1 끝
        section2() {
            $('.gallery').hide(0);
            $('.notice').show(0);

            $('.notice-btn').on({
                click() {
                    $('.notice-btn').removeClass('on');
                    $('.gallery-btn').removeClass('on');
                    $('.gallery').hide(0);
                    $('.notice').show(0);
                }
            });
            $('.gallery-btn').on({
                click() {
                    $('.notice-btn').addClass('on');
                    $('.gallery-btn').addClass('on');
                    $('.gallery').show(0);
                    $('.notice').hide(0);
                }
            });

            $('.popup-btn').on({
                click(){
                    $('.popup').addClass('on');
                }
            });
            $('.dayclose-btn').on({
                click(){
                    $('.popup').removeClass('on');
                }
            });
            $('.close-btn').on({
                click(){
                    $('.popup').removeClass('on');
                }
            });





        }, // 섹2 끝
    }
    just.init();

})(jQuery);