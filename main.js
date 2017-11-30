$(function scrolly(){
     //Keep track of last scroll
     var lastScroll = 0;
     $(window).scroll(function(event){
         //Sets the current scroll position
         var st = $(this).scrollTop();
         //Determines up-or-down scrolling


         if (st > lastScroll){
            //Replace this with your function call for downward-scrolling
           //Maybe some timeout?
          // setTimeout( function () {
           $('.navi-bar').addClass('fixedAtTop');
          // }, 800);
         }else{
           $('.navi-bar').removeClass('fixedAtTop');
         }
         //Updates scroll position
         lastScroll = st;

         if(st == 0){
           $('.navi-bar').removeClass('fixedAtTop');
         }
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
    if( $(window).scrollTop() < window.innerHeight){
      navigation.slideUp(200);
      console.log("<");
    }else{
      navigation.slideDown(200);
      console.log(">");
    }
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();

	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $("#anchor-" + sectionName);

			if( ($(this).offset().top < $(window).scrollTop() + window.innerHeight/2) &&
				  ($(this).offset().top + $(this).innerHeight() - window.innerHeight/2 > $(window).scrollTop()) )
				{
					navigationMatch.addClass('anchor-active');
				}else{
				navigationMatch.removeClass('anchor-active');
			}
		});
	}


	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top}, 400);
	}
});


/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository:
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS();

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.8, accuracy: 0.6 })
  .addActor('luke')
  .addScene('vader:Luke.', 600)
  .addScene('luke:What?', 400)
  .addScene('vader:I am your father.', 400)
  .addScene('luke:Nooo...', -3, '!!! ', 600, 'No! ', 600)
  .addScene('luke:That\'s not true!', 600)
  .addScene('luke:That\'s impossible!', 400)
  .addScene('vader:Search your feelings.', 1600)
  .addScene('vader:You know it to be true.', 1000)
  .addScene('luke:Noooooooo! ', 600, 'No!', 400)
  .addScene('vader:Luke.', 600)
  .addScene('vader:You can destroy the Emperor.', 1600)
  .addScene('vader:He has foreseen this. ', 800)
  .addScene('vader:It is your destiny.', 1600)
  .addScene('vader:Join me.', 800)
  .addScene('vader:Together we can rule the galaxy.', 800)
  .addScene('vader:As father and son.', 1600)
  .addScene('vader:Come with me. ', 800)
  .addScene('vader:It is the only way.', 2000)
  .addScene(theater.replay.bind(theater))
