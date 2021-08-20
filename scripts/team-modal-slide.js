const modalTrigger = document.querySelectorAll(".team__item");
const modalItem = document.querySelectorAll(".team__modal");
const modalClose = document.querySelectorAll(".team__modal-close");
const prevArrow = document.querySelectorAll(".team__modal-arrow_left");
const nextArrow = document.querySelectorAll(".team__modal-arrow_right");

const removeBlock = () => {
  modalItem.forEach((item) => {
    item.classList.remove("fade");
    item.classList.add("d-none");
  });
  document.body.style.overflow = "";
};

const showItem = (itemIndex) => {
  modalItem[itemIndex].classList.remove("d-none");
  modalItem[itemIndex].classList.add("fade");
  document.body.style.overflow = "hidden";
};

modalTrigger.forEach((item, i) =>
  item.addEventListener("click", () => {
    showItem(i);
  })
);

//листаем модельные окна влево при клике на стрелку влево
prevArrow.forEach((elem, index) =>
  elem.addEventListener("click", () => {
    removeBlock();

    if (index > 0) {
      showItem(index - 1);
    } else {
      showItem(0);
    }
  })
);

//листаем модельные окна вправо при клике на стрелку вправо
nextArrow.forEach((elem, index, nextArrow) =>
  elem.addEventListener("click", () => {
    removeBlock();

    if (index < nextArrow.length - 1) {
      showItem(index + 1);
    } else {
      showItem(nextArrow.length - 1);
    }
  })
);

//закрываем модельное окно при клике на крест
modalClose.forEach((e) =>
  e.addEventListener("click", () => {
    removeBlock();
  })
);

//закрываем модельное окно при клике вне его тела
modalItem.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target === item) {
      removeBlock();
    }
  })
);

//закрываем модельное окно при клике на клавишу ESC
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    removeBlock();
  }
});
