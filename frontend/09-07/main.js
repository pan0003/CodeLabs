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