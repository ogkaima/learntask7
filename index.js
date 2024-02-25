// Function to add a new task
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  if (task !== "") {
      var li = document.createElement("li");
      
      var taskText = document.createElement("span");
      taskText.textContent = task;
      li.appendChild(taskText);
      
      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit";
      editButton.onclick = function() {
          var updatedTask = prompt("Update task:", taskText.textContent);
          if (updatedTask !== null) {
              taskText.textContent = updatedTask;
          }
      };
      
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";
      deleteButton.onclick = function() {
          li.remove();
      };
      
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      
      document.getElementById("taskList").appendChild(li);
      input.value = "";
  } else {
      alert("Please enter a task!");
  }
}
