$(document).ready(function () {
  // DOM VARIABLES

  for (i = 7; i < 18; i++) {
    var row = $("<div>").attr("class", "row");
    var time = $("<p>").text(i).attr("class", "col-1");
    var text = $("<textarea>").attr("class", "col-10");
    var btn = $("<button>").addClass("saveBtn").text("Save");
    row.append(time);
    row.append(text);
    row.append(btn);
    $(".container").append(row);
  }
  // JS VARIABLES
  // FUNCTION DEFINITIONS
  // FUNCTION CALLS
  // EVENT LISTENERS
});
