const modalTrigger = document.querySelectorAll("[data-modal-team]");
const modalItem = document.querySelectorAll("[modal-team-item]");
const modalClose = document.querySelectorAll("[modal-team-close]");

const removeBlock = () => {
  modalItem.forEach((item) => item.classList.add("d-none"));
};

removeBlock();

for (let i = 0; i < modalTrigger.length; i += 1) {
  modalTrigger[i].addEventListener("click", () => {
    modalItem[i].classList.remove("d-none");
  });
}

modalClose.forEach((e) => e.addEventListener("click", removeBlock));
