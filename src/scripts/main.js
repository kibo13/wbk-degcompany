function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms) { }
}

sleep(20);

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};

$(document).ready(function () {

  /* ============================= */
  /* control active link on scroll */
  /* ============================= */

  var lastId,
    topMenu = $(".menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation

  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 1500);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {

    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });


  /* ===================== */
  /* check on/off checkbox */
  /* ===================== */

  (function ($) {
    $(function () {
      $('.link a').on('click', function () {
        $('#checkbox').prop('checked', false);
      });
    });
  })(jQuery);


  /* ============================================== */
  /* connection slick-slider for block of customers */
  /* ============================================== */

  $('.customs__list').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  /* ============================================== */
  /* connection slick-slider for block of feedbacks */
  /* ============================================== */

  $('.feedback__list').slick({
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  /* ====================== */
  /*  toggle for portfolio  */
  /* ====================== */

  $(function () {
    $('.portfolio__list li').click(function () {
      var get_id = this.id,
        get_current = $('.portfolio__post .' + get_id);

      $('.portfolio__post .imgBox').not(get_current).hide(500);
      get_current.show(500);
    });

    $('#all').click(function () {
      $('.portfolio__post .imgBox').show(500);
    });
  });

  var follow_btn = $('.portfolio__list li');

  follow_btn.on('click', function () {
    follow_btn.removeClass('active');
    $(this).addClass('active');
  });

})