// Display Current Day at the Top of the Page

currentDay = moment().format('dddd, MMMM Do YYYY'); {
    console.log(currentDay);
}

document.getElementById("currentDay").innerHTML = currentDay;

/*var myDiv = document.getElementById("btn");
var button = document.createElement("BUTTON");
myDiv.appendChild(button);*/

/*let btn = document.createElement("button");
btn.innerHTML = 'Save';
document.body.appendChild(btn);

//save tasks locally
  var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  };

/* save button was clicked
$("#task-form-modal .btn-save").click(function() {
  // get form values
  var taskText = $("#modalTaskDescription").val();
  var taskDate = $("#modalDueDate").val();

  if (taskText && taskDate) {
    createTask(taskText, taskDate, "toDo");

    // close modal
    $("#task-form-modal").modal("hide");

    // save in tasks array
    tasks.toDo.push({
      text: taskText,
      date: taskDate
    });

    saveTasks();
  }
}); */