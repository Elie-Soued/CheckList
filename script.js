//Selection the HTLM Elements
const form = document.getElementById("form");

// Creating a task in the body
const newElement = () => {
  let div = document.createElement("div");
  div.classList.add("stricked");
  div.classList.toggle("stricked");

  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  div.appendChild(t);
  const todoWrapper = document.getElementById("checklistbody");
  todoWrapper.appendChild(div);

  let edit = document.createElement("div");
  edit.classList.add("edit");
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
    const todo = checkbox.parentNode;
    todo.classList.toggle("stricked");
  });

  remove.addEventListener("click", () => {
    todoWrapper.removeChild(div);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newElement();
});
