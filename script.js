const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const tasks = [];

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  tasks.push(taskText);
  renderTasks();

  taskInput.value = "";
});

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    li.appendChild(deleteBtn);
  });
}