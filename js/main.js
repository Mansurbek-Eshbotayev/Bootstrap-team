var elNav = document.querySelector(".addition");
var elBtn = document.querySelector(".icon__btn");
var elClose = document.querySelector(".addition__btn");
var elBody = document.querySelector("body");

elBtn.addEventListener("click" , function(){
  elNav.classList.add("addition__active");
  elBody.classList.add("body-side__active");
  elBody.classList.remove("body-side");
  elBtn.style.display="none"
})

elClose.addEventListener("click" , function(){
  elNav.classList.remove("addition__active");
  elBody.classList.remove("body-side__active");
  elBody.classList.add("body-side");
  elBtn.style.display="block"
})