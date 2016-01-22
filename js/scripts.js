var pingPong = function(numberSelected) {
  var numberParsed = parseInt(numberSelected);
  var numberRange = [];

  if (isNaN(numberParsed)||numberParsed < 0) {
    numberRange.push("Please enter a number over 0.")
  }

  for (var i = 1; i <= numberParsed; i++) {
    if (i % 15 === 0) {
      numberRange.push("pingpong");
    } else if (i % 3 === 0) {
      numberRange.push("ping");
    } else if (i % 5 === 0) {
      numberRange.push("pong");
    } else {
      numberRange.push(i);
    }
  }
  return numberRange;
};

$(document).ready(function() {
  $("button#ping-pong").click(function() {
    $( "#ping-pong-list" ).empty();

    var numberSelected = $("input#numberSelected").val();
    var pingPongedNumbers = pingPong(numberSelected);

    $("#ping-pong-list").append("<ul>");
    pingPongedNumbers.forEach(function(number){
      $("#ping-pong-list").append("<li>" + number +"</li>");
    });
    $("#ping-pong-list").append("</ul>");

    event.preventDefault();
  });
});
