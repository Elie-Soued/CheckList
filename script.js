//Selection the HTLM Elements
const button = document.getElementById("button");

const ourButton = document.getElementById("button2");

const form = document.getElementById("form");

// Defining the call back function
function newElement() {
  //creating a li element
  let li = document.createElement("li");
  //storing the value of my input in the variable inputValue
  let inputValue = document.getElementById("myInput").value;
  //creating a textNode with the inputValue  and storing it in a t
  let t = document.createTextNode(inputValue);
  //appending t to the li
  li.appendChild(t);
  //selecting the checklist-wrapper
  const todoWrapper = document.getElementById("checklistbody");
  //appending li to the wrapper
  todoWrapper.appendChild(li);

  }

//Defining the EventListener
button.addEventListener("click",newElement);


form.addEventListener("submit",function(e){
   e.preventDefault();
   newElement();
});
