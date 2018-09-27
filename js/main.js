$(document).ready(function() {
  var A = document.querySelector.bind(document);
  var Aon = document.addEventListener.bind(document);

  var xmouse, ymouse;
  Aon("mousemove", function(e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
  });

  var ball = A("#ball");
  var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

  var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
      x = xmouse;
      y = ymouse;
    } else {
      dx = (xmouse - x) * 0.125;
      dy = (ymouse - y) * 0.125;
      if (Math.abs(dx) + Math.abs(dy) < 0.1) {
        x = xmouse;
        y = ymouse;
      } else {
        x += dx - 3.5;
        y += dy - 3.5;
      }
    }
    ball.style.left = x + "px";
    ball.style.top = y + "px";
  };

  followMouse();

  setTimeout(function() {
    $(".line-loader").addClass("line-loaded");
  }, 500);

  /*line-transition 2s*/
  setTimeout(function() {
    /*opacity transition 0.5s*/
    /*1s wait*/
    $(".cube").addClass("opacity-1");
  }, 3000);

  /*giro transition 0.5s*/
  /*1s wait*/
  setTimeout(function() {
    $(".cube").addClass("giro");
  },4500);

  /*width transition 0.5s*/
   /*0.5s wait*/
  setTimeout(function() {
    $(".loader-1").addClass("loader-out");
    setTimeout(function() {
      $(".loader-2").addClass("loader-out");
    }, 400);
    setTimeout(function() {
      $(".loader-3").addClass("loader-out");
      $("main").fadeIn("slow");
    }, 800);
  }, 5500);

  setTimeout(function() {
    $("#ball").addClass("opacity-1");
  }, 6700);
});
