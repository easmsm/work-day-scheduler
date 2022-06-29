// Display Current Day at the Top of the Page

currentDay = moment().format('dddd, MMMM Do YYYY'); {
    console.log(currentDay);
}

document.getElementById("currentDay").innerHTML = currentDay;

// from the Taskinator code

var tasks = {};

var tasks = {};

var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
  var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);

  // check due date
  auditTask(taskLi);

  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        nineAm: [],
        tenAm: [],
        elevenAm: [],
        twelvePm: [],
        onePm: [],
        twoPm: [],
        threePm: [],
        fourPm: [],
        fivePm: [],
      };
    }
    // loop over object properties
    $.each(tasks, function(list, arr) {
        // then loop over sub-array
        arr.forEach(function(task) {
          createTask(task.text, task.date, list);
        });
      });
    };

    //save tasks locally
    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      };