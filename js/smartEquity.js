$(document).ready(function() {

  //ANIMATES ANCHOR SCROLLING
    $('.anchor-click').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 70
          },250);
          return false;
        }
      }
    });

    initScrollMagic();
});

var hamburger = {
  navToggle: document.querySelector('.nav-toggle'),
  nav: document.querySelector('.nav'),
  navItem: document.querySelector('.nav a'),

  doToggle: function(e) {
    e.preventDefault();
    this.navToggle.classList.toggle('expanded');
    this.nav.classList.toggle('expanded');
    if(this.navToggle.classList.contains('expanded')){
      
      $('html, body').css({
        overflow: 'hidden'
    });
    }else{
      $('html, body').css({
        overflow: 'auto'
    });
    }
    
  }
};

hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

function goToAnchor(anchor){
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  hamburger.doToggle(event);
  return false;
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


function initScrollMagic() {

  let controller = new ScrollMagic.Controller();

  let introAnimation = new ScrollMagic.Scene({
    triggerHook: 0.7,
    triggerElement: '.what',
    reverse: false
  }).addTo(controller)
    .on("enter", function (event) {
      
      $('.what .pictures .phone').addClass('animate');
    });

  let iconsAnimation = new ScrollMagic.Scene({
    triggerHook: 0.55,
    triggerElement: '.icons',
    reverse: false
  }).addTo(controller)
    .on("enter", function (event) {      
      $('.icons .background').addClass('animate');
      $('.icons .content-grid .item').addClass('animate');
    });



  let packagePhoneAnimation = new ScrollMagic.Scene({
    triggerHook: 0.75,
    triggerElement: '.package',
    reverse: false
  }).addTo(controller)
    .on("enter", function (event) {      
      $('.package .phone').addClass('animate');
      $('.package a.sign-up').addClass('animate');
    });

}
