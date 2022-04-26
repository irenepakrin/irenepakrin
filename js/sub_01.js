window.addEventListener('DOMContentLoaded', function () {






    $('#header > .menu > img').click(function(){
        console.log('이미지클릭')
        $("#menu").fadeIn();
    });

    $('#menu .close_btn').click(function(){
        console.log('이미지클릭')
        $("#menu").fadeOut();
    });


    // let scrollValue = [0,1140,3090,5170,7000];

    // $('.menu_list li').click(function (){
    //     $("#menu").fadeOut();
    //     let idx = $('.menu_list li').index(this);

    //     container.scrollTo(0, scrollValue[idx], 0, {
    //         callback: () => console.log('done!'),
    //         easing: easing.easeInOutCirc,
    //     });

    // });


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        $('.rotate').css('transform',`rotate(${scrollTop * 0.3}deg)`)




        
        










    });



    /*  slide,click event section */

    gsap.to('#section01 .main-title', {
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $(document).ready(function() {
                    $('#section01 .main-title').addClass('on');
                });
                
            }
        }
    }); 

    gsap.to('#section01 .glass-text', {
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $(document).ready(function() {
                    $('#section01 .glass-text').addClass('on');
                });
                
            }
        }
    }); 

    gsap.to('#section01 .text_contain_01', {
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $(document).ready(function() {
                    $('#section01').addClass('on');
                });
                
            }
        }
    }); 

    gsap.to('#section01 .sub-title', {
        scrollTrigger: {
            trigger: "#section01",
            start: "800 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                    $('#section01 .sub-title').addClass('on');  
            }
        }
    }); 

    gsap.to('#section01', {
        scrollTrigger: {
            trigger: "#section01",
            start: "330 top",
            end: () => "+=" + 2500,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                    $('#section01 .dashboard').addClass('on');
            }
        }
    }); 

    gsap.to('#section02', {
        scrollTrigger: {
            trigger: "#section02",
            start: "-200 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                    $('#section02').addClass('on');
            }
        }
    }); 

    gsap.to('#section03 .work_title_01', {
        scrollTrigger: {
            trigger: "#section03",
            start: "-650 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section03 .work_title_01').addClass('on');
            }
        }
    }); 

    gsap.to('#section03', {
        scrollTrigger: {
            trigger: "#section03",
            start: "-200 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section03').addClass('on');
            }
        }
    }); 

    gsap.to('#section03 .bar_part', {
        scrollTrigger: {
            trigger: "#section03",
            start: "100 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section03 .bar_part').addClass('on');
            }
        }
    }); 

    gsap.to('#section03 .bg_title_01', {
        scrollTrigger: {
            trigger: "#section03",
            start: "380 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section03 .bg_title_01').addClass('on');
            }
        }
    }); 

    gsap.to('#section04 .title_section', {
        scrollTrigger: {
            trigger: "#section04",
            start: "-170 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section04 .title_section').addClass('on');
            }
        }
    }); 

    gsap.to('#section04', {
        scrollTrigger: {
            trigger: "#section04",
            start: "-70 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section04').addClass('on');
            }
        }
    }); 

    gsap.to('#section05 .opinion_01', {
        scrollTrigger: {
            trigger: "#section05",
            start: "30 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section05 .opinion_01').addClass('on');
            }
        }
    }); 

    gsap.to('#section05 .opinion_02', {
        scrollTrigger: {
            trigger: "#section05",
            start: "30 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section05 .opinion_02').addClass('on');
            }
        }
    }); 



})



 // 페이지가 새로 리로드 될때만 실행
 var top_space = 0;
 if ($('#header').length) {
   top_space = $('#header').outerHeight();
 }  //해더에 바가 있는 경우 오프셋 하는 경우 필요


 var hash = window.location.hash;
 if (hash && document.getElementById(hash.slice(1))) { // #값이 있을때만 실행됨
   var $this = $(hash);
   $('html, body').animate({
     scrollTop: $this.offset().top - top_space
   }, 0, 'easeInOutExpo', function () {
     window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash;
   });
 }
 
 $('.section03').on('click', function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     if (target.length) {

       $('html, body').animate({
         scrollTop: target.offset().top - top_space
       }, 0, 'easeOutCubic'); //숫자는 스크롤 되는 시간, ease머시기는 효과

       return false;
     }
   }
 });



