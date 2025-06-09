document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-button");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = []; // Array to hold current tasks

  // Load tasks from Local Storage and populate the DOM
  function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (!savedTasks) return; // No saved tasks

    tasks = JSON.parse(savedTasks);
    tasks.forEach((taskText) => {
      createTaskElement(taskText);
    });
  }

  // Save the current tasks array to Local Storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create a task <li> with remove button and add to the task list
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = () => {
      taskList.removeChild(li);
      // Remove task from tasks array and save
      tasks = tasks.filter((task) => task !== taskText);
      saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // Add a new task from input field
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Optional: Prevent duplicate tasks
    if (tasks.includes(taskText)) {
      alert("Task already exists.");
      return;
    }

    tasks.push(taskText);
    createTaskElement(taskText);
    saveTasks();

    taskInput.value = "";
  }

  // Event listeners for adding tasks
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks when page loads
  loadTasks();
});
