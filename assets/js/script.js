//These create a variable that connects to specific parts of the html (the button and the ul)
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

//This is  function that creates a new list item, gives it style, creates text for the new li,
//then attaches it to the parent tasksToDoEl, which is the ul element.
var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
