function ani() {
  const hamBtn = document.getElementById("ham-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", ani);
