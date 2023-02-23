"use strict";

//For Loops Exercise
function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(x + " * " + i + " = " + (x * i))
    }
}
console.log(showMultiplicationTable(9));

for (let i = 0; i < 10; i++) {
    let random = Math.floor((Math.random() * 200) + 20);
    if(random % 2 === 0) {
        console.log(random + " is even")
    } else {
        console.log(random + " is odd")
    }
}

for (let i = 1; i <= 9; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += i.toString();
    }
    console.log(line);
}

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}



