 $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });
		
//Skillbar 

$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#990000"});
	$('#bar2').barfiller({barColor: "#990000"});
	$('#bar3').barfiller({barColor: "#990000"});
	$('#bar4').barfiller({barColor: "#990000"});
	$('#bar5').barfiller({barColor: "#990000"});
	$('#bar6').barfiller({barColor: "#990000"});
});	

//Testimonials

$('.carousel').carousel()

//Isotope

 var $grid= $('.grid').isotope({
   itemSelector: '.grid-item',
   layoutMode: 'fitRows',
});

$('.filter button').on("click", function (){
	var value = $(this).attr('data-name');
	$grid.isotope({
	  filter: value});
} )

// Sticky menu about section

$(document).ready(function(){
	$(".js--about-section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky")
		}
	});
} )

//ScrollTop
$(document).ready(function(){
		$('#go-top').click(function(){
		$("html, body").animate({
			scrollTop:0
		},5000)
	});
		$(window).scroll(function(){
			var ourWindow =$(this).scrollTop();
			if(ourWindow<200){
				$('#go-top').fadeOut()
			}else{
				$('#go-top').fadeIn()
			}
		})
	})


//Smooth scrolling

$(document).ready(function(){
	$('a').smoothScroll();
})









	