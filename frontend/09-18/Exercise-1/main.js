// -- EXERCISE 1 -- //
// Use JavaScript to select the element with an ID of "myDiv" and change its background color to "lightblue". Select all the paragraph (<p>) elements on the page and log their inner text.

// Select the element with an ID of "myDiv" and change its background color to "lightblue"
const myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "lightblue";

// Select all the paragraph (<p>) elements on the page and log their inner text
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph, index) => {
  console.log(`Paragraph ${index + 1}: ${paragraph.innerText}`);
});
