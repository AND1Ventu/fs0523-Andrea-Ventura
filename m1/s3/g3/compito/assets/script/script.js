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
          taskItem.style.textDecoration = "line-through"; // Attraversa il testo quando si fa clic
        });
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.addEventListener("click", function () {
          taskItem.style.textDecoration = "line-through"; // Attraversa il testo invece di eliminarlo
          deleteButton.remove(); // Rimuovi il pulsante "Elimina"
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  });
  