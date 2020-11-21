$(document).ready(function () {
    $(".navbar__icon").click(function () {
      $(this).toggleClass("animate");
      $('.navbar__list').toggleClass('show')
      $('.bg-dark').toggleClass('dark')
    });
    
  });