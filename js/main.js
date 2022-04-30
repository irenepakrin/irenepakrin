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


     $('.rotate').css('transform',`rotate(${scrollTop * 0.3}deg)`)

     




    


     gsap.to('#section00', {
        scrollTrigger: {
            trigger: "#section00",
            start: "10 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section00').addClass('on');

            }
        }
    }); 

    // gsap.to('#section01', {
    //     scrollTrigger: {
    //         trigger: "#section01",
    //         start: "1 top",
    //         // end: () => "+=" + 300,
    //         end: 'bottom bottom',
    //         scrub: true,
    //         onEnter: ()=>{
    //             $('#section01').addClass('on');

    //         }
    //     }
    // }); 

    

    

    gsap.to('#section02 .title-name', {
        scrollTrigger: {
            trigger: "#section02",
            start: "-350 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section02 .title-name').addClass('on');

            }
        }
    }); 

    gsap.to('#section02 .pic_section', {
        scrollTrigger: {
            trigger: "#section02",
            start: "-300 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section02 .pic_section').addClass('on');

            }
        }
    }); 


    gsap.to('#section03', {
        scrollTrigger: {
            trigger: "#section03",
            start: "-350 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section03').addClass('on');

            }
        }
    });     

    gsap.to('#section04', {
        scrollTrigger: {
            trigger: "#section04",
            start: "-400 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section04').addClass('on');

            }
        }
    });     

    gsap.to('#section05', {
        scrollTrigger: {
            trigger: "#section05",
            start: "-400 top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
            onEnter: ()=>{
                $('#section05').addClass('on');

            }
        }
    });  


    
        










    });



    /*  slide,click event section */

    // const wrapper = document.querySelector('#section02 .container');
    // let count = -500;

    // const addSnow = () => {
    // const snow = document.createElement('span');
    // snow.classList.add('snow');
    // snow.style.left = `${Math.random() * (window.innerWidth - 1) + 1}px`;
    // snow.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
    // snow.style.animationDelay = `${Math.random() * (10 - 1) + 1}s`;
    // snow.style.opacity = `${Math.random()}`;
    // wrapper.append(snow);
    // if (count < 300) {
    //     window.requestAnimationFrame(addSnow);
    //     count++;
    // }
    // };

    // addSnow();

})


$(window).on('load', function(){
    $('#section01').addClass('on');
});