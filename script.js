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
// -----------------------------------------phan-dat-hang-------------------------------------//

const btnMuaNgay = document.querySelector(".div2-1 button");
const modal = document.getElementById("modalForm");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("closeModal");
const orderForm = document.getElementById("orderForm");

btnMuaNgay.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 Đơn hàng của bạn đã được đặt thành công!");
  modal.style.display = "none";
  overlay.style.display = "none";
  orderForm.reset();
});
// ----------------------PHAN-THONG-TIN-TAI-KHOAN------------------------//

// Bật/tắt form
document.getElementById("loginBtn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("hidden");
});

// Xử lý submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email.value.trim();
  const password = this.password.value;

  if (password.length < 8) {
    alert("Mật khẩu phải dài ít nhất 8 ký tự");
    return;
  }

  fetch("login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("Đăng nhập thành công");
        document.getElementById("overlay").classList.add("hidden");
        // Có thể lưu sessionStorage hoặc chuyển trang
      } else {
        alert("Lỗi: " + data.message);
      }
    });
});
