"use strict";

//----------This is an IIFE----------------------------

(function() {
    alert("Hello, and welcome to my webpage.")
}());

// ---------------------- How to invoke(call) a function -----------

console.log("functions lecture");

alert("This is my functions lecture.");

// ------------------ Storing Function --------------------

let userDay = prompt("How's your day going?");

alert("I'm having a " + userDay + " day too!");

// --------------------- Defining a Function -------------------
function greeter(name, message) {
    return "Hello " + name + ", " + message + ".";
};

alert(greeter("Xavier", "have a great day"));

let userName = prompt("What is your name?");
let userMessage = prompt("What would you like you greeting message to be?");

alert(greeter(userName, userMessage));

//-----------Anonymous Functions -----------------
let greeter = function(name, message) {
    return "Hello " + name + ", " + message + ".";
}

//---------------Function Scoping -----------------------
let height = "3ft"; // this is a global variable
function jump() {
    let name = "Jim"; //This is a local variable.
    return name + " jumped " + height;
}

console.log(height); //this displays because height is a global variable
console.log(name); //this does not display because "name" is a local variable

//------------------
