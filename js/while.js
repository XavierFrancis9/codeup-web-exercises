"use strict";

let i = 2;

while(i <= 65536) {
    console.log(i);
        i *= 2;
}

let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let customerPurchase = Math.floor(Math.random() * 5) + 1;
    if(customerPurchase <= allCones) {
        allCones -= customerPurchase;
        console.log(customerPurchase + " cones sold");
    } else {
        console.log("Cannot sell you " + customerPurchase + " cones, I only have " + allCones + " left");
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");