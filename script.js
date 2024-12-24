// script.js

let taskCount = 0; // Counter to track the number of tasks

document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    taskCount++; // Increment the task counter
    const taskList = document.getElementById("taskList");

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span><strong>${taskCount}.</strong> ${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    taskItem.querySelector(".delete-btn").addEventListener("click", function () {
        taskList.removeChild(taskItem);
        updateTaskNumbers(); // Update the numbering when a task is deleted
    });

    // Append the task to the list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = "";
});

// Function to update task numbers after deletion
function updateTaskNumbers() {
    const tasks = document.querySelectorAll(".task-item");
    taskCount = 0; // Reset task counter
    tasks.forEach((task, index) => {
        taskCount = index + 1; // Update the task count
        const taskNumber = task.querySelector("strong");
        taskNumber.textContent = `${taskCount}.`; // Update the displayed number
    });
}