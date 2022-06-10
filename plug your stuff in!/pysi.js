var Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m"
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

var readline = require('readline');

String.prototype.rept = function(times) {
  var rep = this;
  for (var i = 0; i < times; i++) {
    rep += this
  }
  return rep
}
console.clear();
var dayr = 0;
var firstt = true
var watts = 0;
var rnddd = 0
var wattstotal = 0;
var pluggedin = 0
var pluggedlist = []
var pluggedmoney = 0
var moneyleft = 16000
var days = 0;
var life = 300;
var mentalstability = 200
var paydate = 0
var dmd1 = "";
var dmd2 = "";
var dmd3 = "";
var dmd4 = "";
var dmd5 = "";
var dmd6 = "";
var dmd7 = "";
var dmd8 = "";
var dmd9 = "";
var dmd10 = "";
var wattslist = ["58", "102", "400", "6", "180", "800"]
var cpe = true;
var cpf = true;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("f".rept(2))
console.log(BgBlue, "Plug Your Stuff In!" + Reset + "\n(a game about plugging stuff in)")
prestart();
function prestart() {
  rl.question(Reset + "type \"st\" to start\n> ", function(starting) {
    if (starting == "st") {
      stgm();
      //rl.close();
    } else {
      prestart();
    }


  });
}

function stgm() {

  console.clear();
  console.log("you just moved into a new home. you need to plug some stuff in, but you have a budget and need to keep the electricity cost low. what do you plug in.\nEVERY WATT ADDS MORE.\n\n(press enter to continue)")


  rl.question("", function(brug) {
    showstats();
  })
  //choose();
}
function showstats() {
  console.clear()

  if (rnddd > moneyleft) {
    console.log("you can not buy groceries. your health is rapidly declining.")
    cpf = false;
    dmd1 = FgRed
    dmd2 = FgRed
    dmd3 = FgRed
    dmd4 = FgRed
    dmd5 = FgRed
    dmd6 = FgRed
  }

  if (random(1, 10) == 2 && moneyleft > 0) {
    var moneytaken = random(1, moneyleft / 4)
    console.log("you got robbed of your money. they took $" + moneytaken + ".")
    moneyleft -= moneytaken
  }
  if (!firstt) {
    checking()
  }
    if (life <= 0) {
    console.log("you died! you lasted " + days + " days")
    return
  }
  if (moneyleft < 0) {
    moneyleft = 0
  }
  wattstotal += watts
  console.log(pluggedlist)

  console.log("*------------------------*")
  console.log("|MONEY: $" + Math.round(moneyleft) + " ".rept(15 - Math.round(moneyleft).toString().length) + "|")
  console.log("|WATTS USED: " + wattstotal + " ".rept(11 - wattstotal.toString().length) + "|")
  console.log("|PLUGGED IN: " + pluggedlist.length + " ".rept(11 - pluggedin.toString().length) + "|")
  console.log("|HEALTH: " + Math.round(life) + " ".rept(15 - Math.round(life).toString().length) + "|")
    console.log("|MENTAL STABILITY: " + Math.round(mentalstability) + " ".rept(5 - Math.round(mentalstability).toString().length) + "|")
  console.log("*------------------------*");
  if (firstt) {
    console.log("this is your stats. these appear after every day.")
  }
  console.log("(press enter to continue)")
  rl.question("h> ", function(ok) {
    daych()

  })
  // daych()

}
function daych() {
  paydate += 1
  dayr += 1;
  days += 1
  if (dayr >= 5) {
    pay();
    return
  }
  if(paydate >= 7){
payday()
return
  }

  console.clear();
  console.log("choose what to plug in.")
  console.log("*-------------------------------------*")
  console.log("| WATTS |    DEVICE NAME     | NUMBER |")
  console.log("|-------------------------------------|")
  console.log("| 58    |" + dmd1 + " Television" + Reset + "         | 1      |")
  console.log("|-------------------------------------|")
  console.log("| 102   |" + dmd2 + " Computer" + Reset + "           | 2      |")
  console.log("|-------------------------------------|")
  console.log("| 400   |" + dmd3 + " Fridge" + Reset + "             | 3      |")
  console.log("|-------------------------------------|")
  console.log("| 6     |" + dmd4 + " Phone" + Reset + "              | 4      |")
  console.log("|-------------------------------------|")
  console.log("| 180   |" + dmd5 + " Game Console" + Reset + "       | 5      |")
  console.log("|-------------------------------------|")
  console.log("| 800   |" + dmd6 + " Lights" + Reset + "             | 6      |")
  console.log("*-------------------------------------*")
  if (firstt) {
    console.log("(put the number of the electronics you want to plug in into the input below seperated by spaces from lowest to highest. if you want to unplug someting already plugged in, list it again and it should unplug. watts will be added up each day, and money will be lost due to you needing food.)")
    firstt = false
  }
  rl.question("h>", function(listing) {

    //       check 1
    if (cpe) {
      for (var i = 0; i < listing.split(" ").length; i++) {
        if (pluggedlist.indexOf(listing.split(" ")[i]) == -1) {
          if (listing.split(" ")[i] == "") {

          } else {

            pluggedlist.push(listing.split(" ")[i]);
            watts += parseInt(wattslist[listing.split(" ")
            [i] - 1])
            pluggedin = listing.split(" ").length
            if (listing.split(" ")[i] == 1) {
              dmd1 = Dim
            }
            if (listing.split(" ")[i] == 2) {
              dmd2 = Dim
            }
            if (listing.split(" ")[i] == 3) {
              dmd3 = Dim
            }
            if (listing.split(" ")[i] == 4) {
              dmd4 = Dim
            }
            if (listing.split(" ")[i] == 5) {
              dmd5 = Dim
            }
            if (listing.split(" ")[i] == 6) {
              dmd6 = Dim
            }
          }
        } else {
          var ghost = listing.split(" ")[i]
          pluggedlist = pluggedlist.toString().replace(/,/g, "").split(ghost).join("").split("")
          watts = watts - parseInt(wattslist[listing.split(" ")[i] - 1])
          pluggedin -= 1;
          if (listing.split(" ")[i] == 1) {
            dmd1 = Reset
          }
          if (listing.split(" ")[i] == 2) {
            dmd2 = Reset
          }
          if (listing.split(" ")[i] == 3) {
            dmd3 = Reset
          }
          if (listing.split(" ")[i] == 4) {
            dmd4 = Reset
          }
          if (listing.split(" ")[i] == 5) {
            dmd5 = Reset
          }
          if (listing.split(" ")[i] == 6) {
            dmd6 = Reset
          }
        }
      }
    }
    console.clear()
    console.log("day " + days)
    rl.question("h>", function() {
      showstats()
    })
  })

}



