

      
      
$(document).ready(function(){
   $(window).scroll(function() {
       if(this.scrollY > 20){  
          $('.navbar').addclass("sticky");
    }else{
       $('.navbar').removeClass("sticky");
    }  
   

   });

    
    $('.menu-btn').click(function(){

     $('.navbar.menu').toggleclass("active"); 
     $('menu-btn i').toggleclass("active");
    });
     
           
  
//owl carssel

  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
         
      
      0:{
         items: 1,
         nav: false
      },
     600:{
         items: 2,
         nav: false
      },
      1000:{
         items: 3,
         nav: false
      }

   }
   
      

  });
});

var typed =new Typed(".typing",{
   strings: ["Developer","blogger","freelancer"],
   typedspeed: 100,
   backspeed: 100,
   loop: true
   });

   var typed =new Typed(".typing-2",{
      strings: ["Developer","blogger","freelancer"],
      typedspeed: 100,
      backspeed: 100,
      loop: true
   });



   


