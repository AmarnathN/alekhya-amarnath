$(window).on("load", function () {
  console.log("loading...");

  //home section side show
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length - 1;
  console.log(slideLen);

  function slideshow() {
    console.log(slideIndex);
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    if (slideIndex + 1 == slideLen) {
      slideIndex = 0;
    } else {
      slideIndex = slideIndex + 1;
    }
    setTimeout(slideshow, 3000);
  }
  slideshow();
});

$(document).ready(function () {
  $(".hamburger-btn").click(function () {
    $("header .nav").slideToggle();
  });
  $("header .nav a").click(function () {
    if ($(window).width() < 768) {
      $("header .nav").slideToggle();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
  $.scrollIt({
    topOffset: -50,
  });
});
