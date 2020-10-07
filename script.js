// Copy and pas// needs to display the correct day and time inside the work day scheduler container
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
  // APP VARIABLES
  const hours = [
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
  //TO RUN ONCE WHEN PAGE LOADS:
  init();
  function init() {
    //call all functions that need to run once when page loads
    //pull data from localStorage (if any)
    let dataObj = getData(); //{"9AM": "first cup of coffee", "10AM": "second cup"}
    //AND colorcode schedule
    buildScheduleHtml(dataObj);
    //set current time in header
    setHeaderTime();
    //add event listeners for save button clicks
    $(".saveBtn").on("click", handleClick);
  }
  function buildScheduleHtml(dataObj) {
    let currentHour = moment().format("ha").toUpperCase();
    let timeClass = "past";
    for (let hour of hours) {
      if (hour === currentHour) timeClass = "present";
      else if (timeClass === "present") timeClass = "future";
      var row = $("<div>").attr("class", "row");
      var time = $("<p>").text(hour).attr("class", "col-1 hour");
      var text = $("<textarea>");
      text.attr("class", "col-10 " + timeClass);
      if (dataObj[hour]) {
        text.val(dataObj[hour]);
      }
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
  //
  // EVENT HANDLERS
  function handleClick(e) {
    //get data
    let dataObj = getData();
    //get parent row
    let row = $(e.target).parents(".row")[0]; //should give us <div class="row"> that contains the <button> clicked
    //get hour
    let hour = $(row).find("p").text(); //"9AM" or "3PM"
    //get text
    let text = $(row).find("textarea").val(); //"first cup of coffee"
    //set data
    dataObj[hour] = text;
    //save data
    localStorage.setItem("schedule", JSON.stringify(dataObj));
  }
  //DATA HANDLING
  function getData() {
    let dataStr = localStorage.getItem("schedule") || "{}";
    let dataObj = JSON.parse(dataStr);
    return dataObj;
  }
});
