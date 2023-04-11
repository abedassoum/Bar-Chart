"use strict";

window.addEventListener("DOMContentLoaded", startCounting);

const bar = document.querySelector(".bar");
const customerVisitArray = [];

function getNumberOfCustomers() {
  let totalCustomers = Math.floor(Math.random() * 32);
  customerVisitArray.push(totalCustomers);
  console.log(customerVisitArray);
}

function changeBarHeight() {
  getNumberOfCustomers();
  //change bar height in css from here
  let barHeightProcent =
    (customerVisitArray[customerVisitArray.length - 1] / 32) * 100;
  console.log(barHeightProcent);

  bar.style.height = barHeightProcent.toString() + "%";
}

function startCounting() {
  setInterval(changeBarHeight, 1000); // Kald countUp-funktionen hvert sekund
}
