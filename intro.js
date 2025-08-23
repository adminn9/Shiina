
let progress = 0;
let progressText = document.getElementById("progress");
let fill = document.querySelector(".fill");

let loading = setInterval(() => {
  progress++;
  progressText.textContent = progress + "%";
  fill.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(loading);
    setTimeout(() => {
      window.location.href = "awal.html"; // pindah ke halaman utama
    }, 500); // jeda biar smooth
  }
}, 40); // kecepatan loading (40ms = ±4 detik total)