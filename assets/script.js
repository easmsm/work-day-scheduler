// Display Current Day at the Top of the Page

currentDay = moment().format('dddd'); {
    console.log(currentDay);
}

document.getElementById("currentDay").innerHTML = currentDay;

