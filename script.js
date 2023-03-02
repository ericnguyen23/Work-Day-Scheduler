var hourBlock = document.getElementById("block-container");
var hourBlockDivs = Array.from(hourBlock.children);
// set var for current hour of day
var currHour = dayjs().hour();

var saveBtn = document.querySelectorAll(".saveBtn");

// on click of save button, add to local storage
for (i of saveBtn) {
  i.addEventListener("click", function () {
    var key = this.parentElement.getAttribute("id");
    var value = this.previousElementSibling.value;
    localStorage.setItem(key, value);
  });
}

// print to screen
for (var i = 0; i < hourBlockDivs.length; i++) {
  var id = hourBlockDivs[i].id;
  // get local storage item based on id
  var item = localStorage.getItem(id);
  // add value to textarea
  hourBlockDivs[i].children[1].value = item;
}

// set appropriate colors
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

// update time every second
function displayCurrTime() {
  var todaysDate = dayjs().format("dddd, MMMM D YYYY, h:mm a");
  document.getElementById("currentDay").textContent = todaysDate;
}
displayCurrTime();
setInterval(displayCurrTime, 1000);

// var hourBlock = document.getElementById("block-container");
// var hourBlockDivs = Array.from(hourBlock.children);
// // set var for current hour of day
// var currHour = dayjs().hour();

// // add to local storage
// hourBlock.addEventListener("click", function (event) {
//   // only handle event if it's a button
//   if (event.target.tagName == "BUTTON") {
//     // set parent elements id to save in local storage
//     var parentElId = event.target.parentNode.id;
//     var userInput = event.target.parentNode.children[1].value;

//     localStorage.setItem(parentElId, userInput);
//   } else {
//     return;
//   }
// });

// // set appropriate colors
// for (var i = 0; i < hourBlockDivs.length; i++) {
//   var id = hourBlockDivs[i].id;
//   // to get just the numberic number
//   var trimmedId = id.slice(5);
//   var textArea = hourBlockDivs[i].children[1];

//   if (trimmedId < currHour) {
//     hourBlockDivs[i].classList.add("past");
//   } else if (trimmedId == currHour) {
//     hourBlockDivs[i].classList.add("present");
//     textArea.classList.add("current");
//   } else {
//     hourBlockDivs[i].classList.add("future");
//   }
// }

// // print to screen
// for (var i = 0; i < hourBlockDivs.length; i++) {
//   var id = hourBlockDivs[i].id;
//   // get local storage item based on id
//   var item = localStorage.getItem(id);
//   // add value to textarea
//   hourBlockDivs[i].children[1].value = item;
// }

// // update time every second
// function displayCurrTime() {
//   var todaysDate = dayjs().format("dddd, MMMM D YYYY, h:mm a");
//   document.getElementById("currentDay").textContent = todaysDate;
// }
// displayCurrTime();
// setInterval(displayCurrTime, 1000);
