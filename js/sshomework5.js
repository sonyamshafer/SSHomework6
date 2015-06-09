//This is a single line comment in js
/*This is a multi-line comment
Second line of multi-line comment*/

/*1 VARIABLES
var name = "Sonya";
var numberOfClasses = 2;
var isClassOnTuesday = true;

console.log ( name );
console.log ( numberOfClasses );
console.log ( isClassOnTuesday );
*/

//2 DEBUGGING
console.log ( "Hello world!" );

/*3 DATATYPES
Strings (text) var x = "Sonya"
Numbers (integers) var x = 5
Booleans (true or false) 4 < 5 returns true
Arrays (lists) var month = ["Jan", "Feb", "Mar", "Apr"];
*/

//4 ARRAYS (lists)
var month = ["Jan", "Feb", "Mar", "Apr"];
var day = ["Mon", "Tues", "Wed", "Thur"];
var date = [month, day];

console.log ( date[0][2] );

/*5 TESTING - Returns a boolean - true or false
"string one" === "string two" - False - both data and data type must be the same
5 == "5" - True - data needs to be the same, blind to the data type
5 != "5" - False - not equals to (5 is not equal to 5 is false)
5 !== "5" - True - not equals to (integer 5 is not equal to text string 5)
<
<=
>
>=
*/
if(4>2){
	console.log( "Four is greater than two" );
}

/*6 LOGIC - Control flow, structure that evaluates an argument to be true or false
else if
*/
if(11<9){
	console.log("The system is down.");
}else if(5<3){
	console.log("Everything you know is wrong.");
}else{
	alert("All is right with the world.");
}


//7 FUNCTION - Performs a particular task. Executes when called.
	var w = 20;
function feedKippo(){
	w = w+1;
	
	console.log( "Kippo ate "+ w +" frogs" );
}

//End cheat sheet

alert( "Hello world!" );

document.getElementById( "monitor" ).innerHTML = "Hello World";