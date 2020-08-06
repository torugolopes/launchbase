const cursos = document.querySelectorAll(".curso");
const modalOverlay = document.querySelector(".modal-overlay");

// ativando modal
for (let curso of cursos) {
  curso.addEventListener("click", function () {
    modalOverlay.classList.add("active");
  });
}

// fechando modal
modalOverlay
  .querySelector(".close-modal")
  .addEventListener("click", function () {
    modalOverlay.classList.remove("active");
  });
