var timeDisplayEl = document.getElementById('#time-display');
var saveBtn = document.getElementById("btn");

function displayTime() {
  var today = dayjs().format('MMM DD, YYYY');
  timeDisplayEl.text(today);
} console.log(displayTime);

function readApptFromStorage() {
  var appt = localStorage.getItem('appt');
  if (appt) {
    appt = JSON.parse(appt);
  } else {
    appt = [];
  }
  return appt;
}; console.log(readApptFromStorage);

function saveToStorage(appt) {
  localStorage.setItem('appt', JSON.stringify(appt));
}; console.log(saveToStorage);


function saveNotes () {
  var saveNotes = document.querySelector('#hour');

saveNotes.textContent = " ";

saveNotes.addEventListener('click', function() {
  saveNotes.textContent = " ";
  localStorage.setItem("Event"), JSON.stringify(saveNotes);
}); 
}; console.log(saveNotes);

function saveBtn () {
  saveBtn.addEventListener('click', saveBtn)
}



displayTime();
readApptFromStorage();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.