var currentDay = moment().format("dddd, MMMM Do");
var currentHour = parseInt(moment().format("k"));
var saveBtn = document.getElementsByTagName("BUTTON");

$("#currentDay").text(currentDay);

console.log(currentHour);