// daych()

function payday(){
  console.clear()
  rnddd = random(150,6000);
  console.log("*--------------------*")
  console.log("|      PAYDAY!       |")
  console.log("*--------------------*")
  console.log("your paycheck: $" + rnddd)
  moneyleft += rnddd
  paydate = 0
  rl.question("h!>", function(hi) {
    showstats()
  })
}


function pay() {
  if (wattstotal * 1.76 > moneyleft) {
    console.log("you do not have enough money to pay your bill.")
    console.log("none of your electronics are being powered.")
    pluggedlist = []
    pluggedin = 0
    cpe = false;
    dmd1 = FgRed
    dmd2 = FgRed
    dmd3 = FgRed
    dmd4 = FgRed
    dmd5 = FgRed
    dmd6 = FgRed

  }
  dayr = 0;
  console.clear()
  rnddd = Math.round((Math.random() * 10) * 8.43 / (parseInt(pluggedlist.length + 1)))
  console.log("*-------------------*")
  console.log("|   PAYING TIME!!   |")
  console.log("*-------------------*")
  if (cpe) {
    console.log("electric bill: $" + Math.round(wattstotal * 1.76))
    moneyleft -= parseInt(watts)
  }
  if (cpf) {
    console.log("food bill: $" + rnddd)
    moneyleft -= rnddd
        mentalstability -= 4

  }


  moneyleft -= parseInt(watts)


  rl.question("h!>", function(hi) {
    showstats()
  })
}

function checking() {
  if (pluggedlist.indexOf("3") == -1) {
    life -= 1
  } else {
    life -= 0.1
  }
  if (!cpf) {
    life -= 32

  }
    if(!cpe){
        mentalstability -= 10

  }
  life -= 0.1
  if(pluggedlist.indexOf("1") == -1){
    mentalstability -= 0.1
  }
  if(pluggedlist.indexOf("2") == -1){
    mentalstability -= 0.6
  }
if(pluggedlist.indexOf("4") == -1){
    mentalstability -= 1
  }
    if(mentalstability<0){
      mentalstability = 0;
      console.log("you have no mental stability. your health is rapidly declining.")
      life -= 15
    }
  
}
