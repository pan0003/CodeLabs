        // This is the function to load tasks from local storage
        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskList = document.getElementById('taskList');

            taskList.innerHTML = '';

            tasks.forEach((task, index) => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.completed;
                checkbox.addEventListener('change', () => updateTaskStatus(index));

                const taskText = document.createElement('span');
                taskText.textContent = task.text;

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => deleteTask(index));

                taskItem.appendChild(checkbox);
                taskItem.appendChild(taskText);
                taskItem.appendChild(deleteBtn);

                taskList.appendChild(taskItem);
            });
        }

        // This is the function to add a new task
        function addTask() {
            const taskText = document.getElementById('newTask').value;
            if (taskText.trim() === '') return;

            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push({ text: taskText, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));

            document.getElementById('newTask').value = '';
            loadTasks();
        }

        // This is the function to update task status
        function updateTaskStatus(index) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            loadTasks();
        }

        // This is the function to delete a task
        function deleteTask(index) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            loadTasks();
        }

        // Here, this is to load tasks when the page loads
        loadTasks();