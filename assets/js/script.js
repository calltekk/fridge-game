$(document).ready(function() {
  // Here we are provided an initial array of letters.
  // Use this array to dynamically create buttons on the screen.
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
  // =================================================================================

  // Loop through the letters array
  for (var i = 0; i < letters.length; i++) {
    // Create a button element
    var letterBtn = $("<button>");

    // Add classes and attributes to the button
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters[i]);

    // Set the text of the button
    letterBtn.text(letters[i]);

    // Append the button to the "#buttons" div
    $("#buttons").append(letterBtn);
  }

  // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
  // =================================================================================

  $(".letter-button").on("click", function() {
    // Create a new div element for the fridge magnet
    var fridgeMagnet = $("<div>");

    // Add classes and set text for the fridge magnet
    fridgeMagnet.addClass("letter fridge-color");
    fridgeMagnet.text($(this).attr("data-letter"));

    // Append the fridge magnet to the "#display" div
    $("#display").append(fridgeMagnet);

    // Log the chosen letter to the console
    console.log("Chosen Letter: " + $(this).attr("data-letter"));
  });

  // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
  // =================================================================================

  $("#clear").on("click", function() {
    // Clear the contents of the "#display" div
    $("#display").empty();

    // Log a message to the console
    console.log("Display cleared");
  });
});
