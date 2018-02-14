'use strict';

//Cookie project Version 0.0

//Array for days of the week
var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
var hoursLong = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm ', '8 pm'];

var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgSale: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  fillCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      // console.log(this.custPerHour[i]);
    }
  },
  fillCookiesPerHour: function() {
    for (var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgSale));
      // console.log(this.cookiesPerHour[j]);
    }
  },
  calcTotalCookies: function() {
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      this.totalCookies += this.cookiesPerHour[k];
      // console.log(this.totalCookies);
    }
  },
  render: function() {
    var ulEl = document.getElementById('Alki');
    for(var l = 0; l < hoursLong.length; l++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursLong[l] + ': ' + this.cookiesPerHour[l] + ' cookies';
      ulEl.appendChild(liEl);
    } var li2El = document.createElement('li');
    li2El.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(li2El);
  },
};
alki.fillCustPerHour();
alki.fillCookiesPerHour();
alki.calcTotalCookies();
alki.render();


var capHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgSale: 2.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  fillCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      // console.log(this.custPerHour[i]);
    }
  },
  fillCookiesPerHour: function() {
    for (var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgSale));
      // console.log(this.cookiesPerHour[j]);
    }
  },
  calcTotalCookies: function() {
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      this.totalCookies += this.cookiesPerHour[k];
      // console.log(this.totalCookies);
    }
  },
  render: function() {
    var ulEl = document.getElementById('Cap Hill');
    for(var l = 0; l < hoursLong.length; l++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursLong[l] + ': ' + this.cookiesPerHour[l] + ' cookies';
      ulEl.appendChild(liEl);
    } var li2El = document.createElement('li');
    li2El.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(li2El);
  },
};
capHill.fillCustPerHour();
capHill.fillCookiesPerHour();
capHill.calcTotalCookies();
capHill.render();

var SeaTac = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgSale: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  fillCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      // console.log(this.custPerHour[i]);
    }
  },
  fillCookiesPerHour: function() {
    for (var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgSale));
      // console.log(this.cookiesPerHour[j]);
    }
  },
  calcTotalCookies: function() {
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      this.totalCookies += this.cookiesPerHour[k];
      // console.log(this.totalCookies);
    }
  },
  render: function() {
    var ulEl = document.getElementById('SeaTac');
    for(var l = 0; l < hoursLong.length; l++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursLong[l] + ': ' + this.cookiesPerHour[l] + ' cookies';
      ulEl.appendChild(liEl);
    } var li2El = document.createElement('li');
    li2El.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(li2El);
  },
};
SeaTac.fillCustPerHour();
SeaTac.fillCookiesPerHour();
SeaTac.calcTotalCookies();
SeaTac.render();


var SeaCen = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgSale: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  fillCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      // console.log(this.custPerHour[i]);
    }
  },
  fillCookiesPerHour: function() {
    for (var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgSale));
      // console.log(this.cookiesPerHour[j]);
    }
  },
  calcTotalCookies: function() {
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      this.totalCookies += this.cookiesPerHour[k];
      // console.log(this.totalCookies);
    }
  },
  render: function() {
    var ulEl = document.getElementById('Sea Center');
    for(var l = 0; l < hoursLong.length; l++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursLong[l] + ': ' + this.cookiesPerHour[l] + ' cookies';
      ulEl.appendChild(liEl);
    } var li2El = document.createElement('li');
    li2El.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(li2El);
  },
};
SeaCen.fillCustPerHour();
SeaCen.fillCookiesPerHour();
SeaCen.calcTotalCookies();
SeaCen.render();


var pike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgSale: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  fillCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      // console.log(this.custPerHour[i]);
    }
  },
  fillCookiesPerHour: function() {
    for (var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgSale));
      // console.log(this.cookiesPerHour[j]);
    }
  },
  calcTotalCookies: function() {
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      this.totalCookies += this.cookiesPerHour[k];
      // console.log(this.totalCookies);
    }
  },
  render: function() {
    var ulEl = document.getElementById('Pike');
    for(var l = 0; l < hoursLong.length; l++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursLong[l] + ': ' + this.cookiesPerHour[l] + ' cookies';
      ulEl.appendChild(liEl);
    } var li2El = document.createElement('li');
    li2El.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(li2El);
  },
};
pike.fillCustPerHour();
pike.fillCookiesPerHour();
pike.calcTotalCookies();
pike.render();