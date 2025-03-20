// Contoh sederhana animasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.classList.add("fade-in");
  });
});
