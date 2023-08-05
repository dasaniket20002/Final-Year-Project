//NAV BAR Scroll
let navBar = document.getElementById("navBar");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navBar.classList.add("navOnScroll");
  } else {
    navBar.classList.remove("navOnScroll");
  }
}

//HERO Img Scroll
let scrollImgs = document.querySelectorAll(".scrollImg");
let scrollNums = document.querySelectorAll(".scrollNum");
let scrollTxts = document.querySelectorAll(".scrollTxt");
let i = 0;
setInterval(() => {
  scrollImgs[i].classList.remove("active");
  scrollNums[i].classList.remove("active");
  scrollTxts[i].classList.remove("active");

  i++;
  if(i >= scrollImgs.length) i = 0;

  scrollImgs[i].classList.add("active");
  scrollNums[i].classList.add("active");
  scrollTxts[i].classList.add("active");
}, 5000);