// 1
var now = new Date();
document.write(now);
// 2
var months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

var now = new Date();
alert(months[now.getMonth()]);
// 3
var days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

var now = new Date();
alert(days[now.getDay()].slice(0, 3));
// 4
var now = new Date();
var day = now.getDay();

if (day === 0 || day === 6) {
  document.write("It's Fun day");
}
// 5
var now = new Date();
var date = now.getDate();

if (date < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}
// 6
var now = new Date();
minutes = Math.floor(now.getTime() / (1000 * 60));

document.write("Minutes since January 1, 1970: " + minutes);
// 7
var now = new Date();
var hours = now.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}
// 8
var laterDate = new Date(2020, 11, 31);
document.write(laterDate);
// 9
var ramadan = new Date("June 18, 2015");
var today = new Date();

var difference = today - ramadan;
var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

alert("Days passed since 1st Ramadan: " + daysPassed);
// 10
var referenceDate = new Date("January 1, 1970");
var beginning2015 = new Date("January 1, 2015");

var seconds = (beginning2015 - referenceDate) / 1000;

document.write("Elapsed seconds: " + seconds);
// 11
var currentDate = new Date();
var hours = currentDate.getHours();

currentDate.setHours(hours + 1);

document.write(currentDate);
// 12
var date = new Date();

date.setFullYear(date.getFullYear() - 100);

alert(date);
// 13
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();

var birthYear = currentYear - Number(age);

document.write("Your birth year is: " + birthYear);
// 14
var customerName = prompt("Enter customer name:");
var units = Number(prompt("Enter number of units:"));
var chargesPerUnit = Number(prompt("Enter charges per unit:"));
var surcharge = Number(prompt("Enter late payment surcharge:"));

var months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

var currentMonth = months[new Date().getMonth()];

var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + surcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable: Rs. " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: Rs. " + surcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable: Rs. " + grossAmount.toFixed(2));

