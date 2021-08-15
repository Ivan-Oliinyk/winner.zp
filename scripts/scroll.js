//smoot scrool and pageup

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });

  //планый переход по ссылкам
  $('a[href^="#"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
    return false;
  });
});
