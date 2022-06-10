const fnr = "characters.txt"
const fff = "text.txt"
var chr = [" ", " ", " ","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ",", ".", "!", "?", ":", ";", "~", "-", "_", "(", ")", "'", "@", "#","$","%","^", "&","*", "=", "+", "|", "\\", "<", ">", "/", "`","1","2", "3", "4", "5", "6", "7", "8", "9", "0", "[", "]", "{", "}", "✓", "℉", "℃", "°"]
var text = "this is a test i made that supports 71 characters. it doesn't support uppercase"
const fs = require('fs')
var ttw = ""
cdebug()
wdebug("written first variables")
try {
  var vvvv = fs.readFileSync(fnr, 'utf8')
  wdebug(`accessed ${fnr}`)
  var mdig =  fs.readFileSync(fff, 'utf8')
  wdebug(`accessed ${fff}`)
} catch (err) {
  console.log(`[!] ERROR: could not find ${fnr}`)
}
text = "        " + text


for(var i = 0; i < text.length; i++){
  if(chr.indexOf(text[i]) == -1){
    text = text.replace(text[i],"°")
  }
}
//the █ is not for use of displaying text. it's used to type comments in characters.txt
wdebug(chr.length)
for(var i = 0; i < text.length; i++){
  //console.log(vvvv.split("\n")[chr.indexOf(text[i])])
  ttw += vvvv.split("\n")[chr.indexOf(text[i])]+"\n"
  wdebug("writing ttw ("+i + "/" + text.length + " complete)")
  
}
 fs.writeFile(fff, ttw, { flag: 'w+' }, err => {})
 wdebug(`written ttw to ${fff}`)

//mdig = fs.readFileSync('text.txt', "utf8")
wdebug("read text.txt")

//const mdig = fs.readFileSync('text.txt', 'utf8')
console.log(mdig)

//wdebug(mdig)

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
var d5l1 = "-----"; //minute digit #2
var d5l2 = "-----"; //minute digit #2
var d5l3 = "-----"; //minute digit #2
var d5l4 = "-----"; //minute digit #2
var d5l5 = "-----"; //minute digit #2
var d6l1 = "-----"; //minute digit #2
var d6l2 = "-----"; //minute digit #2
var d6l3 = "-----"; //minute digit #2
var d6l4 = "-----"; //minute digit #2
var d6l5 = "-----"; //minute digit #2
var d7l1 = "-----"; //minute digit #2
var d7l2 = "-----"; //minute digit #2
var d7l3 = "-----"; //minute digit #2
var d7l4 = "-----"; //minute digit #2
var d7l5 = "-----"; //minute digit #2
var d8l1 = "-----"; //minute digit #2
var d8l2 = "-----"; //minute digit #2
var d8l3 = "-----"; //minute digit #2
var d8l4 = "-----"; //minute digit #2
var d8l5 = "-----"; //minute digit #2
var d9l1 = "-----"; //minute digit #2
var d9l2 = "-----"; //minute digit #2
var d9l3 = "-----"; //minute digit #2
var d9l4 = "-----"; //minute digit #2
var d9l5 = "-----"; //minute digit #2
h1 = 0
h2 = 1
n1 = 2
n2 = 3
b1 = 4
b2 = 5
b3 = 6
b4 = 7
b5 = 8
ddd = mdig.split("\n").length-2
setInterval(function(){
  if(b4>ddd){
    b4 = 0;
  }
  if(b5>ddd){
    b5 = 0;
  }
  if(b1>ddd){
    b1 = 0;
  }
  if(b2>ddd){
    b2 = 0;
  }
  if(b3>ddd){
    b3 = 0;
  }
  if(n2>ddd){
    n2 = 0;
  }
  if(n1>ddd){
    n1 = 0;
  }
  if(h2>ddd){
    h2 = 0;
  }
  if(h1>ddd){
    h1 = 0;
  }
d1l1 = mdig.split("\n")[h1].split(";")[0].replace(/-/g, " ")
try{
  d1l2 = mdig.split("\n")[h1].split(";")[1].replace(/-/g, " ")
  d1l3 = mdig.split("\n")[h1].split(";")[2].replace(/-/g, " ")
  d1l4 = mdig.split("\n")[h1].split(";")[3].replace(/-/g, " ")
  d1l5 = mdig.split("\n")[h1].split(";")[4].replace(/-/g, " ")
  d2l1 = mdig.split("\n")[h2].split(";")[0].replace(/-/g, " ")
  d2l2 = mdig.split("\n")[h2].split(";")[1].replace(/-/g, " ")
  d2l3 = mdig.split("\n")[h2].split(";")[2].replace(/-/g, " ")
  d2l4 = mdig.split("\n")[h2].split(";")[3].replace(/-/g, " ")
  d2l5 = mdig.split("\n")[h2].split(";")[4].replace(/-/g, " ")
  d3l1 = mdig.split("\n")[n1].split(";")[0].replace(/-/g, " ")
  d3l2 = mdig.split("\n")[n1].split(";")[1].replace(/-/g, " ")
  d3l3 = mdig.split("\n")[n1].split(";")[2].replace(/-/g, " ")
  d3l4 = mdig.split("\n")[n1].split(";")[3].replace(/-/g, " ")
  d3l5 = mdig.split("\n")[n1].split(";")[4].replace(/-/g, " ")
  d4l1 = mdig.split("\n")[n2].split(";")[0].replace(/-/g, " ")
  d4l2 = mdig.split("\n")[n2].split(";")[1].replace(/-/g, " ")
  d4l3 = mdig.split("\n")[n2].split(";")[2].replace(/-/g, " ")
  d4l4 = mdig.split("\n")[n2].split(";")[3].replace(/-/g, " ")
  d4l5 = mdig.split("\n")[n2].split(";")[4].replace(/-/g, " ")
  d5l1 = mdig.split("\n")[b1].split(";")[0].replace(/-/g, " ")
  d5l2 = mdig.split("\n")[b1].split(";")[1].replace(/-/g, " ")
  d5l3 = mdig.split("\n")[b1].split(";")[2].replace(/-/g, " ")
  d5l4 = mdig.split("\n")[b1].split(";")[3].replace(/-/g, " ")
  d5l5 = mdig.split("\n")[b1].split(";")[4].replace(/-/g, " ")
  d6l1 = mdig.split("\n")[b2].split(";")[0].replace(/-/g, " ")
  d6l2 = mdig.split("\n")[b2].split(";")[1].replace(/-/g, " ")
  d6l3 = mdig.split("\n")[b2].split(";")[2].replace(/-/g, " ")
  d6l4 = mdig.split("\n")[b2].split(";")[3].replace(/-/g, " ")
  d6l5 = mdig.split("\n")[b2].split(";")[4].replace(/-/g, " ")
  d7l1 = mdig.split("\n")[b3].split(";")[0].replace(/-/g, " ")
  d7l2 = mdig.split("\n")[b3].split(";")[1].replace(/-/g, " ")
  d7l3 = mdig.split("\n")[b3].split(";")[2].replace(/-/g, " ")
  d7l4 = mdig.split("\n")[b3].split(";")[3].replace(/-/g, " ")
  d7l5 = mdig.split("\n")[b3].split(";")[4].replace(/-/g, " ")
  d8l1 = mdig.split("\n")[b4].split(";")[0].replace(/-/g, " ")
  d8l2 = mdig.split("\n")[b4].split(";")[1].replace(/-/g, " ")
  d8l3 = mdig.split("\n")[b4].split(";")[2].replace(/-/g, " ")
  d8l4 = mdig.split("\n")[b4].split(";")[3].replace(/-/g, " ")
  d8l5 = mdig.split("\n")[b4].split(";")[4].replace(/-/g, " ")
  d9l1 = mdig.split("\n")[b5].split(";")[0].replace(/-/g, " ")
  d9l2 = mdig.split("\n")[b5].split(";")[1].replace(/-/g, " ")
  d9l3 = mdig.split("\n")[b5].split(";")[2].replace(/-/g, " ")
  d9l4 = mdig.split("\n")[b5].split(";")[3].replace(/-/g, " ")
  d9l5 = mdig.split("\n")[b5].split(";")[4].replace(/-/g, " ")
}catch(e){
  console.clear()
  console.log("\x1B[31mit failed. don't worry! this is usual, try it again\033[0m\n\ndo CTRL+C to end the program.\n\n\n\x1B[31mHere's the error: "+e+"\033[0m")
  return
}
  
  console.clear();
  console.log(
    "------------------------------------------------------------------------------------------" +
    "\n     " + d1l1 + "     " + d2l1 + "     " + d3l1 + "     " + d4l1 + "     " + d5l1 + "     " + d6l1 + "     " + d7l1 + "     " + d8l1 + "     " + d9l1 + "     " +
    "\n     " + d1l2 + "     " + d2l2 + "     " + d3l2 + "     " + d4l2 + "     " + d5l2 + "     " + d6l2 + "     " + d7l2 + "     " + d8l2 + "     " + d9l2 + "     " +
    "\n     " + d1l3 + "     " + d2l3 + "     " + d3l3 + "     " + d4l3 + "     " + d5l3 + "     " + d6l3 + "     " + d7l3 + "     " + d8l3 + "     " + d9l3 + "     " +
    "\n     " + d1l4 + "     " + d2l4 + "     " + d3l4 + "     " + d4l4 + "     " + d5l4 + "     " + d6l4 + "     " + d7l4 + "     " + d8l4 + "     " + d9l4 + "     " +
    "\n     " + d1l5 + "     " + d2l5 + "     " + d3l5 + "     " + d4l5 + "     " + d5l5 + "     " + d6l5 + "     " + d7l5 + "     " + d8l5 + "     " + d9l5 + "     " +
    "\n------------------------------------------------------------------------------------------"
  )
  
  console.log(h1)
   h1+=1
  h2+=1
  n1+=1
  n2+=1
  b1+=1
  b2+=1
  b3+=1
  b4+=1
  b5+=1
},500)
function wdebug(text){
  fs.writeFile("debug.txt", text+"\n", { flag: 'a+' }, err => {})
}
function cdebug(){
  fs.writeFile("debug.txt", "", {flag: "w+"}, err => {})
}
