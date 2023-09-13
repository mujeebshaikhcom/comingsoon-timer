$(document).ready(function () {

const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Current date
const currentDate = new Date();

// Date for October 1st of the current year
const octoberFirst = new Date(currentDate.getFullYear(), 9, 1); // Note: Months are zero-based, so 9 represents October.

// Calculate the time remaining in seconds, minutes, hours, and days
const timeRemainingInSeconds = Math.floor((octoberFirst - currentDate) / 1000);
const timeRemainingInMinutes = Math.floor(timeRemainingInSeconds / 60);
const timeRemainingInHours = Math.floor(timeRemainingInMinutes / 60);
const timeRemainingInDays = Math.floor(timeRemainingInHours / 24);

// Calculate remaining time components
let secValue = timeRemainingInSeconds % 60;
let minValue = timeRemainingInMinutes % 60;
let hourValue = timeRemainingInHours % 24;
let dayValue = timeRemainingInDays;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s
  $("#chatBtn").on("click", function (e) {
    e.preventDefault();
    getWaEnquiry();
  });
});
function getWaEnquiry() {
  var phoneNum = "919172642754";
  var msg = '';
  msg = $("#msgfield").val();
  var waString = `https://wa.me/${phoneNum}?text=Hi%20Archnine,%20I%20am%20interested.%20${msg}.`
  var win = window.open(waString, '_blank');
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert('Please allow popups for this website');
  }
}