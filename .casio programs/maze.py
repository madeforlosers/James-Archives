import casioplot
import random
y = 1
x = -2
def pxl(x,y):
  casioplot.set_pixel(x,y)
def ma(x,y):
  pxl(x,y)
  pxl(x+1,y+1)    #
  pxl(x+2,y+2)     #
  pxl(x+3,y+3)      #
def mb(x,y):
  pxl(x,y+3)         #
  pxl(x+1,y+2)      #
  pxl(x+2,y+1)    #
  pxl(x+3,y) 
while y<60:
  while x<120:
    x+=4
    if random.randint(1,2) == 1:
      ma(x,y) 
    else:
      mb(x,y)
  y+=4
  x=-2
casioplot.show_screen()
