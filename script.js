//Selection the HTLM Elements
const button = document.getElementById("button");

// Creating a task in the body
const newElement = () => {
  let div = document.createElement("div");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  div.appendChild(t);
  const todoWrapper = document.getElementById("checklistbody");
  todoWrapper.appendChild(div);

  //Creating a checkbox when the button is pressed
  const createACheckBox = () => {
    let edit = document.createElement("input");
    edit.type = "checkbox";
    edit.id = "done";
    edit.value = "done";

    let remove = document.createElement("input");
    remove.type = "checkbox";
    remove.id = "remove";
    remove.value = "remove";

    let br = document.createElement("br");
    let checklistbody = document.getElementById("checklistbody");
    checklistbody.appendChild(edit);
    checklistbody.appendChild(remove);
    checklistbody.appendChild(br);

    edit.addEventListener("click", () => {
      console.log(t);
      let doneResult = t.strike();
      document.getElementById("myInput").innerHTML = doneResult;
    });
  };

  createACheckBox();
};

button.addEventListener("click", newElement);
