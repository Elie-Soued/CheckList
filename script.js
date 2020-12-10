//Selection the HTLM Elements
const form = document.getElementById("form");

// Creating a task in the body
const newElement = () => {
  let div = document.createElement("div");
  //added today
  div.classList.add("stricked");
  div.classList.toggle("stricked");

  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  div.appendChild(t);
  const todoWrapper = document.getElementById("checklistbody");
  todoWrapper.appendChild(div);

  let edit = document.createElement("input");
  edit.type = "checkbox";
  edit.id = "done";
  edit.value = "done";

  let remove = document.createElement("input");
  remove.type = "checkbox";
  remove.id = "remove";
  remove.value = "remove";

  //added today
  div.appendChild(edit);
  div.appendChild(remove);

  //changed today
  edit.addEventListener("click", (event) => {
    const checkbox = event.target;
    const todo = checkbox.parentNode;
    todo.classList.toggle("stricked");
  });

  remove.addEventListener("click", () => {
    todoWrapper.removeChild(div);
  });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  newElement();
});
