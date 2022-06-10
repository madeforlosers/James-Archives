var number = 0;
var sleep = require('system-sleep');
var reset = []
var l0 = []
var l1 = [];
var l2 = [];
var l3 = [];
var l4 = [];
var l5 = [];
var l6 = [];
var release = true;
var timest = 0;
var l7 = [];
var l8 = [];
var l9 = [];
var numbs = 0;
var height = 0.2;
var loadlen = 125;
var going = 0;
function grii(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
for (var load = 0; load < loadlen; load++) {
  l0.push("   ")
  l1.push("   ")
  l2.push("   ")
  l3.push("   ")
  l4.push("   ")
  l5.push("   ")
  l6.push("   ")
  l7.push("   ")
  l8.push("   ")
  l9.push("   ")
  reset.push(" ")
}
setInterval(function() {
  var l0 = []
  var l1 = [];
  var l2 = [];
  var l3 = [];
  var l4 = [];
  var l5 = [];
  var l6 = [];
  var l7 = [];
  var l8 = [];
  var l9 = [];
  for (var load = 0; load < loadlen; load++) {
    l0.push(" ")
    l1.push(" ")
    l2.push(" ")
    l3.push(" ")
    l4.push(" ")
    l5.push(" ")
    l6.push(" ")
    l7.push(" ")
    l8.push(" ")
    l9.push(" ")
    reset.push(" ")
  }
  number += grii(-1, 1) * height
  if (number < 0) {
    number = 0;
  }
  for (var o = 0; o < l0.length; o++) {
    number += grii(-1, 1) * height
    for (var i = 0; i < number; i++) {
      if (i > 9) {
        return;
      }
      eval("l" + i + "[" + o + "] = '█'")
    }
  }
  console.clear();
  console.log(
    l9.toString().replace(/,/g, "") + "\n" +
    l8.toString().replace(/,/g, "") + "\n" +
    l7.toString().replace(/,/g, "") + "\n" +
    l6.toString().replace(/,/g, "") + "\n" +
    l5.toString().replace(/,/g, "") + "\n" +
    l4.toString().replace(/,/g, "") + "\n" +
    l3.toString().replace(/,/g, "") + "\n" +
    l2.toString().replace(/,/g, "") + "\n" +
    l1.toString().replace(/,/g, "") + "\n" +
    l0.toString().replace(/,/g, "") + "\n" + number + "\n" + i + "\n" + o + "\n" + timest
  )
}, 1000)
console.clear();
console.log("if you see this for an extended period of time, something went wrong. check the code!")
