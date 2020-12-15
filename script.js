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
    this._allToDos = alltoDos;
    this._doneCounter = 0;
    this._toDoCounter = alltoDos.length;
    this._nextTBD = 1;
    this._currentToDo = 0;
    this._lastDone = null;
  }

  add(todo) {
    this._toDoList.push(todo);
    this._toDoCounter++;
  }

  finishCurrentTask(indexOfTodo) {
    this._allToDos[indexOfTodo].markAsRead();
    this._doneCounter++;
    this._toDoCounter--;
    this._nextTBD = this._allToDos[indexOfTodo + 2];
    this._currentToDo = this._allToDos[indexOfTodo + 1];
    this._lastDone = this._allToDos[indexOfTodo];
  }

  clear() {}
}
// Using Methods instead of EventListeners

//Selection the HTLM Elements
const form = document.getElementById("form");

const newElement = () => {
  let div = document.createElement("div");
  div.classList.add("todoitem");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  let p = document.createElement("p");
  p.classList.add("stricked");
  p.classList.toggle("stricked");
  p.appendChild(t);
  //todoitem
  div.appendChild(p);
  //todoList
  const todoWrapper = document.getElementById("checklistbody");
  todoWrapper.appendChild(div);

  let edit = document.createElement("div");
  edit.classList.add("edit");
  edit.classList.add("clicked");
  edit.classList.toggle("clicked");

  let remove = document.createElement("div");
  remove.classList.add("remove");
  div.appendChild(edit);
  div.appendChild(remove);

  //Finish this current Task()
  edit.addEventListener("click", (e) => {
    const checkbox = e.target;

    p.classList.toggle("stricked");
    edit.classList.toggle("clicked");
  });

  //Remove()
  remove.addEventListener("click", () => {
    todoWrapper.removeChild(div);
  });
};

// Add()
form.addEventListener("submit", (e) => {
  e.preventDefault();
  newElement();
});
