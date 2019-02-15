"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Juan Verduzco
   Date:  02.14.19

   Filename:   ph_clock.js     

*/

//////// Global variables used throught the code ////////
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;
var clockID = setInterval("countdown()", 1000);
//////// function for counting down from specified time in the minsLeft and secsLeft variables adds the the zeros if theres nothing there.
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - minsLeft * 60;
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    ////////displays the seconds left ////////
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;
    checkTimer();
    timeLeft--;
}
//////// Shows Order Expired after the timer runs out ////////
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', "<br />(Order Expired)");
    clearInterval(clockID);
}




/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}