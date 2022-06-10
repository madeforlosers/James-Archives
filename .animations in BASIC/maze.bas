10 DISPLAY 100, 100, FALSE
20 x = 0
30 y = 0
40 GOSUB RND(2)*90
50 IF x > ROWS-5 THEN GOTO 240
60 x = x + 3
70 PAUSE 0
80 GOTO 40
90 ARRAY o, 2
100 o[x][y] = "black"
110 o[x+1][y+1] = "black"
120 o[x+2][y+2] = "black"
130 DRAW o
140 RETURN
150 REM filler code
160 REM filler code
170 REM filler code
180 ARRAY o, 2
190 o[x+2][y] = "black"
200 o[x+1][y+1] = "black"
210 o[x][y+2] = "black"
220 DRAW o
230 RETURN
240 x = 0
250 y = y + 3
260 GOTO 40
