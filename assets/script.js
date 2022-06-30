// Display Current Day at the Top of the Page

currentDay = moment().format('dddd'); {
  console.log(currentDay);
}

document.getElementById("currentDay").innerHTML = currentDay;

//End Current Day 

//Saving Tasks (from Taskinator activity)

/*var tasks = {};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}; */

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

  /* remove any old classes from element
  $(taskEl).removeClass(); */

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("future");
  } else if (Math.abs(moment().diff(time, "past")) <= 2) {
    $(taskEl).addClass("past");
  } else (moment().moment.hour('hh')); {
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


//save tasks locally
  var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  };

$(".saveBtnNine").click(function() {
  var taskText = $("#nine").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnTen").click(function() {
  var taskText = $("#ten").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnEleven").click(function() {
  var taskText = $("#eleven").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnTwelve").click(function() {
  var taskText = $("#twelve").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnOne").click(function() {
  var taskText = $("#one").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnTwo").click(function() {
  var taskText = $("#two").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnThree").click(function() {
  var taskText = $("#three").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnFour").click(function() {
  var taskText = $("#four").val();
  tasks.toDo.push({
    text: taskText,
  });

  $(".saveBtnFive").click(function() {
  var taskText = $("#five").val();
  tasks.toDo.push({
    text: taskText,
  });

    saveTasks();
  }); 