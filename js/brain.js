/* Homework day 6
Create a “cheat sheet” JavaScript file that contains examples of all of the things we learned today, delineated with comments
Create a web page with 4 different jQuery events. Have at least one of them be initiated by a click event.
Submit the above two assignments as one GitHub repository link.*/

//Class points delineated with comments
//jQuery is a Javascript library

//The name of a function can be what you want, like getText below
function getText(){

	var text = "Hello world!";

	console.log(text);
}
//Call functions via events or just by calling the function, like below, getText();
getText();

function addNumber( x ){ //Parameter, or argument, in ()
	var y = 10;

	console.log( x ); //Returns 9, as below
	console.log( y + x ); //Returns 19, as 10 + 9
}

addNumber( 9 );

//Looping through array
var myArr = ["P", "E", "A", "C", "H"];
var myArrSize = myArr.length;

//Get array length
console.log(myArr.length);

//For Loop (abstract)
for( x =0; x < myArrSize; x++ ){
	console.log( myArr[x] );

// Increase by 2
//for( x = 0; x < 10; x = x + 2 ){
// 	console.log(x);
//}	
}

/*Functions can 1. run a script and not return anything, 2. they can also expect something that
need to compute, 3. and they can also return something*/

//Review calculator

//Refresh
//Data Types
//Numbers, Strings, Booleans, Arrays
//Numbers = Integers 1, Doubles	1.11, Floats 3.14
//Strings = Letters, names
//Booleans = True, False
//Arrays = Lists (Multidimensional - arrays within arrays)(Polymorphic - arrays with different data types insite)

//Variables = containers which can contain any value and data type

/*Logic / operators
//If/Else
if(true){

}else{

}*/

//== only data needs to be the same
//=== both data and data type must be the same
//!=
//!==
//<
//>
//<=
//>=
//&& and
//|| or

//Loops
//For Loop, While Loop
//For Loop
//For Loop has variabe inside defining the beginning, and a variable defining the end/limit of the loop
//For Loop will continue as long as the conditions are true
//For Loop may be used more than While Loop

//While Loop
//Just gets one argument
//Has Boolean
//Runs until Boolean is false
//Like if condition combined with loop

var i = 99;
while( i > 0){

	console.log( i + " " + "pints of icecream on the wall,", i + " " + "pints of icecream, you take one down, pass it around,", i-1 + " " + "pints of icecream on the wall, ");

	i--;
}

//For and While loops are processing expensive - take a lot of RAM

//Switch ( x )
//Logical, like an if/else
//Can take an int or string

var x = "cake";

switch( x ){
	case 1:
		console.log("You said X = 1");
	break;

	case 2:
		console.log("You said X = 2");
	break;

	case "cake":
		console.log("You said X = 'cake'");
	break;

	case "icecream":
		console.log("You said X = 'icecream'");
	break;
}

//jQuery is a library with a bunch of functions written in Javascript
//Call with CDN = Content Delivery Network - online library
//Or download code and save in project folder

//Javascript Boiler Plate
//$(document).ready();
//$(document).ready(function(){
//
//
//});