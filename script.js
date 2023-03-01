// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // set vars
  var hourBlock = document.getElementById("block-container");
  var hourBlockDivs = Array.from(hourBlock.children);
  // set var for current hour of day
  var currHour = dayjs().hour();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  hourBlock.addEventListener("click", function (event) {
    // only handle event if it's a button
    if (event.target.tagName == "BUTTON") {
      // set parent elements id to save in local storage
      var parentElId = event.target.parentNode.id;
      var userInput = event.target.parentNode.children[1].value;

      localStorage.setItem(parentElId, userInput);
    } else {
      return;
    }
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  for (var i = 0; i < hourBlockDivs.length; i++) {
    var id = hourBlockDivs[i].id;
    // to get just the numberic number
    var trimmedId = id.slice(5);
    var textArea = hourBlockDivs[i].children[1];

    if (trimmedId < currHour) {
      hourBlockDivs[i].classList.add("past");
    } else if (trimmedId == currHour) {
      hourBlockDivs[i].classList.add("present");
      textArea.classList.add("current");
    } else {
      hourBlockDivs[i].classList.add("future");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (var i = 0; i < hourBlockDivs.length; i++) {
    var id = hourBlockDivs[i].id;
    // get local storage item based on id
    var item = localStorage.getItem(id);
    // add value to textarea
    hourBlockDivs[i].children[1].value = item;
  }

  // TODO: Add code to display the current date in the header of the page.
  var todaysDate = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
  document.getElementById("currentDay").textContent = todaysDate;
});
