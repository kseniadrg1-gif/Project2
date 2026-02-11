// Открытие/закрытие меню бургера
document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.querySelector(".nav-button");
  const navMenu = document.querySelector(".nav ul");

  if (navButton && navMenu) {
    navButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navButton.classList.remove("active");
      });
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
      if (
        !navMenu.contains(event.target) &&
        !navButton.contains(event.target) &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active");
        navButton.classList.remove("active");
      }
    });
  }
});
