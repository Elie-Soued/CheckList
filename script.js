class ToDo {
  constructor(content) {
    this._done = false;
    this._content = document.createElement("div");
    this._content.classList.add("todoitem");
    let inputValue = document.getElementById("myInput").innerText;
    let t = document.createTextNode(inputValue);
    let p = document.createElement("p");
    p.classList.add("stricked");
    p.classList.toggle("stricked");
    p.appendChild(t);
    this._content.appendChild(p);

    let edit = document.createElement("div");
    edit.classList.add("edit");
    edit.classList.add("clicked");
    edit.classList.toggle("clicked");
    this._content.appendChild(edit);
    edit.addEventListener("click", (e) => {
      const checkbox = e.target;
      p.classList.toggle("stricked");
      edit.classList.toggle("clicked");
      this._done = true;
    });

    let remove = document.createElement("div");
    remove.classList.add("remove");
    this._content.appendChild(remove);
    remove.addEventListener("click", () => {
      todoWrapper.removeChild(this._content);
    });
  }
}
class ToDoList {
  constructor() {
    this._allToDos = [];
    this._doneCounter = 0;
    this._toDoCounter = this._allToDos.length;
  }

  add(todo) {
    this._toDoCounter++;

    const todoWrapper = document.getElementById("checklistbody");
    todoWrapper.appendChild(todo._content);
  }

  finishCurrentTask(indexOfTodo) {
    this._allToDos[indexOfTodo].markAsRead();
    this._doneCounter++;
    this._toDoCounter--;
  }
}

//Selection the HTLM Elements
const form = document.getElementById("form");

const todoWrapper = document.getElementById("checklistbody");

//The instance from which to call the class methods
const myChecklist = new ToDoList(todoWrapper);

//add event

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = new ToDo("pizza");
  myChecklist.add(task);
  console.log(task);
});
