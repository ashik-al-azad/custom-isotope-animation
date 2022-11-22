$(document).ready(function(){

  $('.projects-list').isotope();

  $(".projects-titles li").on('click',function(){
    var selector = $(this).attr('data-filter');
    $(".projects-list").isotope({
      filter: selector
    });
  });

});