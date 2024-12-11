// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-report"); // Sesuaikan ID

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik untuk hide sidebar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fullscreen functionality
document.addEventListener("DOMContentLoaded", () => { // Pastikan DOM sudah siap
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  
  if (fullscreenBtn) { // Cek apakah tombol ada
    const videoContainer = fullscreenBtn.closest(".video-container");
    const video = videoContainer.querySelector("video");

    fullscreenBtn.addEventListener("click", () => {
      console.log("Fullscreen button clicked."); // Debugging
      if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) { /* Safari */
          videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) { /* IE11 */
          videoContainer.msRequestFullscreen();
        }
        // Ubah ikon ke minimize saat fullscreen
        fullscreenBtn.querySelector("i").setAttribute("data-feather", "minimize");
        feather.replace(); // Render ulang ikon
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        // Kembali ke ikon maximize saat keluar fullscreen
        fullscreenBtn.querySelector("i").setAttribute("data-feather", "maximize");
        feather.replace(); // Render ulang ikon
      }
    });

    // Listener untuk perubahan fullscreen dari sumber lain (misalnya, tombol Esc)
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        fullscreenBtn.querySelector("i").setAttribute("data-feather", "maximize");
        feather.replace(); // Render ulang ikon
      }
    });
  } else {
    console.error("Fullscreen button with ID 'fullscreen-btn' not found.");
  }
});
