const modalTrigger = document.querySelectorAll(".team__item");
const modalItem = document.querySelectorAll(".team__modal");
const modalClose = document.querySelectorAll(".team__modal-close");

const removeBlock = () => {
  modalItem.forEach((item) => item.classList.add("d-none"));
  document.body.style.overflow = "";
};

// removeBlock();

for (let i = 0; i < modalTrigger.length; i += 1) {
  modalTrigger[i].addEventListener("click", () => {
    modalItem[i].classList.remove("d-none");
    document.body.style.overflow = "hidden";
  });
}

modalClose.forEach((e) =>
  e.addEventListener("click", () => {
    removeBlock();
  })
);

modalItem.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target === item) {
      removeBlock();
    }
  })
);

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    removeBlock();
  }
});
