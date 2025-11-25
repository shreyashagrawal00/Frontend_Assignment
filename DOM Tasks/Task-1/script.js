const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function showTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <span>${task}</span>
          <div>
            <button class="editBtn" onclick="editTask(${index})">Edit</button>
            <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
          </div>
        `;

        taskList.appendChild(li);
      });
    }

    addBtn.addEventListener("click", () => {
      const task = input.value.trim();
      if (task === "") return alert("Please enter a task!");

      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      input.value = "";
      showTasks();
    });

    window.editTask = function (index) {
      const newTask = prompt("Edit your task:", tasks[index]);
      if (newTask === null || newTask.trim() === "") return;
      tasks[index] = newTask.trim();
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTasks();
    };

    window.deleteTask = function (index) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTasks();
    };

    showTasks();