1 ARRAY colo
2 colo[1] = "blue"
3 colo[2] = "green"
4 colo[3] = "red"
10 x = 0
20 y = RND(40)
21 size = 100
25 DISPLAY size, size, FALSE
30 direcx = 1
40 direcy =1
50 REM CLC
55 colr = colo[RND(3)]
60 PLOT x, y, colr
61 PLOT x+1, y+1, colr
62 PLOT x, y+1, colr
63 PLOT x+1, y, colr
70 x = x + direcx
80 y = y + direcy
90 IF y > size-4 THEN IF RND(2) = 1 THEN direcy = -1.5 ELSE direcy = -2
100 IF x > size-4 THEN IF RND(2) = 1 THEN direcx = -1.5 ELSE direcx = -2
110 IF y < 1 THEN IF RND(2) = 1 THEN direcy = 1.5 ELSE direcy = 2
120 IF x < 1 THEN IF RND(2) = 1 THEN direcx = 1.5 ELSE direcx = 2
130 PAUSE 1
140 GOTO 50
