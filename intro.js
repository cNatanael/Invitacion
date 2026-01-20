const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const footer = document.querySelector(".footer-countdown");

enterBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "instant"});
  intro.classList.add("fade-out");

  footer.style.opacity = "1";
  footer.style.visibility = "visible";
  footer.style.pointerEvents = "auto";
  
  // Eliminar el intro después de la animación
  setTimeout(() => {
    intro.remove();
    const elementos = document.querySelectorAll(".aparecer");

    elementos.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("activo");
      }, index * 300); 
    });

    document.querySelector(".timeline").classList.add("activo");
    timeline.classList.add("activo");
events.forEach(event => observer.observe(event));
  }, 800); 
});




const targetDate = new Date("2026-03-08T15:30:00").getTime();

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


const events = document.querySelectorAll(".event");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.3
  }
);

const timeline = document.querySelector(".timeline");

















