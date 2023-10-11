document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value;
      if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.addEventListener("click", function () {
          taskItem.style.textDecoration = "line-through"; 
        });
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.addEventListener("click", function () {
          taskItem.style.textDecoration = "line-through"; 
          deleteButton.remove();
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  });
  