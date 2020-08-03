const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

// abrir modal
for (let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");
  });
}
// fechar modal
document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
