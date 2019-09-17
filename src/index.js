// Navbar Behaviour

window.addEventListener("scroll", toggleNavbar);

function toggleNavbar() {
  const navbar = document.querySelector("nav");

  console.log(this.scrollY);
  
  if (this.scrollY > 100) {
    navbar.className = "shown";
  } else {
    navbar.className = "";
  }
}