$(function () {
  $(".header__slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: false,
  });
  $(".reviews__slider").slick({
    dots: true,
    arrows: false,
  });
  $("add-text__btn").on("click", function () {
    $(".header__menu-link img").toggleClass("header__menu-link--active");
  });
});

document.querySelector(".hm-icon").addEventListener("click", function () {
  document
    .querySelector(".menu__hiden-list")
    .classList.add("menu__hiden-list-active");
});

document
  .querySelector(".menu__hiden-list-items")
  .addEventListener("click", function () {
    document
      .querySelector(".menu__hiden-list")
      .classList.remove("menu__hiden-list-active");
  });

document.querySelector(".add-text__btn").addEventListener("click", function () {
  document
    .querySelector(".add-text__text")
    .classList.add("add-text__text--active");
});
