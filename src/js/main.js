var jamol = document.querySelector(".jamol");
var header_jamol = document.querySelector(".header-jamol");
var header_right = document.querySelector(".header-right");
var main_bottom = document.querySelector(".main-bottom");
var jamol__list = document.querySelector(".jamol__list");
var dog = document.querySelector(".dog");
var header_dog = document.querySelector(".header-dog");
var dog__list = document.querySelector(".dog__list");

jamol.addEventListener("click", function(){
  header_jamol.classList.add('header-jamol-active');
  header_right.classList.add('header-right-active');
  main_bottom.classList.add('main-bottom-active');
  jamol__list.classList.add('jamol__list-active');
  header_dog.classList.remove('header-dog-active');
  dog__list.classList.remove('dog__list-active');
});

dog.addEventListener('click', function(){
  header_jamol.classList.remove('header-jamol-active');
  jamol__list.classList.remove('jamol__list-active');
  header_dog.classList.add('header-dog-active');
  header_right.classList.add('header-right-active');
  main_bottom.classList.add('main-bottom-active');
  dog__list.classList.add('dog__list-active');
});