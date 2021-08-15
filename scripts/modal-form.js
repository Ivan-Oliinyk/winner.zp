$(function () {
  $("[data-modal = consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".consultation-form__close").on("click", function () {
    $(".overlay, #consultation, #tanks").fadeOut("slow");
  });
});
