$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.wrapper').toggleClass('show');
	});
});

$(document).ready(function(){
      		$('.slick-slider').slick({
        	  	dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				responsive: [
				   {
				    breakpoint: 1024,
				    settings: {
				    	slidesToShow: 3,
				    	slidesToScroll: 1,
				    	arrows: false,
				    	infinite: true,
				    	dots: true
				    }
				  },
				    {
				      breakpoint: 800,
				      settings: {
				        	slidesToShow: 1,
				        	slidesToScroll: 1,
				        	arrows: false,
				        	infinite: true,
				    		dots: true
				      }
				    },
				  ]
      			});
    		});
