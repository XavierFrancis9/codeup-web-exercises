"use strict"

//console.log("testing.html");
// ------------ if/else && else/if statements --------
let age = 26;

if (age >= 16) {
    console.log("You are old enough to drive.");
} else if (age < 0){
    console.log("Not a valid age.")
} else {
    console.log("You are not old enough to drive.")
};


// if/else else/if example:

let dayOfTheWeek = prompt("What is the day of the week?");

if (dayOfTheWeek == "Monday") {
    alert('I hate mondays.');
} else if (dayOfTheWeek == "Tuesday") {
    alert("It's taco tuesday!");
} else {
    alert(dayOfTheWeek + " is my favorite day.");
}

if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {
    console.log("It's a weekday. Get to work!");
} else if (dayOfTheWeek ==="Saturday" || dayOfTheWeek === "Sunday") {
    console.log("It's the weekend. Go have fun!");
}