# jsostrean

This For Nodejs
Library Fast For Javascript In Node

## Warning
You can also use JavaScript as usual

The First Script For First Using
`let nameVar = require("./jsostream.js");`

The first way to use jsostream is to call the main function. The method is using the script below

`
nameVar.jsostream(function(argc: int, argv: array string) {
  /* Your Script In Here */
  return 0;
})
`

## How To Print
`varName.print(Any)`

And how to make a function. Below this
`nameVar.function("Name Function": string, function(param: any){ /* Your Script Here */ });`

**Important**

You Can Use Space In Name Function

The Greatness Of This Function Can Be Erased. So it can be deleted. So that the memory is free.

_And How To Delete_

You Can Using This Script

`nameVar.deleteFunctions("Name Function": string);`

**Important**

If Deleted Cannot Be Used Again.

How to call function and give function. Using This Script
`nameVar.call("name Function": string, param: any)`

**Important**

The Param In Convert To Array. Example `nameVar.call("Hi", "Hello, ", "World") -> call function Hi(["Hello, ", "World"])`

If You Don't Like You Can Use This Script. `nameVar.importFunctions("name Function": string)(Param: any)`

Example `nameVar.importFunctions("Hi")("Hello, World") -> Hi("Hello, ", "World")`

and you can use a random number function, or a word.

`varName.randomNumber(void)`

`varName.randomString(Many: int)`

You Can Change Too.


Change String To Array

`varName.toChar("String": string)` Exam `varName.toChar("Hi") -> ["H", "i"]`


Change Space To Array

`varName.toArrText("String": string)` Example `varName.toArrText("Hello, World") -> ["Hello,", "World"]`


String or Char To Int

`varName.int("String Or Char": string || char)` Example `varName.int("1") -> 1:int`


String or Char To Float

`varName.float("String Or Char": string || char)` Example `varName.float("1") -> 1.0:float`


Array:int || float In Sort

`varName.sort([]: int || float)` Example `varName.sort([3, 2, 1]) -> [1, 2, 3]:int || float`

## Variable

How to Make new variable

`varName.var("Name Variable": string, fill: Any)`

And Get Data

`let output = varName.vGet("Name Variable": string)`

Delete Data

`varName.vDelete("Name Variable": string)`

how to copy data to multiple data

`varName.vEquation("Name Variable In Copy", "Variable1", "Variable2", Any)`

## _Example_

`varName.var("data1", 1);`

`varName.var("data2", 2);`

`varName.var("data3", 3);`

`varName.var("data4", 4);`

`varName.vEquation("data1", "data2", "data3", "data4")`

`jso.print(data1, data2, data3, data4) -> output: 1, 1, 1, 1`
