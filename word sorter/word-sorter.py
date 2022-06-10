
def rep(a_string, target_length):
    number_of_repeats = target_length // len(a_string) + 1
    a_string_repeated = a_string * number_of_repeats
    a_string_repeated_to_target = a_string_repeated[:target_length]
    return a_string_repeated_to_target
def golistone():
  arraylist = []
  print("enter your text")
  while True:
      in1 = input("> ")
      if(in1 == "^^55"):
        print("not accessable due to CASIO calculator limitations.")

        break
      else:
        arraylist = in1.split(" ")
        break
      #in1 = ""
  io = 0;
  longword = ""
  while io != len(arraylist):
    if(len(arraylist[io]) > len(longword)):
      longword = str(arraylist[io])
    io += 1
  print("*-------------------------------------*")
  print("|THE LONGEST WORD IS:                 |")
  print("|"+longword+rep(" ",37-len(longword))+"|")
  print("|                                     |")
  print("*-------------------------------------*")

print("LIST SORTER 1.0")
print("MADE BY JAMEZ 2021")
print("*-------------------------------------*")
print("|1: LONGEST WORD                      |")
print("*-------------------------------------*")
while True: #Breaks when key is pressed
    key = input("> ")
    if key == "1":
      golistone()
      break
