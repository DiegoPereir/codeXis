$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     $('.carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true, // adicionando autoplay
        autoplayTimeout:2000, // define o tempo de transição do slide
        autoplayHoverPause:true,
        autoplaySpeed: 500, // 2 segundos
     
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      })


     var typed = new Typed(".typing", {
         strings:["INOVADORES", "EFICIENTES" ,"CONFIÀVEIS"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["YouTuber", "Desenvolvedor", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
    
});