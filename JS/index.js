var navBar = document.getElementById("navBar");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navBar.classList.add("navOnScroll");
  } else {
    navBar.classList.remove("navOnScroll");
  }
}