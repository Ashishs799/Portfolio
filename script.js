const navIcons = document.querySelectorAll(".navicons");
const navCloneDivs = document.querySelectorAll("#navclone div");

navIcons.forEach((link, index) => {
  link.addEventListener("mouseenter", () => {
    navCloneDivs[index].style.background = "#86C232";
  });

  link.addEventListener("mouseleave", () => {
    navCloneDivs[index].style.background = "#383838";
  });
});

let expBtn1 = document.getElementById("expBtn1");
let expBtn2 = document.getElementById("expBtn2");
let educationBox = document.getElementById("educate");
let experienceBox = document.getElementById("exps");

expBtn1.addEventListener("click", () => {
  educationBox.style.display = "flex";
  experienceBox.style.display = "none";
  expBtn1.style.borderBottomColor = "#86C232";
  expBtn2.style.borderBottomColor = "#69812f";
});
expBtn2.addEventListener("click", () => {
  experienceBox.style.display = "flex";
  educationBox.style.display = "none";
  expBtn2.style.borderBottomColor = "#86C232";
  expBtn1.style.borderBottomColor = "#69812f";
});

let count42 = document.getElementById("count42");
let finalCount = 42;
let initialCount1 = 0;

const countFunc = () => {
  count42.innerHTML = ++initialCount1 + "+";
  if (initialCount1 === finalCount) {
    clearInterval(timeOut1);
  }
};
let timeOut1 = setInterval(countFunc, 100);

let count2 = document.getElementById("count2");
let finalCount2 = 2;
let initialCount2 = 0;

const countFunc2 = () => {
  count2.innerHTML = ++initialCount2 + "+";
  if (initialCount2 === finalCount2) {
    clearInterval(timeOut2);
  }
};
let timeOut2 = setInterval(countFunc2, 1000);

let count20 = document.getElementById("count20");
let finalCount3 = 20;
let initialCount3 = 0;

const countFunc20 = () => {
  count20.innerHTML = ++initialCount3 + "+";
  if (initialCount3 === finalCount3) {
    clearInterval(timeOut3);
  }
};
let timeOut3 = setInterval(countFunc20, 100);

let count12 = document.getElementById("count12");
let finalCount4 = 12;
let initialCount4 = 0;

const countFunc12 = () => {
  count12.innerHTML = ++initialCount4 + "+";
  if (initialCount4 === finalCount4) {
    clearInterval(timeOut4);
  }
};
let timeOut4 = setInterval(countFunc12, 100);

// Slider --> Portfolio section

// navbar for small screen
let bars = document.querySelector(".bars");
let cross = document.getElementById("cancel");
let navbar = document.getElementById("navbar");
let links = navbar.getElementsByTagName("a");

bars.addEventListener("click", () => {
  navbar.style.left = 0;
  bars.style.display = "none";
  if(cross){
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
          // Hide the navbar when a link is clicked
          navbar.style.left = "600px";
          bars.style.display = 'block'
        });
      }
 }
});
cross.addEventListener("click", () => {
  navbar.style.left = "600px";
  bars.style.display = "block";
});