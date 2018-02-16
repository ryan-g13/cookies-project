'use strict';

//Cookie project Version 1.0 - includes table, daily totals, totalTotal and new row functionality

//Array for days of the week
var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
var hoursLong = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm '];
var allBranches = [];
var columnTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var storeTable = document.getElementById('statTable');
//new global variables targeting html IDs
var branchForm = document.getElementById('branchEditor');


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
  this.fillCustPerHour(); //moved both methods here to ensure they get called on object creation
  this.fillCookiesPerHour();
}

StoreBranch.prototype.fillCustPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
  }
};

StoreBranch.prototype.fillCookiesPerHour = function() {
  for (var i = 0; i < this.custPerHour.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
    this.totalCookies += this.cookiesPerHour[i];
    columnTotals[i] += this.cookiesPerHour[i];
  }
};

//Row function prints rows of data from form field.
StoreBranch.prototype.renderHorizontal = function() {
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
//Creation of instances of the constructor - Possible refactor into an array or object or for loop?
new StoreBranch('Alki','Alki', 2, 16, 4.6);
new StoreBranch('Cap Hill', 'Capitol Hill', 20, 38, 2.3);
new StoreBranch('SeaTac','SeaTac Airport', 3, 24, 1.2);
new StoreBranch('Sea Center', 'Seattle Center', 11, 38, 3.7);
new StoreBranch('Pike', '1st and Pike', 23, 65, 6.3);

//Runs once - will be using similar function for the footer - need to whiteboard ideas.
function headerRender() {
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

//Footer rendering function includes call for totalTotal function
function footerRender() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Column Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursLong.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = columnTotals[i];
    trEl.appendChild(thEl);
  } thEl = document.createElement('th');
  thEl.textContent = totalTotal();
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

//new totalTotal function
var headerTotal = 0;
function totalTotal() {
  for(var i =0; i < allBranches.length; i++) {
    headerTotal += allBranches[i].totalCookies;
  }
  return headerTotal;
}

//Create method fullRender that clears values and ensures totalTotal is on the bottom.
function fullRender() {
  storeTable.innerHTML = '';
  headerRender();
  for(var i = 0; i < allBranches.length; i++) {
    allBranches[i].renderHorizontal();
  }
  footerRender();
}

//Wednesday code: Event listeners and forms
function updateBranch(event) {
  event.preventDefault(); //prevents page reload on submit

  //Validation checks for input
  if (!event.target.id.value || !event.target.branchName.value) {
    return alert('One or more of the entry fields is blank. Please fill in the blanks.');
  }

  for (var i = 0; i < allBranches.length; i++) {
    if (event.target.branchName.value === allBranches[i].name) {
      //Object array at i reseting values and then setting values from form
      allBranches[i].totalCookies = 0;
      allBranches[i].custPerHour = [];
      allBranches[i].cookiesPerHour = [];

      allBranches[i].minCustomer = parseInt(branchForm.mini.value);
      allBranches[i].maxCustomer = parseInt(branchForm.maxi.value);
      allBranches[i].avgSale = parseFloat(branchForm.avgSales.value);

      allBranches[i].fillCustPerHour();
      allBranches[i].fillCookiesPerHour();

      event.target.reset();
      fullRender();
      return;
    }
  }

  //use new version of the constructor.
  new StoreBranch(branchForm.id.value, branchForm.branchName.value, parseInt(branchForm.mini.value), parseInt(branchForm.maxi.value), parseFloat(branchForm.avgSales.value));

  event.target.reset();
  fullRender(); //call page render on click
}

//Event Listener
branchForm.addEventListener('submit', updateBranch);

fullRender(); //draws origin iteration of 5 branches