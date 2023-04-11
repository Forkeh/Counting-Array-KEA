"use strict";

window.addEventListener("load", appStart);

const array = [];
let counter = 0;

function appStart() {
  setInterval(addToArray, 1000);
}

function counterUp() {
  counter++;
}

function addToArray() {
  checkArrayLength();
  array.unshift(counter);
  counterUp();
  console.log(array);
}

function checkArrayLength() {
  if (array.length >= 9) {
    removeFromArray();
  }
}

function removeFromArray() {
  array.pop();
}
