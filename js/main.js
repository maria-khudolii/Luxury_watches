$(document).ready(function(){$(".header-burger").click(function(s){$(".wrapper").toggleClass("show")})}),$(document).ready(function(){$(".slick-slider").slick({dots:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,arrows:!1,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0,dots:!0}}]})});