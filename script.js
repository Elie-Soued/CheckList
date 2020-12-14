//Selection the HTLM Elements
const form = document.getElementById("form");

//Creating a task in the body
const newElement = () => {
  let div = document.createElement("div");
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

  let remove = document.createElement("div");
  remove.classList.add("remove");

  div.appendChild(edit);
  div.appendChild(remove);

  edit.addEventListener("click", (e) => {
    const checkbox = e.target;
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
