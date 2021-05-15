var jamol = document.querySelector(".jamol");
var header_jamol = document.querySelector(".header-jamol");
var header_right = document.querySelector(".header-right");

jamol.addEventListener("click", function(){
  header_jamol.classList.toggle('header-jamol-active');
  header_right.classList.toggle('header-right-active');
});