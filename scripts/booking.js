/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerday = 0;
var daysSelected = 0;
var calculatedCost = document.getElementById("calculated-cost");
var mon = document.getElementById("monday");
var tue = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thu = document.getElementById("thursday");
var fri = document.getElementById("friday");
var halfDay = document.getElementById("half");
var fullDay = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
mon.addEventListener('click', function() {
    mon.classList.add('clicked');

    calculation();
});

tue.addEventListener('click', function() {
    tue.classList.add('clicked');

    calculation();
});

wed.addEventListener('click', function() {
    wed.classList.add('clicked');

    calculation();
});

thu.addEventListener('click', function() {
    thu.classList.add('clicked');

    calculation();
});

fri.addEventListener('click', function() {
    fri.classList.add('clicked');

    calculation();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById('clear-button').addEventListener('click', clearDays);
 
function clearDays() {
    document.querySelectorAll('.day-selector li.clicked').forEach(function (day) {
        day.classList.remove('clicked');
    });
    calculation();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener('click', function() {
    costPerday = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');

    calculation();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', function() {
    costPerday = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');

    calculation();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculation() {
    var clickedLength = document.getElementsByClassName('clicked');
    daysSelected = clickedLength.length -1;
    calculatedCost.innerHTML = costPerday * daysSelected;
}

