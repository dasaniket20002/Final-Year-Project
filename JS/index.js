
//  NAV BAR BLUR BG 

var navBar = document.querySelector("nav");
window.onscroll = function() { defaultOnScroll(); }
function defaultOnScroll() {
  if (Math.round(window.scrollY) == 0) {
    navBar.style.backdropFilter = "none";
    navBar.style.boxShadow = "none";
  } else {
    navBar.style.backdropFilter = "blur(5px)";
    navBar.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.25)";
  }
}

//  BUTTON ATTRACT TO MOUSE 

let magneticButtons = document.querySelectorAll(".magneticButton");
magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.x - position.left - position.width / 2;
        const y = e.y - position.top - position.height / 2;

        btn.style.transition = "none";
        btn.style.transform = "translate(" + (x * 0.6) + "px," + (y * 0.4) + "px)";
    });
});
magneticButtons.forEach((btn) => {
    btn.addEventListener("mouseout", function(e) {
        btn.style.transform = "translate(0px, 0px)";
        btn.style.transition = "transform 0.15s ease";
    });
});

// SIGN UP BUTTON CLICK

let signUpBtns = document.querySelectorAll(".signUpBtn");
let active = false;
signUpBtns.forEach((btn) => {
  btn.addEventListener("mousedown", function(e) {
    if(active) {
      document.body.style.transform = "none";
      navBar.style.transform = "none";

      signUpBtns.forEach((btn2) => {
        btn2.classList.remove("enableClose");
      });

      // ENABLE SCROLL
      window.onscroll = function() { defaultOnScroll(); }
      document.body.style.overflowY = "auto";
    } else {
      window.scrollTo(window.scrollX, 0);

      // DISABLE SCROLL AFTER SCROLL ENDS
      if(Math.round(window.scrollY) == 0) {
        document.body.style.overflowY = "hidden";
        transformBody();
      } else {
        window.onscroll = function() {
          defaultOnScroll();
          if(Math.round(window.scrollY) == 0) {
            document.body.style.overflowY = "hidden";
            transformBody();
          }
        }
      }
    }
    active = !active;
  });
});

function transformBody() {
  document.body.style.transform = "translate(-50%, 0%)";
  navBar.style.transform = "translate(100%, 0%)";

  signUpBtns.forEach((btn2) => {
    btn2.classList.add("enableClose");
  });
}

// ACCOUNT SECTION MODE SWITCH SIGNUP/LOGIN

let accountContainers = document.querySelectorAll(".accounts");
let inpBtn_divs = document.querySelectorAll(".inpBtn_div");
let containerBorder = document.querySelector(".accountsBG");

inpBtn_divs[0].addEventListener("mousedown", function(e) {
  accountContainers[1].classList.remove("active");
  accountContainers[0].classList.add("active");

  containerBorder.classList.remove("right");
  containerBorder.classList.add("left");
});
inpBtn_divs[1].addEventListener("mousedown", function(e) {
  accountContainers[0].classList.remove("active");
  accountContainers[1].classList.add("active");

  containerBorder.classList.remove("left");
  containerBorder.classList.add("right");
});