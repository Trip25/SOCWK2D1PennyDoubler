

// function handleClick() {
//   console.log("I'm just to prove it's working!");
//   // 🔺 Remember, this function is already hooked up to the button. You'll learn how to do this yourself soon! Your task is just to write the code inside this function itself.
// }




/*
Task 1 - selecting and changing text ✅
Let's start out by changing the quote under the successful person to something more interesting.

👉 Use JavaScript to select the element with a class of .quote and store in a variable.✅

👉 Change its textContent to a quote of your choosing.✅
*/
let personQuote = document.querySelector('q')
personQuote.textContent = "This is not a scam!"

/* Task 2 - selecting and changing style
👉 Select the h1 tag using querySelector and store in variable.✅

👉 Change its text-decoration property to the value of underline.✅ */

let heading = document.querySelector("h1")
heading.style.textDecoration = "underline"

/* Task 3 - change the title
Not all aspects of the page need to accessed with querySelector. Some have shortcuts on the document object.

👉 Use the correct property on the document object to change the title property of the document to a new value of your choosing. Check the browser tab to make sure that it worked.✅ */
let tabNames = document.querySelector('title')
tabNames.textContent = "This is my tab name"

/* Task 4 - getting the penny doubler working
Now it's time to get those pennies piling up! The DOUBLE EM! button is already hooked up to the handleClick function behind the scenes - you'll learn how to do this yourself soon! For now, your job is to write the code inside the function itself that manipulates the DOM to show a doubled amount of pennies on the page with each click.

The function handleClick currently looks like this...

function handleClick() {
  console.log("I'm just to prove it's working!");
}
Within the function...

👉 Double the the value of the the pennies variable (already defined - look for it in the file!).✅

👉 Use the pennies variable to update the textContent of the output tag to be ${pennies} pennies.✅ */
//create function that doubles the value of the pennies variable when you click the button
//double value of pennies
// within the output tag, change the text inside to output
let pennies = 1;

function handleClick() {
  console.log("I'm just to prove it's working!");
  pennies = pennies * 2;
  document.querySelector('output').textContent = `${pennies} pennies`;
  
}

/* Task 5 - creating elements
5.1 - add more proof
👉 Use JavaScript to create a paragraph element using the DOM. ✅

👉 Inside this new paragraph, add some text with another sentence talking about how great our penny doubler is. ✅

👉 Append your new paragraph as a child of the section element with the id "proof-section".✅ */

let para = document.createElement('p')
para.textContent= 'Yo yo yo all you need to do is click the button and you will be rich!'
document.body.appendChild(para)
//move the paragraph to proof-section
let proofSection = document.querySelector('#proof-section')
proofSection.appendChild(para)
//create parent branch

/*
5.2 - add more tips
We have some more top tips for financial success in the JavaScript file that we'd like to add to the current tips on the page. These are in the additionalTips array. Your job now is to add them to the unordered list with the id of #tips-list on the DOM.

👉 Use a for loop to loop through the array of additional tips.

👉 For each tip...

create an li element
set the textContent of the li element to be the current tip
append the newly created element as a child of the ul */

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

// for loop to loop the array
/* for ( start; stop ; step ) {

}
*/

for (let i=0; i < additionalTips.length; i++ ) {
  additionalTips[i].textContent
}
// create li element and will add onto unordered list id #tips-list
//set textContent of li to be current tip: 
// append the new element as child of ul
ul
console.log(additionalTips[i])