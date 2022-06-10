const fnr = "digits.txt"
const fs = require('fs')
try {
  var mdig = fs.readFileSync(fnr, 'utf8')
} catch (err) {
  console.log(`[!] ERROR: could not find ${fnr}`)
}
console.log("loaded packages")
function fampm(date) {
  var hours = date.getHours() - 6;
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
console.log("loaded function")
var d1l1 = "-----"; //hour digit #1
var d1l2 = "-----"; //hour digit #1
var d1l3 = "-----"; //hour digit #1
var d1l4 = "-----"; //hour digit #1
var d1l5 = "-----"; //hour digit #1
var d2l1 = "-----"; //hour digit #2
var d2l2 = "-----"; //hour digit #2
var d2l3 = "-----"; //hour digit #2
var d2l4 = "-----"; //hour digit #2
var d2l5 = "-----"; //hour digit #2
var d3l1 = "-----"; //minute digit #1
var d3l2 = "-----"; //minute digit #1
var d3l3 = "-----"; //minute digit #1
var d3l4 = "-----"; //minute digit #1
var d3l5 = "-----"; //minute digit #1
var d4l1 = "-----"; //minute digit #2
var d4l2 = "-----"; //minute digit #2
var d4l3 = "-----"; //minute digit #2
var d4l4 = "-----"; //minute digit #2
var d4l5 = "-----"; //minute digit #2
var speci = ""
console.log("set variables")
setInterval(function() {
  var clock = fampm(new Date)
  var amp = clock.split(" ")[1]
  var hours = clock.split(":")[0]
  var minutes = clock.split(":")[1].split(" ")[0]
  //console.clear();
  //console.log(nthour + ":" +plmz + minutes + " " + speci)
  if (minutes < 10) {
    nmin = "0" + minutes
  } else {
    nmin = minutes
  }
  if (hours < 10) {
    hr = "0" + hours
  } else {
    hr = hours
  }
  d1l1 = mdig.split("\n")[hr.charAt(0)].split(";")[0].replace(/-/g, " ")
  d1l2 = mdig.split("\n")[hr.charAt(0)].split(";")[1].replace(/-/g, " ")
  d1l3 = mdig.split("\n")[hr.charAt(0)].split(";")[2].replace(/-/g, " ")
  d1l4 = mdig.split("\n")[hr.charAt(0)].split(";")[3].replace(/-/g, " ")
  d1l5 = mdig.split("\n")[hr.charAt(0)].split(";")[4].replace(/-/g, " ")
  d2l1 = mdig.split("\n")[hr.charAt(1)].split(";")[0].replace(/-/g, " ")
  d2l2 = mdig.split("\n")[hr.charAt(1)].split(";")[1].replace(/-/g, " ")
  d2l3 = mdig.split("\n")[hr.charAt(1)].split(";")[2].replace(/-/g, " ")
  d2l4 = mdig.split("\n")[hr.charAt(1)].split(";")[3].replace(/-/g, " ")
  d2l5 = mdig.split("\n")[hr.charAt(1)].split(";")[4].replace(/-/g, " ")
  d3l1 = mdig.split("\n")[nmin.charAt(0)].split(";")[0].replace(/-/g, " ")
  d3l2 = mdig.split("\n")[nmin.charAt(0)].split(";")[1].replace(/-/g, " ")
  d3l3 = mdig.split("\n")[nmin.charAt(0)].split(";")[2].replace(/-/g, " ")
  d3l4 = mdig.split("\n")[nmin.charAt(0)].split(";")[3].replace(/-/g, " ")
  d3l5 = mdig.split("\n")[nmin.charAt(0)].split(";")[4].replace(/-/g, " ")
  d4l1 = mdig.split("\n")[nmin.charAt(1)].split(";")[0].replace(/-/g, " ")
  d4l2 = mdig.split("\n")[nmin.charAt(1)].split(";")[1].replace(/-/g, " ")
  d4l3 = mdig.split("\n")[nmin.charAt(1)].split(";")[2].replace(/-/g, " ")
  d4l4 = mdig.split("\n")[nmin.charAt(1)].split(";")[3].replace(/-/g, " ")
  d4l5 = mdig.split("\n")[nmin.charAt(1)].split(";")[4].replace(/-/g, " ")
  console.clear();
  console.log(
    "---------------------------------------------" +
    "\n     " + d1l1 + "     " + d2l1 + "     " + d3l1 + "     " + d4l1 + "     " +
    "\n     " + d1l2 + "     " + d2l2 + "  █  " + d3l2 + "     " + d4l2 + "     " +
    "\n     " + d1l3 + "     " + d2l3 + "     " + d3l3 + "     " + d4l3 + "     " +
    "\n     " + d1l4 + "     " + d2l4 + "  █  " + d3l4 + "     " + d4l4 + "     " +
    "\n     " + d1l5 + "     " + d2l5 + "     " + d3l5 + "     " + d4l5 + "     " +
    "\n---------------------------------------------"
  )
}, 10);
