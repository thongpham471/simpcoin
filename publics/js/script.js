// LOADING
// Khi trang web được tải hoàn chỉnh
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

//    HEADER START
const hamburger = $(".hamburger");
const navMenu = $(".nav-menu");

hamburger.on("click", () => {
  hamburger.toggleClass("active");
  navMenu.toggleClass("active");
});

$(".nav-link").each(function () {
  $(this).on("click", function () {
    hamburger.removeClass("active");
    navMenu.removeClass("active");
  });
});

//    HEADER END
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".sticky-header").addClass("sticky");
  } else {
    $(".sticky-header").removeClass("sticky");
  }
});
// animate

const items = document.querySelectorAll(".appear2");

const active = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview2");
    } else {
      entry.target.classList.remove("inview2");
    }
  });
};
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}

window.addEventListener("load", function () {
  var leftElement = document.querySelector(".left");
  var rightElement = document.querySelector(".right");

  leftElement.classList.add("animated-left");
  rightElement.classList.add("animated-right");
});

AOS.init();
