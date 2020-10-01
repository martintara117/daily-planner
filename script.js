// needs to display the correct day and time inside the work day scheduler container
// needs to display the time with am pm format
// time goes from 9am to 5pm
// attach style from css to vars
// save button needs attribute with a lock icon
// rows must turn grey if they are in the past
// rows must turn red if they are present
// rows must turn green if they are in the future
// when save button is pressed it must commit the text to storage

$(document).ready(function () {
  // DOM VARIABLES
  // JS VARIABLES
  // FUNCTION DEFINITIONS
  init();
  function init() {
    //call all functions that need to run once when page loads
    buildScheduleHtml();
    //colorcode schedule
    //pull data from localStorage (if any)
    //set current time in header
    setHeaderTime();
  }
  function buildScheduleHtml() {
    let hours = [
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
    ];
    for (let hour of hours) {
      var row = $("<div>").attr("class", "row");
      var time = $("<p>").text(hour).attr("class", "col-1 hour");
      var text = $("<textarea>").attr("class", "col-10");
      var btn = $("<button>")
        .attr("class", "saveBtn col-1")
        .html("<i class='fa fa-lock'>");
      row.append(time);
      row.append(text);
      row.append(btn);
      $(".container").append(row);
    }
  }
  function setHeaderTime() {
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
  }
  // FUNCTION CALLS
  // EVENT LISTENERS
});
