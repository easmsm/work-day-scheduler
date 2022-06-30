// Display Current Day at the Top of the Page

currentDay = moment().format('dddd'); {
  console.log(currentDay);
}

document.getElementById("currentDay").innerHTML = currentDay;

//End Current Day 

//Saving Tasks (from Taskinator activity)

var tasks = {};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//End Saving Tasks

//Auditing tasks from Taskinator

var auditTask = function(taskEl) {
  // get date from task element
  var date = $(taskEl)
    .find("span")
    .text()
    .trim();

  // convert to moment object at 5:00pm
  var time = moment(hour, "hh");

  // remove any old classes from element
  $(taskEl).removeClass();

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("future");
  } else if (Math.abs(moment().diff(time, "past")) <= 2) {
    $(taskEl).addClass("past");
  } else (moment().currentHour('hh');) {
    $(taskEl).addClass("present");
  }
};


//graveyard of ideas below

//moment().hour(Number);

/*var time = document.getElementById("nine");
var time = document.getElementById("ten");
var time = document.getElementById("eleven");
var time = document.getElementById("twelve");
var time = document.getElementById("one");
var time = document.getElementById("two");
var time = document.getElementById("three");
var time = document.getElementById("four");
var time = document.getElementById("five");*/



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