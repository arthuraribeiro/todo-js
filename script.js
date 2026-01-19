const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const tasks = [];

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  tasks.push(taskText);
  console.log(tasks);

  taskInput.value = "";
});