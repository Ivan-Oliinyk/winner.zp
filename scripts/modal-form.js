$(function () {
  $("[data-modal = consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
    $("#thanks").fadeOut();
  });

  $(".consultation-form__close").on("click", function () {
    $(".overlay, #consultation, #thanks").fadeOut("slow");
  });

  // validate form
  // $("#consultation form").validate();

  // mask input phone
  $("input[name=phone]").mask("+38 (999) 999-99-99");

  // Отправка формы
  $(".form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn("slow");

      $('form').trigger('reset');
    });
    return false;
  });
});
