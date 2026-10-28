// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button inside the list item
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    
    // Add delete functionality
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append elements
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" key to add task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});