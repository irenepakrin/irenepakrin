window.addEventListener('DOMContentLoaded', function () {



    $('#header > .menu > img').click(function(){
        console.log('이미지클릭')
        $("#menu").fadeIn();
    });

    $('#menu .close_btn').click(function(){
        console.log('이미지클릭')
        $("#menu").fadeOut();
    });


    let scrollValue = [0,1140,3090,5170,7000];

    $('.menu_list li').click(function (){
        $("#menu").fadeOut();
        let idx = $('.menu_list li').index(this);

        container.scrollTo(0, scrollValue[idx], 0, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });




    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










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




})


