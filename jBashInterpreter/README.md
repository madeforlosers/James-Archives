# jBasher documentation
*a (VERY) basic programming language using the weirdest interpreter you've ever seen with virtually no error handling*


## Table Of Contents
- How to use
- Comments
- Output
- Variables
  - Strings
    - Declaring
    - Using
    - Adding strings to variable
  - Numbers
    - Declaring
    - Using
    - Adding
    - Subtracting
    - Random numbers
  - Lists
    - Declaring
    - Adding strings to list
    - Getting strings from list
- Jumping to certain line
- If statements
- Loops
  - Loop for n times
 
## How to use
  go into your command line and type `node jbasher.js [your file]`<br>
  your file can be any file type (i guess) but i would prefer you use .txt because yeah

## Comments
put `##` before text to make it into a comment

## Output
`say [string (in quotes)]`<br>you can also include variables by putting the variable name surrounded by hashtags in a string. example:
```
set string test as hello
say "#test#, world!"
## outputs "hello, world!"
```
<br>
you can also include number type variables into the string. 

## Variables
variables are declared using the `set` command. for now, there are only 2 types (string, number and list) but i hope to add more later.

### Strings
Strings are lines of text. 
#### Declaring
`set string [name] as [text]`<br>
#### Using
`#[variable]#` (if using in say command, put it in the quotes)<br>
#### Adding strings to variable
`add [text] to string [variable]`


### Numbers
Numbers are exactly what they say. numbers. 
#### Declaring
  `set number [name] as [number]`
#### Using
`#[variable]#` (if using in say command, put it in the quotes)<br>
#### Adding
`add [number] to [variable]`<br>
sadly i can't figure out how to add variables to variables, but this will have to work for now.
#### Subtracting
`subtract [number] from [variable]`<br>
#### Random numbers
a random number is an At (@) symbol next to the maximum number. for example, `@25` returns a random number between 1 and 25. 


<br>keep in mind that `set string`, `set number`, and `set list` are two different commands and operate slightly differently. `set string` does not need quotes in string.

### Lists
lists are a list of strings into one variable. basically the javascript array but more confusing.

#### Declaring
`set list [name]`

#### Adding things to list
`add [text] to list [list]`

#### Getting string from list
`%[list]|[place]%`

## Jumping to a certain line
  the `goto` command is used to hop to a certain line of code. here is an example:

  ```
  goto 4
  say "this line is never shown"
  say "neither is this"
  say "this is shown"
  ```
  and here is the syntax: `goto [line number]`

## If statements
  the if statement is pretty simple, with a `goto` command built into it. keep in mind though, the statement must have no spaces in it. variables will need hashtags around it.  <br>
  syntax: `if [statement] then goto [line number]`<br>
  example:
  ```
set number a as 5
if 6==#a# then goto 5
say "1 is incorrect"
goto 6
say "#1 is correct!"
if 6!=#a# then goto 9
say "2 is incorrect"
goto 11
say "2 is correct!"
goto 11
## end
```
## Loops
loops are very, very simple. but theres a problem. you can't goto the first line of the program or it will show you an error. its sad, i know. but there's a bodge for that! just add a comment at the first line and make the goto command that loops to the beginning say `goto 2` instead of  `goto 1`!! <br>

**this will work:**
```
## bodge (this will work)
say "this text will loop"
goto 2
```
**this will not work:**
```
say "this will show an error"
goto 1
```
### Loop for n times
this uses a combination of the if statement and goto.
barebone example:
```
set number i as 0
if #i#>n then goto 8
add 1 to i 
## keep the add number there. that is to add i
## replace n with how many times you want it to run
## put what you want to loop here
goto 2
## what to do when finished
```
actual example:
```
set number i as 0
if #i#>=5 then goto 6
add 1 to i
say "#i#"
goto 2
say "ok done"
```
