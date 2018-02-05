// Parallax
$(document).ready(function() {
  var a = window.innerWidth;
  if (a > 430) {
    $('.parallax').parallax();
  } else {
    $('div.parallax-container').addClass('mobileParallax responsive-img s12').removeClass('parallax-container');
    $('div.parallax').removeClass('parallax');
  }
  setTimeout(function() {$("#loader-wrapper").fadeOut();}, 1000);
  // $("#loader-wrapper").fadeOut();
});
// Nav
// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$('.collapsible').collapsible();
$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, // Choose whether you can drag to open on touch screens,
  onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
  onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
});
// Show sideNav
// $('.button-collapse').sideNav('show');
// Hide sideNav
// $('.button-collapse').sideNav('hide');
// Destroy sideNav
// $('.button-collapse').sideNav('destroy');
// Carousel
$(document).ready(function() {
  $('.carousel').carousel();
  $('.main').addClass('animated fadeInRight');
});
// ScrollFire
var options = [{
  selector: '#galeria',
  offset: 500,
  callback: function(el) {
    Materialize.toast("Możesz zmieniać obrazy przesuwając je kursorem", 5000);
  }
}];
Materialize.scrollFire(options);
// Smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1400, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// AOS
// $.fn.extend({
//   animateCss: function(animationName, callback) {
//     var animationEnd =
//       'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//     this.addClass('animated ' + animationName).one(animationEnd, function() {
//       $(this).removeClass('animated ' + animationName);
//       if (callback) {
//         callback();
//       }
//     });
//     return this;
//   },
// });
// $('#icons').animateCss('bounce');
// var waypoint = new Waypoint({
//   element: document.getElementById('icons'),
//   handler: function(direction) {
//     $('#icons').animateCss('zoomIn');
//   },
//   offset: '80%'
// })
var waypoint = new Waypoint({
  element: document.getElementById('iconsone'),
  handler: function(direction) {
    $("#iconsone").addClass("animated fadeInUp");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('iconstwo'),
  handler: function(direction) {
    $("#iconstwo").addClass("animated fadeInUp");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('iconsthree'),
  handler: function(direction) {
    $("#iconsthree").addClass("animated fadeInUp");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('who'),
  handler: function(direction) {
    $("#who").addClass("animated fadeInUp");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('main-gallery'),
  handler: function(direction) {
    $("#main-gallery").addClass("animated fadeInUp");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('kontakt'),
  handler: function(direction) {
    $("#kontakt").addClass("animated fadeInRight");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('formularz'),
  handler: function(direction) {
    $("#formularz").addClass("animated fadeInLeft");
  },
  offset: '99%'
});
var waypoint = new Waypoint({
  element: document.getElementById('kontakttwo'),
  handler: function(direction) {
    $("#kontakttwo").addClass("animated fadeInUp");
  },
  offset: '99%'
});