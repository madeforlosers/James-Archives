import random
def rep(a_string, target_length):
    number_of_repeats = target_length // len(a_string) + 1
    a_string_repeated = a_string * number_of_repeats
    a_string_repeated_to_target = a_string_repeated[:target_length]
    return a_string_repeated_to_target


cardop = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]
ptsop = [2,3,4,5,6,7,8,9,10,10,10,10,11 ]
print("*------------------*")
print("|the boxes in this |")
print("|game are made to  |")
print("|fit an FX-9750G3. |")
print("|                  |")
print("*press EXE---------*")
ent = input()
print("*------------------*")
print("|       WAR        |")
print("|     BY JAMES     |")
print("|    PRESS EXE     |")
print("|     TO START     |")
print("*-------2022-------*")
ent = input()
points = 0
oppoints = 0
msg = "unidentified"
selop = ["5", "6"]
for x in range(50):
  place = random.randint(0,len(cardop)-1)
  card = cardop[place]
  print("*"+str(points)+" Wins"+rep("-", 9-len(str(points))+4)+"*")
  print("|You got a         |")
  print("|     "+card+rep(" ", 13-len(card))+"|")
  print("|5: switch         |")
  print("|6: put down       |")
  print("*-------2022-------*")
  sel = input("> ")
  if sel not in selop:
    sel = "6"

  if sel == "5":
    place = random.randint(0,len(cardop)-1)
    card = cardop[place]
    sel = "6"
  
  if sel == "6":
    oppl = random.randint(0,len(cardop)-1)
    opcard = cardop[oppl]
    if ptsop[place] > ptsop[oppl]:
      msg = "You win!" 
      points += 1
    elif ptsop[place] < ptsop[oppl]:
      msg = "You Lose! " 
      oppoints += 1
    elif ptsop[place] == ptsop[oppl]:
      msg = "Its a draw!"
    print("*------------------*")
    print("|You got a "+card+rep(" ", 8-len(card))+"|")
    print("|They got a "+opcard+rep(" ", 7-len(opcard))+"|")
    print("|                  |")
    print("|"+msg+rep(" ", 18-len(msg))+"|")
    print("*press EXE---------*")
    ent = input()

if points > oppoints:
      msg = "You win!" 
      points += 1
elif points < oppoints:
      msg = "You Lose! " 
      oppoints += 1
elif points == oppoints:
      msg = "Its a draw!"
print("*------------------*")
print("|   RESULTS        |")
print("| YOU: "+str(points) + " Wins")
print("| COM: "+str(oppoints) + " Wins")
print("|"+msg+rep(" ", 18-len(msg))+"|")
print("*-------2022-------*")
print("thanks for playing!")
