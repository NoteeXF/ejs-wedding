// Targetkan elemen countdown
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Tanggal target untuk countdown (misalnya: 1 Januari 2024)
const targetDate = new Date('sep 10, 2023 00:00:00').getTime();

// Fungsi untuk menghitung dan memperbarui countdown setiap detik
function updateCountdown() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Perbarui elemen countdown dengan nilai yang sesuai
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Panggil fungsi updateCountdown setiap detik
setInterval(updateCountdown, 1000);
