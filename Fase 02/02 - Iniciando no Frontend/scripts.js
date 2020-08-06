const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

// abrir modal
for (let card of cards) {
  card.addEventListener("click", function () {
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${videoId}`;
  });
}
// fechar modal
document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});
