// $("#kotak").mouseover(function() {
//   $("#kotak").css("transition", "0.5s");
//   $("#kotak").css("background-color", "maroon");
// });

// $("#kotak").mouseleave(function() {
//   $("#kotak").css("transition", "0.5s");
//   $("#kotak").css("background-color", "teal");
// });

$("#naik").stop().click(function() {
  $("#kotak").animate({
    marginLeft: "+=50",
    marginTop: "-=100",
  }, 100);
});

$("#turun").stop().click(function() {
  $("#kotak").animate({
    marginLeft: "+=50",
    marginTop: "+=100",
  }, 100);
});

function moveVertical(top) {
  $("#kotak").animate({
    marginTop: top,
  }, 100);
}

function moveHorizontal(left) {
  $("#kotak").animate({
    marginLeft: left,
  }, 100);
}

$('body').on('keyup', function(event) {
  console.log(event.key);
  if (event.key === 'ArrowUp') {
    moveVertical("-=50");
  }

  if (event.key === 'ArrowDown') {
    moveVertical("+=50");
  }

  if (event.key === 'ArrowRight') {
    moveHorizontal("+=150");
  }

  if (event.key === 'ArrowLeft') {
    moveHorizontal("-=150");
  }
});