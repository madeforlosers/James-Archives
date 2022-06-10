import random
print("*-------2022-------*")
print("|ROCK PAPER        |")
print("|SCISSORS          |")
print("|            BY ZOP|")
print("|EDITED BY JAMEZ   |")
print("*-------2022-------*")
noth = input()
options = ["r", "p", "s"]
pts = 0
while True:
    if pts < 0:
      pts = 0
    print( "*-------2022*  "+str(pts))
    print( "|CHOOSE YOUR|  Pts")
    print( "|SELECTION  *------*")
    print( "|R= ROCK |P= PAPER |")
    print( "|S= SCISSORS       |")
    print( "*-------2022-------*")
    ch = input("> ")
    exec =  options[random.randint(1,3)-1]
    if ch.lower() not in options:
        continue
    if ch == "r" and exec == "s":
      print("*-------2022-------*")
      print("|                  |")
      print("|     you won!     |")
      print("|                  |")
      print("|+1 Point          |")
      print("*-------2022-------*")
      pts += 1
      a = input()
    elif ch == "p" and exec == "r":
      print("*-------2022-------*")
      print("|                  |")
      print("|     you won!     |")
      print("|                  |")
      print("|+1 Point          |")
      print("*-------2022-------*")
      pts += 1
      a = input()
    elif ch == "s" and exec == "p":
      print("*-------2022-------*")
      print("|                  |")
      print("|     you won!     |")
      print("|                  |")
      print("|+1 Point          |")
      print("*-------2022-------*")
      pts += 1
      a = input()
    elif ch == exec:
      print("*-------2022-------*")
      print("|                  |")
      print("|     you tied     |")
      print("|                  |")
      print("|+0 Points         |")
      print("*-------2022-------*")
      a = input()
    else:
      print("*-------2022-------*")
      print("|                  |")
      print("|     you lost     |")
      print("|                  |")
      print("|-1 Point          |")
      print("*-------2022-------*")
      pts -= 1
      a = input()
