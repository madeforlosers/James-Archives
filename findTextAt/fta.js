const fs = require('fs');
var readline = require("readline");
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

hl = "\x1b[43m"
res = "\x1b[0m"
var ocp = [];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var args = process.argv.slice(2)
if(args == []){
  console.log("node fta.js <filename> <text>")
  return
}
args[0] = fs.readFileSync(args[0], 'utf8');
var last = -1;
var beginspl = 0;
var endspl = 0;
var whereis = args[0].indexOf(args[1], 0);
console.clear()
while(whereis >= 0) {
    ocp.push(whereis);

    whereis = args[0].indexOf(args[1], whereis + 1);
     console.clear()
  console.log("running. found " + ocp.length + " so far")
}
String.prototype.replaceAll = function(str, repl){
  return this.split(str).join(repl)
}

var gg = 0;
  console.log("search concluded. found "+parseInt(ocp.length-1)+" in string finding "+args[1] +". type a number (0-"+parseInt(ocp.length)+") to see occurance of said text, use 'next' and 'prev' to go to next and previous letters")
askquestion();
function askquestion(){

rl.question("> ", function(answer) {

  if(answer == "list"){
    console.log(args[0].replaceAll(args[1], hl+args[1]+res).replaceAll("\n", " / "))
    return

  }
  if(answer == "next"){
    ans = last+1;
  }else if(answer == "prev"){
    ans = last-1;
  }else{
    var ans = parseInt(answer)

  }

console.clear()
  console.log("type a number (0-"+parseInt(ocp.length)-1+") to see occurance of said text, use 'next' and 'prev' to go to next and previous letters\n\n")
   if(ocp[ans] <= 10){
   console.log(args[0].replaceAt(ocp[ans]+(args[1].length-1), hl+args[1]+res ).replaceAll("\n", " / ").slice(0, ocp[ans]+(20*(args[0].length/100)))+"...")

   }else if(ocp[ans]+30 >= args[0].length){
     var getlen = ("..."+args[0].replaceAt(ocp[ans]+(args[1].length-1), hl+args[1]+res ).replaceAll("\n", " / ")).length
     console.log("..."+args[0].replaceAt(ocp[ans]+(args[1].length-1), hl+args[1]+res ).replaceAll("\n", " / ").slice(ocp[ans]-10,getlen.length)+res)
   }else if("..."+args[0].replaceAt(ocp[ans], hl+args[1]+res ).slice(ocp[ans]-20, ocp[ans]+(20*(args[0].length/100)))+"..." == "......"){
     console.log("you tried to seek " + ans + " but that doesn't exist.")
   }else{
   console.log("..."+args[0].replaceAt(ocp[ans]+(args[1].length-1), hl+args[1]+res ).replaceAll("\n", " / ").slice(ocp[ans]-20, ocp[ans]+(20*(args[0].length/100)))+"...")

   }
   last = ans
askquestion();

});

}

askquestion()
