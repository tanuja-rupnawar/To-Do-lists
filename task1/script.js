// Function to retrieve tasks from local storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }
  
  // Function to display tasks
  function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  
    const tasks = getTasks();
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${task} 
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
      taskList.appendChild(li);
    });
  }
  
  // Function to add a new task
  function addTask(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const tasks = getTasks();
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      displayTasks();
    }
  }
  
  // Function to edit a task
  function editTask(index) {
    const tasks = getTasks();
    const updatedTask = prompt('Edit task:', tasks[index]);
  
    if (updatedTask !== null) {
      tasks[index] = updatedTask.trim();
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    }
  }
  
  // Function to delete a task
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
  
  // Event listeners
  document.getElementById('task-form').addEventListener('submit', addTask);
  
  // Display tasks on initial load
  displayTasks();
  