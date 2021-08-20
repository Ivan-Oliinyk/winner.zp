const btn = document.querySelectorAll(".our-servises__btn");
const contentBox = document.querySelectorAll(".our-servises__box-descr");
const wrapper = document.querySelectorAll(".our-servises__box-svg");

const showDesc = (index) => {
  contentBox[index].classList.toggle("d-none");
  wrapper[index].classList.toggle("active");
};

const hideDesc = () => {
  contentBox.forEach((item) => item.classList.add("d-none"));
  wrapper.forEach((elem) => elem.classList.remove("active"));
};

btn.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    btn.classList.toggle("rotate180");
    showDesc(i);
  })
);
