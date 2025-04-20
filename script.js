const slides = document.querySelectorAll(".slide");
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = item.getAttribute("data-index");

    // Ẩn tất cả slide
    slides.forEach((slide) => slide.classList.remove("active"));
    navItems.forEach((nav) => nav.classList.remove("active"));

    // Hiện slide được chọn
    slides[index].classList.add("active");
    item.classList.add("active");
  });
});
