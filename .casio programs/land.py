#this only works on casio calculators that support python, this is made for the casio fx-9750GIII
import casioplot
import random
hei = 0
def pix(x,y): #makes it easier to plot pixels since it was made on a casio calculator
  casioplot.set_pixel(x,y)
  casioplot.show_screen()
for i in range(150):
  hei += random.randint(-1,1) 
  pix(i,50-hei)
  for b in range(50-hei): #fills in empty space below to make it look cooler
    pix(i, (50-hei)+b)
    
  
