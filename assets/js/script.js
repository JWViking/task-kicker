//These create a variable that connects to specific parts of the html (the button and the ul)
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//This is  function that creates a new list item, gives it style, creates text for the new li,
//then attaches it to the parent tasksToDoEl, which is the ul element.
var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}

//this creates an event "click" that calls the function above.
buttonEl.addEventListener("click", createTaskHandler);
