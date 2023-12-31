// Exercise 1
console.log('Hello World');
// Exercise 2
// Declare a variable named "name" and assign it your name as a string
var nameE2 = "YourName";
// Display the value of the "name" variable on the console
console.log("My name is: " + nameE2);
// Exercise 3
// Declare variables for length and width of the rectangle
var length = 10; // Replace with your desired length value
var width = 5; // Replace with your desired width value
// Calculate the area of the rectangle
var area = length * width;
// Display the area of the rectangle on the console
console.log("The area of the rectangle with length ".concat(length, " and width ").concat(width, " is ").concat(area, " square units."));
//Exercise 4
// Declare a variable to store the number you want to check
var numberToCheck = 7; // Replace with the number you want to check
// Check if the number is even or odd
if (numberToCheck % 2 === 0) {
    console.log("".concat(numberToCheck, " is even."));
}
else {
    console.log("".concat(numberToCheck, " is odd."));
}
// Exercise 5
// Use a for loop to iterate from 1 to 10
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log(i_1);
}
// Exercise 6
// Use the built-in `prompt` function to get the user's name
var userName = prompt("Please enter your name:");
// Check if the user entered a name or clicked "Cancel"
if (userName !== null) {
    // Display a personalized greeting message
    console.log("Hello, ".concat(userName, "! Welcome to our program."));
}
else {
    // Handle the case when the user clicked "Cancel" or didn't enter a name
    console.log("You did not provide a name. Goodbye!");
}
// When you run this program, it will prompt the user to enter their name. If the user enters a name, it will display a greeting message with their name. If the user clicks "Cancel" or doesn't enter a name, it will display a different message.
// Exercise 7
// Use the built-in `prompt` function to get the user's input
var userInput = prompt("Enter a number to calculate its factorial:");
// Check if the user entered a valid number
if (userInput !== null) {
    var number = parseInt(userInput);
    // Check if the input is a non-negative integer
    if (!isNaN(numberE7) && numberE7 >= 0) {
        // Calculate the factorial
        var factorial = 1;
        for (var i_2 = 1; i_2 <= numberE7; i_2++) {
            factorial *= i_2;
        }
        // Display the factorial
        console.log("The factorial of ".concat(numberE7, " is ").concat(factorial));
    }
    else {
        // Handle the case when the input is not a valid non-negative integer
        console.log("Please enter a valid non-negative integer.");
    }
}
else {
    // Handle the case when the user clicked "Cancel"
    console.log("You did not provide a number. Goodbye!");
}
// Exercise 8
// Use the built-in `prompt` function to get the user's input
var userInput = prompt("Enter a year to check if it's a leap year:");
// Check if the user entered a valid year
if (userInput !== null) {
    var year = parseInt(userInput);
    // Check if the input is a valid positive integer
    if (!isNaN(year) && year > 0) {
        // Check if it's a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log("".concat(year, " is a leap year."));
        }
        else {
            console.log("".concat(year, " is not a leap year."));
        }
    }
    else {
        // Handle the case when the input is not a valid positive integer
        console.log("Please enter a valid positive year.");
    }
}
else {
    // Handle the case when the user clicked "Cancel"
    console.log("You did not provide a year. Goodbye!");
}
//Some notes for me to read through: When you run this program, it will prompt the user to enter a year. If the user enters a valid positive year, it will determine whether it's a leap year and display the result. If the user clicks "Cancel" or enters an invalid input, it will display an appropriate message.
//Exercise 9
var sum = 0;
var i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log("The sum of numbers from 1 to 100 is: ".concat(sum));
