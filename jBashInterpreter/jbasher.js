function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
const fs = require('fs')
var window = {};
var file = fs.readFileSync(process.argv[2], 'utf8')
var code = file.split("\n")
function stst(fn) {
  return new Function('return ' + fn)();
}

for(var i = 0; i < code.length; i++){
  if(code[i].match(/^##/g) != null){
    continue
  }
  if(code[i].match(/@\d+/g) != null){
    ph = code[i]
    ph = ph.replace(/@\d+/g, 
                    rnd(1, parseInt(code[i].split("@")[1]))
                   )
    code[i] = ph
  }
  
  if(code[i].match(/%\w+\|\d+%/g) != null){
    //code[i] = code[i].replace(/#.+#/g, code[i].split("#")[1])
    code[i] = code[i].replace(/%\w+\|\d+%/g, 
                    window[
                    code[i].match(/%\w+\|\d+%/g)[0]
                    .split("|")[0]
                    .split("%")[1]][parseInt(code[i].match(/%\w+\|\d+%/g)[0].split("|")[1]
                    .split("%")[0])-1]
                   )
  }
   if(code[i].match(/%\w+\|#.+#%/g) != null){
     ph = code[i]
  
    ph = ph.replace(/#.+#/, window[ph.split("#")[1]])
      
    ph = code[i]
      .replace(/%\w+\|.+%/g, 
                    window[
                    ph.match(/%\w+\|.+%/g)[0]
                    .split("|")[0]
                    .split("%")[1]][parseInt(ph.match(/%\w+\|.+%/g)[0].split("|")[1]
                    .split("%")[0])-1]
                   )
    
     
  }
  
  if(code[i].match(/^set\s+string\s+\w+\sas\s\.+/g) != null){
    window[code[i].split(" ")[2]] = code[i].split(" ")[4]
    continue
  }
  if(code[i].match(/^set\slist\s\w+/g) != null){
    window[code[i].split(" ")[2]] = []
    continue
  }
  if(code[i].match(/^add\s.+\sto\slist\s\w+/g) != null){
    window[code[i].split(" ")[4]].push(code[i].split(" ")[1])
    continue
  }
  if(code[i].match(/^add\s\w+\sto\sstring\s\w+/g) != null){
    window[code[i].split(" ")[4]] += code[i].split(" ")[1]
    continue
  }
  if(code[i].match(/^set\s+number\s+\w+\sas\s+\d+/g) != null){
    window[code[i].split(" ")[2]] = parseInt(code[i].split(" ")[4])
    continue
  }
  if(code[i].match(/^say\s".*"/g) != null){
    if(code[i].match(/%/g) != null){
      console.log(ph.split("\"")[1])
    }else{
    if(code[i].match(/#.+#/g) != null){
      console.log(code[i].split("\"")[1].replace(/#.+#/g, window[code[i].split("#")[1]]))
    }else{
       console.log(code[i].split("\"")[1])
    }
    }
   // console.log(code[i].split("\"")[1])
    continue
  }
  if(code[i].match(/^add\s+\d+\sto\s+\w+/g) != null){
   
    if(typeof     window[code[i].split(/^add\s+\d+\sto\s+/)[1]] != "number"){
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line "+(i+1)+")")
     return
    }else{
      
    window[code[i].split(/^add\s+\d+\sto\s+/)[1]] += parseInt(code[i].split(/\s/)[1])
    
   // console.log(code[i].split("\"")[1])
    continue
      
    }
  }
  if(code[i].match(/^subtract\s+\d+\sfrom\s+\w+/g) != null){
    if(typeof     window[code[i].split(/^subtract\s+\d+\sto\s+/)[1]] != "number"){
      console.error("ERROR: CANNOT CONVERT STRING TO NUMBER (line "+(i+1)+")")
      return
    }else{
    window[code[i].split(/^subtract\s+\d+\sfrom\s+/)[1]] -= parseInt(code[i].split(/\s/)[1])
    
   // console.log(code[i].split("\"")[1])
    continue
    }
  }
  if(code[i].match(/^goto\s+\d+/g) != null){
    i = parseInt(code[i].split(/^goto\s+/g)[1])-2
  }
  if(code[i].match(/if\s.+\sthen\sgoto\s\d+/g) != null){

    if(stst(code[i].replace(/#.+#/g, window[code[i].split("#")[1]]).split(" ")[1])){
         i = parseInt(code[i].replace(/#.+#/g, window[code[i].split("#")[1]]).split(/goto\s+/g)[1])-2
    }else{
      
       continue
    }
   
   continue
  }
}

//new Function("CONDITON_STRING")()
