// We need to do 3 Things today

// 1-We need to store the value of the input in a variable.


// Eventeventlistener = event, callbackfunction

//2-We need to listen to click of the add button (event)
// 3- We need to translate this variable into a string (callback function)
//4- This string has to be appended to a div            (callback function)
// 5- The div has to be appended to a checklistbody     (callback function)


function addNameToList(name) {
  // Selects all html elements with a class of names
  const namesDiv = document.querySelector(".names");
  // Create an html element
  const nameNode = document.createElement("div");
  // Inserting in the created div some html / text
  nameNode.innerHTML = `${name} was here`;
  namesDiv.appendChild(nameNode);
}

addNameToList("Bob");
addNameToList("John");
addNameToList("Sarah");
