document.addEventListener("DOMContentLoaded", function () {
  const runBtn = document.getElementById("runBtn");
  const stopBtn = document.getElementById("stopBtn");

  runBtn.addEventListener("click", function () {
    // Misalnya mengirim request ke server untuk start video (jika awalnya stop)
    // fetch('/start_video', {method: 'POST'});
    alert("Run clicked. (Anda bisa implementasi request ke server di sini)");
  });

  stopBtn.addEventListener("click", function () {
    // Misalnya mengirim request ke server untuk stop video
    // fetch('/stop_video', {method: 'POST'});
    alert("Stop clicked. (Anda bisa implementasi request ke server di sini)");
  });
});
