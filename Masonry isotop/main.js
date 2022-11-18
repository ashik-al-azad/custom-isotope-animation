
$(document).ready(function() {
 
 $(".product-list").masonry();

 $("#homepage-slides").owlCarousel({
   items: 1,
   loop: true,
   autoplay: false,
   dots: true,
   nav: true,
 });

 $('.owl-carousel').owlCarousel({
  items: 1,
  autoplay: false,
  margin: 30,
  loop: true,
  // nav: true,
  // navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
});

$(".menu-trigger").on("click", function(){
  $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
  return false
});

$(".menu-close, .off-canvar-overlay").on("click", function(){
  $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
});
 
});


