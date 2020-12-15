class ToDo {
  constructor(content) {
    this._content = content;
    this._dateStamp = dateStamp;
    this._done = false;
    this._dateDone = dateDone;
  }

  markAsDone() {
    this._done = true;
    this._dateDone = new Date();
  }
}

class ToDoList {
  constructor(toDoList) {
    this._toDoList = toDoList;
    this._doneCounter = 0;
    this._toDoCounter = toDoList.length;
    this._nextTBD = 1;
    this._currentToDo = 0;
    this._lastDone = null;
  }
}

//Selection the HTLM Elements
const form = document.getElementById("form");

// Creating a task in the body
const newElement = () => {
  let div = document.createElement("div");
  //div.classList.add("stricked");
  //div.classList.toggle("stricked");

  //Add a class to div
  div.classList.add("todoitem");

  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);

  //Create a p tag enclosing inputValue and allow .stricked toggle
  let p = document.createElement("p");
  p.classList.add("stricked");
  p.classList.toggle("stricked");

  p.appendChild(t);
  div.appendChild(p);
  const todoWrapper = document.getElementById("checklistbody");
  todoWrapper.appendChild(div);

  let edit = document.createElement("div");
  edit.classList.add("edit");
  edit.classList.add("clicked");
  edit.classList.toggle("clicked");
  // edit.type = "checkbox";
  // edit.id = "done";
  // edit.value = "done";

  let remove = document.createElement("div");
  remove.classList.add("remove");
  // remove.type = "checkbox";
  // remove.id = "remove";
  // remove.value = "remove";

  div.appendChild(edit);
  div.appendChild(remove);

  edit.addEventListener("click", (e) => {
    const checkbox = e.target;
    //const todo = checkbox.parentNode;
    //todo.classList.toggle("stricked");

    //Toggle .stricked on p tag

    p.classList.toggle("stricked");
    //change background of edit button on click
    edit.classList.toggle("clicked");
  });

  remove.addEventListener("click", () => {
    todoWrapper.removeChild(div);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newElement();
});
