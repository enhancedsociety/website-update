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

    startPeopleAnimation();
    initScrollMagic();

});

function startPeopleAnimation(){

  $("#peopleBlock" + 1 + " img").each(function(index) {
    $("#peopleBlock" + 1).children().eq(index).animate({opacity:1},{duration:1500});
  });

  var numerOfGroups = 3;
  var currentGroup = 2;

  setInterval(function(){ animatePeople() }, 8000);
  
  function animatePeople() {
    
    if(currentGroup > numerOfGroups){
      
    $("#peopleBlock" + (currentGroup-1) + " img").each(function(index) {
      $("#peopleBlock" + (currentGroup-1)).children().eq(index).animate({opacity:0},{duration:850});
    });
      currentGroup = 1;

    }

     
    $("#peopleBlock" + currentGroup + " img").each(function(index) {
      $("#peopleBlock" + currentGroup).children().eq(index).delay(850).animate({opacity:1},{duration:1500 * ((index+1)/3)});
    });

    $("#peopleBlock" + (currentGroup-1) + " img").each(function(index) {
      $("#peopleBlock" + (currentGroup-1)).children().eq(index).animate({opacity:0},{duration:850});
    });

    currentGroup ++;
    
  }
  
}

function changeSandbox(a){
  
  switch(a){
    default:
    case 1:
      $('#sandboxSolsaButton').addClass('active');
      $('#sandboxWeb3Button').removeClass('active');
      $('#sandboxRustETHButton').removeClass('active');

      $('#sandboxSolsa').addClass('active');
      $('#sandboxWeb3').removeClass('active');
      $('#sandboxRustETH').removeClass('active');

      $("#sandboxGitHubButton").attr("href", "https://github.com/enhancedsociety/solsa");
    break;
    case 2:
      $('#sandboxSolsaButton').removeClass('active');
      $('#sandboxWeb3Button').addClass('active');
      $('#sandboxRustETHButton').removeClass('active');

      $('#sandboxSolsa').removeClass('active');
      $('#sandboxWeb3').addClass('active');
      $('#sandboxRustETH').removeClass('active');

      $("#sandboxGitHubButton").attr("href", "https://github.com/enhancedsociety/platform-investigations");
    break;
    case 3:
      $('#sandboxSolsaButton').removeClass('active');
      $('#sandboxWeb3Button').removeClass('active');
      $('#sandboxRustETHButton').addClass('active');

      $('#sandboxSolsa').removeClass('active');
      $('#sandboxWeb3').removeClass('active');
      $('#sandboxRustETH').addClass('active');
      
      $("#sandboxGitHubButton").attr("href", "https://github.com/enhancedsociety/rust-eth-tools");
    break;
  }
  
};


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
// hamburger.navItem.addEventListener('click', function(e) { hamburger.doToggle(e); });

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

  let whatWeDoAnimation = new ScrollMagic.Scene({
    triggerHook: 0.85,
    triggerElement: '.what-we-do',
    reverse: false
  }).addTo(controller)
    .on("enter", function (event) {      
      $('.what-we-do .background').addClass('animate');
      $('.what-we-do .block').addClass('animate');
    });

  let blockchainProjectsAnimation = new ScrollMagic.Scene({
    triggerHook: 0.7,
    triggerElement: '.blockchain-projects',
    reverse: false
  }).addTo(controller)
    .on("enter", function (event) {
      
      $('.blockchain-projects .projects-list').addClass('animate');
    });


  let smartEquityAnimation = new ScrollMagic.Scene({
    triggerHook: 0.85,
    triggerElement: '.smart-equity',
    reverse: false
  }).addTo(controller)
    .on("enter", function (event) {      
      $('.smart-equity .phone').addClass('animate');
    });



}
