class ToDo {
  constructor(content) {
    this._content = content;
    this._done = false;
    // this._tag = tag;
  }

  markAsDone() {
    this._done = true;
  }
}

class ToDoList {
  constructor(toDoList) {
    this._allToDos = [];
    this._doneCounter = 0;
    this._toDoCounter = this._allToDos.length;
  }

  add(todo) {
    this._allToDos.push(todo);
    this._toDoCounter++;

    let div = document.createElement("div");
    div.classList.add("todoitem");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    let p = document.createElement("p");
    p.classList.add("stricked");
    p.classList.toggle("stricked");
    p.appendChild(t);
    div.appendChild(p);
    const todoWrapper = document.getElementById("checklistbody");
    todoWrapper.appendChild(div);
  }

  finishCurrentTask(indexOfTodo) {
    this._allToDos[indexOfTodo].markAsRead();
    this._doneCounter++;
    this._toDoCounter--;
  }

  clear() {}
}
// Using Methods instead of EventListeners

//Selection the HTLM Elements
const form = document.getElementById("form");

const todoWrapper = document.getElementById("checklistbody");

//The instance from which to call the class methods
const myChecklist = new ToDoList(todoWrapper);

console.log(myChecklist);

const washing = new ToDo("I am washing");
const cleaning = new ToDo("I am cleaing");
const myTodos = [washing, cleaning];
const myChecklist2 = new ToDoList(myTodos);

myChecklist2.add(washing);

let div = document.createElement("div");
div.classList.add("todoitem");
let inputValue = document.getElementById("myInput").value;
let t = document.createTextNode(inputValue);
let p = document.createElement("p");
p.classList.add("stricked");
p.classList.toggle("stricked");
p.appendChild(t);
div.appendChild(p);

console.log(div.innerText);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = new ToDo(div);
  myChecklist.add(task);
  console.log(task);

  // todoWrapper.appendChild(task);
});

/////old ways
// const newElement = () => {
//   let div = document.createElement("div");
//   div.classList.add("todoitem");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   let p = document.createElement("p");
//   p.classList.add("stricked");
//   p.classList.toggle("stricked");
//   p.appendChild(t);
//   //todoitem
//   div.appendChild(p);
//   //todoList
//   const todoWrapper = document.getElementById("checklistbody");
//   todoWrapper.appendChild(div);

//   let edit = document.createElement("div");
//   edit.classList.add("edit");
//   edit.classList.add("clicked");
//   edit.classList.toggle("clicked");

//   let remove = document.createElement("div");
//   remove.classList.add("remove");
//   div.appendChild(edit);
//   div.appendChild(remove);

//   //Finish this current Task()
//   edit.addEventListener("click", (e) => {
//     const checkbox = e.target;

//     p.classList.toggle("stricked");
//     edit.classList.toggle("clicked");
//   });

//   //Remove()
//   remove.addEventListener("click", () => {
//     todoWrapper.removeChild(div);
//   });
// };

// // Add()
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const todo = new ToDo();
//   todo = div;
// });

// newElement();
