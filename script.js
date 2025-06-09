document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //   This function is to add task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  }

  //  This will create a new li element
  const li = document.createElement("li");
  li.textContent = "taskText";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  removeBtn.className = "remove-btn";

  removeBtn.onclick = () => {
    taskList.removeChild(li);

    taskInput.value = "";
  };

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "enter") {
      addTask();
    }
  });
  addTask();
});
