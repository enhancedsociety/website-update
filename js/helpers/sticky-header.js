// Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 205;
  var navbarHeight = $('.sticky-header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 150);

  function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.sticky-header').removeClass('nav-down').addClass('nav-up');
      $('.nav-toggle').removeClass('nav-down').addClass('nav-up');
      $('.nav-toggle .nav-toggle-bar').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.sticky-header').removeClass('nav-up').addClass('nav-down');
        $('.nav-toggle').removeClass('nav-up').addClass('nav-down');
        $('.nav-toggle .nav-toggle-bar').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  };

