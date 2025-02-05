/*===toggle icon navbar===*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*===remove toggle icon navbar===*/
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

/*===remove toggle icon navbar===*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
