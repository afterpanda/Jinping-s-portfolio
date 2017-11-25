$(function scrolly(){
     //Keep track of last scroll
     var lastScroll = 0;
     $(window).scroll(function(event){
         //Sets the current scroll position
         var st = $(this).scrollTop();
         //Determines up-or-down scrolling

         if (st === 0){
           $('.navi-bar').addClass('navi-white');
         }else{
           $('.navi-bar').removeClass('navi-white');
         }

         if (st > lastScroll){
            //Replace this with your function call for downward-scrolling
           //Maybe some timeout?
          // setTimeout( function () {
           $('.navi-bar').addClass('fixedAtTop');
           $('.navi-bar').removeClass('navi-white');
          // }, 800);
         }else{
           $('.navi-bar').removeClass('fixedAtTop');
           $('.navi-bar').removeClass('navi-white');
         }
         //Updates scroll position
         lastScroll = st;


     });
   $('.navi-bar').hover(function(){
     $(this).removeClass('fixedAtTop');
   });
 });


$(document).ready(function(){
	var contentSection = $('.content-section');
	var navigation = $('.in-page-navi');

	//when a nav link is clicked, smooth scroll to the section
	navigation.on('click', 'a', function(event){
		event.preventDefault(); //prevents previous event
		smoothScroll($(this.hash));
	});

	//update navigation on scroll...
	$(window).on('scroll', function(){
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();

	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $("#anchor-" + sectionName);

			if( ($(this).offset().top < $(window).scrollTop() + $(window).height()/2) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()) )
				{
					navigationMatch.addClass('anchor-active');
          console.log($(this).offset().top);
          console.log($(window).height());
				}else {
				navigationMatch.removeClass('anchor-active');
			}
		});
	}


	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top}, 800);
	}
});
