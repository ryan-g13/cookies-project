'use strict';

//Cookie project Version 0.0

//Array for days of the week
var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
var hoursLong = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm '];
var allBranches = [];
var storeTable = document.getElementById('statTable');
render2_0();

//Constructor function for Cookies.
function StoreBranch(id, name, minCustomer, maxCustomer, avgSale) {
  this.id = id;
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allBranches.push(this);
  this.renderHorizontal();
}
StoreBranch.prototype.fillCustPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    //console.log(this.custPerHour[i]);
  }
};

StoreBranch.prototype.fillCookiesPerHour = function() {
  this.fillCustPerHour();
  for (var i = 0; i < this.custPerHour.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
    // console.log(this.cookiesPerHour[i]);
    this.totalCookies += this.cookiesPerHour[i];
  }
};

StoreBranch.prototype.renderHorizontal = function() {
  this.fillCookiesPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hoursLong.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};

//end of constructor
//Creation of instances of the constructor
new StoreBranch('Alki','Alki', 2, 16, 4.6);
new StoreBranch('Cap Hill', 'Capitol Hill', 20, 38, 2.3);
new StoreBranch('SeaTac','SeaTac Airport', 3, 24, 1.2);
new StoreBranch('Sea Center', 'Seattle Center', 11, 38, 3.7);
new StoreBranch('Pike', '1st and Pike', 23, 65, 6.3);

function render2_0() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursLong.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursLong[i];
    trEl.appendChild(thEl);
  } thEl = document.createElement('th');
  thEl.textContent = 'Total Daily Cookies';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}