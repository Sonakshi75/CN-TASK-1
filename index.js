var future = Date.parse("December 25, 2021 01:30:00");
var now = new Date();
var diff = future - now;
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor(diff / (1000 * 60 * 60));
var mins = Math.floor(diff / (1000 * 60));
var secs = Math.floor(diff / 1000);

var d = days;
var h = hours - days * 24;
var m = mins - hours * 60;
var s = secs - mins * 60;

document.getElementById("timer").innerHTML =
  '<div>' + d + '<span> <br> Days</span></div>' +
  '<div>' + h + '<span> <br>  Hours</span></div>' +
  '<div>' + m + '<span><br> Minutes</span></div>' +
  '<div>' + s + '<span><br> Seconds</span></div>';
setInterval('updateTimer()', 1000);
