const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "instant"});
  intro.classList.add("fade-out");

  // Eliminar el intro después de la animación
  setTimeout(() => {
    intro.remove();
    const elementos = document.querySelectorAll(".aparecer");

    elementos.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("activo");
      }, index * 300); // controla la velocidad entre apariciones
    });
  }, 800); // debe coincidir con la duración del CSS
});

const targetDate = new Date("2026-03-08T16:30:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = "¡Ya llegó el gran día!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateCountdown();
    setInterval(updateCountdown, 1000);
