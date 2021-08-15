(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMEnuRef = document.querySelector("[data-menu]");
  const menuLinks = mobileMEnuRef.querySelectorAll(".header__content-link");

  menuBtnRef.addEventListener("click", () => {
    const expended =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expended);
    mobileMEnuRef.classList.toggle("is-open");

    document.body.classList.toggle("modal-open");
  });

  menuLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");
      mobileMEnuRef.classList.toggle("is-open");
      document.body.classList.toggle("modal-open");
    });
  });

  console.log(menuLinks);
})();
