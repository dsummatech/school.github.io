$(function () {
    $(".slider, .main").click(function () {
       $(".mini-menu").slideUp(); 
    });
    window.onscroll = function(){scrollFunction()};
 function scrollFunction() {
     var nav = $("nav");
     
     if (document.body.scrollTop >= 10 || document.documentElement.scrollTop > 10) {
         $("nav").css({"background-color":""});
         
     }
     
     else{
         $("nav").css({"background-color":""});
     }
 }
    $("body").ready(function () {
       $("nav .mini-btn button").click(function () {
          $(".mini-menu").slideToggle();  
        });
        $(".mini-menu").click(function () {
            $(".mini-menu").slideToggle(100);
        });
        $(".main").click(function () {
          $(".mini-menu").slideUp(100); 
       });

       var n = 0;
       $(".front").click(function () {
           if (n != 75) {
            n += 25;
            $(".sliderimg").css({"right":n + "%"}); 
           }
           
       });
       $(".back").click(function () {
        if (n != 0) {
         n -= 25;
         $(".sliderimg").css({"right":n + "%"}); 
        }
        
    });


    function slide() {
        if (n != 75) {
            n += 25;
            $(".sliderimg").css({"right":n + "%"});
           }
           else{
               n = -25;
           }
    }
    setInterval(slide, 3000);
var tn = 0;
    $(".teacher-front").click(function () {
        if (tn != 50) {
            tn += 50;
            $(".about-teachers-col").css({"right": tn + "%", "transition":"ease 1s"})
        }
    });

    $(".teacher-back").click(function () {
        if (tn != 0) {
            tn -= 50;
            $(".about-teachers-col").css({"right": tn + "%"})
        }
    });


    }); 
 });