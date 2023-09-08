// Exercise 1 

function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? Yes we can
		console.log(innerVar); // Can we access innerVar? In the function innerFunction, we can.
	}

	innerFunction();
}

outerFunction();

// Exercise 2
function mainFunction() {
	function hoistedFunction(); // Call the hoistedFunction here
	// Now, declare the hoistedFunction below
}

mainFunction();
hoistedFunction(); // I observe that when I declare this function, VS Code tells me that I can't find this function, so my guess is that I have to declare a function before I can use it


//Exercise 3
function outerE3() {
	let myVariableE3 = 'Outside';

	function innerE3() {
		console.log('myVariableE3 inside inner function:', myVariableE3);
	}

	innerE3();
}

outerE3(); // Prints: myVariable inside inner function: Outside

//Exercise 4 
let global; // Declare a global variable here

function modifyGlobal() {
   global = 5; // Try to modify the global variable here
}

function localScopeTest() {
    global = 6; // Declare a local variable with the same name as the global variable
}

modifyGlobal(); 
localScopeTest(); // Call both functions here

// Exercise 5
function functionFactory(param = 5) {
    function innerFunctionFactory() {
        console.log('I am using', param);
    } // Return a function that makes use of 'param'
    
}
// Create an instance of the inner function by invoking functionFactory with a parameter
functionFactory();
