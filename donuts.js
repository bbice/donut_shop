var Donut = function(location, minCust, maxCust, avgDonuts, hours) {
  this.location = location,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgDonuts = avgDonuts,
  this.hours = hours,

  this.numDonutsPerHour = function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgDonuts);
  },

  this.numDonutsPerDay = function() {
    var totalDonuts = 0;
    for (var i = 0; i < this.hours; i++) {
      totalDonuts += this.numDonutsPerHour();
    }
    return totalDonuts;
  };
};

var downtown = new Donut('Downtown', 8, 43, 4.5, 12),
    capitolHill = new Donut('Capitol Hill', 4, 37, 2, 9),
    southLakeUnion = new Donut('South Lake Union', 9, 23, 6.33, 8),
    wedgewood = new Donut('Wedgewood', 2, 28, 1.25, 18),
    ballard = new Donut('Ballard', 8, 58, 3.75, 18);

console.log(downtown.numDonutsPerDay());
console.log(capitolHill.numDonutsPerDay());
console.log(southLakeUnion.numDonutsPerDay())
console.log(wedgewood.numDonutsPerDay())
console.log(ballard.numDonutsPerDay())

// Was having a terrible time figuring out how to run the for loop. Ended up finding some code on GitHub that helped me out, from a previous CodeFellows student. The function is still set up in my own fashion, tho.
