1 DISPLAY 10, 10, TRUE
5 GOTO 9000
10 DISPLAY 10, 10, TRUE
20 PRINT "WAVES!"
30 ARRAY a, 2
40 a[0][5] = "blue"
50 a[1][5] = "blue"
60 a[2][4] = "blue"
70 a[3][4] = "blue"
80 a[4][5] = "blue"
90 a[5][5] = "blue"
100 a[6][4] = "blue"
110 a[7][4] = "blue"
120 a[8][5] = "blue"
130 a[9][5] = "blue"
135 PRINT "FRAME 1 DRAWN"
140 GOTO 150
150 ARRAY b, 2
160 b[0][4] = "blue"
170 b[1][5] = "blue"
180 b[2][5] = "blue"
190 b[3][4] = "blue"
200 b[4][4] = "blue"
210 b[5][5] = "blue"
220 b[6][5] = "blue"
230 b[7][4] = "blue"
240 b[8][4] = "blue"
250 b[9][5] = "blue"
255 PRINT "FRAME 2 DRAWN"
260 GOTO 270
270 ARRAY c, 2
280 c[0][4] = "blue"
290 c[1][4] = "blue"
300 c[2][5] = "blue"
310 c[3][5] = "blue"
320 c[4][4] = "blue"
330 c[5][4] = "blue"
340 c[6][5] = "blue"
350 c[7][5] = "blue"
360 c[8][4] = "blue"
370 c[9][4] = "blue"
375 PRINT "FRAME 3 DRAWN"
380 GOTO 390
390 ARRAY d, 2
400 d[0][5] = "blue"
410 d[1][4] = "blue"
420 d[2][4] = "blue"
430 d[3][5] = "blue"
440 d[4][5] = "blue"
450 d[5][4] = "blue"
460 d[6][4] = "blue"
470 d[7][5] = "blue"
480 d[8][5] = "blue"
490 d[9][4] = "blue"
500 PRINT "FRAME 4 DRAWN"

900 CLC
910 DRAW a
915 PRINT "FRAME 1 DISPLAYED"
920 PAUSE 50
930 CLC
940 DRAW b
945 PRINT "FRAME 2 DISPLAYED"
950 PAUSE 50
960 CLC
970 DRAW c
975 PRINT "FRAME 3 DISPLAYED"
980 PAUSE 50
990 CLC
1000 DRAW d
1005 PRINT "FRAME 4 DISPLAYED"
1010 PAUSE 50
1020 GOTO 900

9000 INPUT "VERSION 1 OR 2? (2 is broken)"; v
9010 IF v = 1 THEN GOTO 10
9020 if v = 2 THEN GOTO 90030
9030 GOTO 9000


90030 ARRAY e, 2
90040 e[0][5] = "blue"
90050 e[1][5] = "blue"

90060 e[0][4] = "white"
90070 e[1][4] = "white"

90080 e[2][4] = "blue"
90090 e[3][4] = "blue"

90100 e[2][5] = "white"
90110 e[3][5] = "white"

90120 e[4][5] = "blue"
90130 e[5][5] = "blue"

90140 e[4][4] = "white"
90150 e[5][4] = "white"

90160 e[6][4] = "blue"
90170 e[7][4] = "blue"

90180 e[6][5] = "white"
90190 e[7][5] = "white"

90200 e[8][5] = "blue"
90210 e[9][5] = "blue"

10135 PRINT "FRAME 1 DRAWN"
10140 GOTO 10150
10150 ARRAY f, 2
80160 f[0][4] = "blue"
80165 f[0][5] = "white"
10170 f[1][5] = "blue"
10175 f[1][4] = "white"
10180 f[2][5] = "blue"
10185 f[2][4] = "white"
10190 f[3][4] = "blue"
10195 f[3][5] = "white"
10200 f[4][4] = "blue"
10205 f[4][5] = "white"
10210 f[5][5] = "blue"
10215 f[5][4] = "white"
10220 f[6][5] = "blue"
10225 f[6][4] = "white"
10230 f[7][4] = "blue"
10235 f[7][5] = "white"
10240 f[8][4] = "blue"
10245 f[8][5] = "white"
10250 f[9][5] = "blue"
10255 PRINT "FRAME 2 DRAWN"
10260 GOTO 10270
10270 ARRAY g, 2
10280 g[0][4] = "blue"
10290 g[1][4] = "blue"
10300 g[2][5] = "blue"
10310 g[3][5] = "blue"
10320 g[4][4] = "blue"
10330 g[5][4] = "blue"
10340 g[6][5] = "blue"
10350 g[7][5] = "blue"
10360 g[8][4] = "blue"
10370 g[9][4] = "blue"
10375 PRINT "FRAME 3 DRAWN"
10380 GOTO 10390
10390 ARRAY h, 2
10400 h[0][5] = "blue"
10410 h[1][4] = "blue"
10420 h[2][4] = "blue"
10430 h[3][5] = "blue"
10440 h[4][5] = "blue"
10450 h[5][4] = "blue"
10460 h[6][4] = "blue"
10470 h[7][5] = "blue"
10480 h[8][5] = "blue"
10490 h[9][4] = "blue"
10910 DRAW e
10915 PRINT "FRAME 1 DISPLAYED"
10920 PAUSE 50
10940 DRAW f
10945 PRINT "FRAME 2 DISPLAYED"
10950 PAUSE 50
10970 DRAW g
10975 PRINT "FRAME 3 DISPLAYED"
10980 PAUSE 50
10990 DRAW h
11000 PRINT "FRAME 4 DISPLAYED"
11010 PAUSE 50
11020 GOTO 10910
