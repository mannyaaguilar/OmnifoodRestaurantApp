$(document).ready(function(){
    
    
    /*For sticky navigation*/
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');    
        }else{
            $('nav').removeClass('sticky');
        }
        
    }, {
        offset: '60px;' 
});
    
    /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    /*Scroll to start*/
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /*Navigation scroll snippet*/
    $(function(){
        $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {
        var hashStr = this.hash.slice(1);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + hashStr +']');

        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top}, 1000);
            window.location.hash = hashStr;
            return false;
        }
    }
});        
        
    });   
    
   /*Animations on scroll for fadeIn effect*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' /*Starts animate action 50% faster when scrolling down to offset delay*/
    });
    
    /*Animations on scroll for fadeIn effect*/
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%' /*Starts animate action 50% faster when scrolling down to offset delay*/
    }); 
    
    /*Animations on scroll for fadeIn effect*/
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%' /*Starts animate action 50% faster when scrolling down to offset delay*/
    }); 
    
    /*Animations on scroll for fadeIn effect*/
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%' /*Starts animate action 50% faster when scrolling down to offset delay*/
    }); 
    
    
    /*Creates open and close affect for mobile navigation icon*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }      
                   
    });   
   
    
});





