var DonutShop = function(location, minCust, maxCust, avgDonuts, hours) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgDonuts = avgDonuts;
  this.hours = hours;

  this.numDonutsPerHour = function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgDonuts);
  };

  this.numDonutsPerDay = function() {
    var totalDonuts = 0;
    for (var i = 0; i < this.hours; i++) {
      totalDonuts += this.numDonutsPerHour();
    }
    return totalDonuts;
  };
};

var DonutMaster = function() {
  this.shops = [];

  this.addShop = function(location, minCust, maxCust, avgDonuts, hours)  {
      this.shops.push(new DonutShop(location, minCust, maxCust, avgDonuts, hours));
  };

  this.generateReport = function() {
    var report = '';
    for (var i = 0; i < this.shops.length; i++) {
      report += this.shops[i].location +' location will sell ' + this.shops[i].numDonutsPerHour() + ' donuts in an hour or ' + this.shops[i].numDonutsPerDay() + ' donuts in a day. ';
    }
    return report;
  };
};

var topPot = new DonutMaster();

var dunkinDonuts = new DonutMaster();

var krispyKreme = new DonutMaster();

dunkinDonuts.addShop('Downtown', 4, 79, 6, 12);

topPot.addShop('Downtown', 8, 43, 4.5, 12);
topPot.addShop('Capitol Hill', 4, 37, 2, 9);
topPot.addShop('South Lake Union', 9, 23, 6.33, 8);
topPot.addShop('Wedgewood', 2, 28, 1.25, 18);
topPot.addShop('Ballard', 8, 58, 3.75, 18);
