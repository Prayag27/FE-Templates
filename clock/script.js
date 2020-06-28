setInterval(displayclock, 1000);

function displayclock() {

var curTime = new Date();
var hours = curTime.getHours();
var minutes = curTime.getMinutes();
var secs = curTime.getSeconds();

document.getElementById("MyClock").innerHTML =  hours + ":" + minutes + ":" + secs;

}