/* =========================================================
   BODORRIO DAY · JavaScript
   ========================================================= */

const entrance = document.querySelector("#entrance");
const doors = document.querySelector("#doors");
const openButton = document.querySelector("#openButton");
const home = document.querySelector("#home");

let isOpen = false;

function openDoors() {
  if (isOpen) return;

  isOpen = true;

  entrance.classList.add("is-open");

  // Esperamos a que la apertura esté prácticamente terminada
  // antes de activar la navegación de la home.
  window.setTimeout(() => {
    home.classList.add("is-visible");
    home.setAttribute("aria-hidden", "false");
  }, 1050);
}

doors.addEventListener("click", openDoors);
openButton.addEventListener("click", openDoors);

// Permite abrir con Enter/Espacio si el foco está sobre una puerta.
doors.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openDoors();
  }
});
