
//  NAV BAR BLUR BG 

var navBar = document.querySelector("nav");
window.onscroll = function() {
  if (Math.round(window.scrollY) > 0) {
    navBar.style.backdropFilter = "blur(5px)";
    navBar.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.25)";
  } else {
    navBar.style.backdropFilter = "none";
    navBar.style.boxShadow = "none";
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

      // ENABLE SCROLL
      window.onscroll = function() {}
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.transform = "translate(-50%, 0%)";
      navBar.style.transform = "translate(100%, 0%)";

      window.scrollTo(window.scrollX, 0);

      // DISABLE SCROLL AFTER SCROLL ENDS
      if(Math.round(window.scrollY) == 0) {
        document.body.style.overflowY = "hidden";
      } else {
        window.onscroll = function() {
          console.log(window.scrollY);
          if(Math.round(window.scrollY) == 0) {
            document.body.style.overflowY = "hidden";
          }
        }
      }

      
    }
    active = !active;
  });
});
