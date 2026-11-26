// [PIC NAVBAR] Interaksi toggle menu mobile
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    const isOpen = navbarMenu.classList.toggle("is-open");
    navbarToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Tutup menu mobile saat salah satu link diklik
  navbarMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-open");
      navbarToggle.setAttribute("aria-expanded", "false");
    });
  });
}
