$(document).ready(function(){
   $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 400;
             if ($(window).scrollTop() > navHeight ) {
                 $('nav').addClass('menu_fixed');
             }
             else {
                 $('nav').removeClass('menu_fixed');
             }
    });    
});
