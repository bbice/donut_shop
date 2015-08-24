var DonutShop = function(location, minCust, maxCust, avgDonuts, hours) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgDonuts = avgDonuts;
  this.hours = hours;

  //method to calculate number of donuts in one hour
  this.numDonutsPerHour = function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgDonuts);
  };

  //method to iterate over numDonutsPerHour once per hour that 'location' is open
  this.numDonutsPerDay = function() {
    var totalDonuts = 0;
    for (var i = 0; i < this.hours; i++) {
      totalDonuts += this.numDonutsPerHour();
    }
    return totalDonuts;
  };

  //method to show a rough estimate of how many donuts get sold per hour that the shop is open
  this.avgDonutsPerHour = function() {
    return Math.floor(this.numDonutsPerDay() / this.hours);
  };
};

var DonutMaster = function() {
  this.shops = [];

  //method to add DonutShop objects to this.shops array for easy access
  this.addShop = function(location, minCust, maxCust, avgDonuts, hours)  {
      this.shops.push(new DonutShop(location, minCust, maxCust, avgDonuts, hours));
  };

  //method to grab 'location', numDonutsPerHour and numDonutsPerDay numbers for all shops
  this.generateReport = function() {
    var report = '';
    for (var i = 0; i < this.shops.length; i++) {
      report += this.shops[i].location +' location will sell about ' + this.shops[i].avgDonutsPerHour() + ' donuts in an hour or ' + this.shops[i].numDonutsPerDay() + ' donuts in a day. ';
    }
    return report;
  };

  this.shopReport = function(location) {
    var report = '';
    for (var i = 0; i < shops.length; i++) {
      if (toLowerCase(location) == [i].location) {
        report += this.shops[i].location +' location will sell about ' + this.shops[i].avgDonutsPerHour() + ' donuts in an hour or ' + this.shops[i].numDonutsPerDay() + ' donuts in a day. ';
      } else {
        report = 'That\'s not a location!';
      }
      return report;
  }
 };
};

//creating new DonutMaster object
var topPot = new DonutMaster();

//adding new Shops to topPot.shops
topPot.addShop('Downtown', 8, 43, 4.5, 12);
topPot.addShop('Capitol Hill', 4, 37, 2, 9);
topPot.addShop('South Lake Union', 9, 23, 6.33, 8);
topPot.addShop('Wedgewood', 2, 28, 1.25, 18);
topPot.addShop('Ballard', 8, 58, 3.75, 18);
topPot.addShop('queen anne', 7, 34, 2, 9);


//jQuery function to dynamically display a table
$(function() {
  $('.myButton').one('click', function() {
    $('#tableDiv').fadeIn('fast');
    for (var i = 0; i < topPot.shops.length; i++) {
      $('#myTable').append('<tr class="container">' + '<td class="shopLocation">' + topPot.shops[i].location + '</td>' + '<td class="tableNumbers">' + topPot.shops[i].avgDonutsPerHour() + '</td>' + '<td class="tableNumbers">' + topPot.shops[i].numDonutsPerDay() + '</td>' + '</tr>');
    }
    //showing and hiding table data
    $('.tableNumbers').hide();
    $('.shopLocation').each(function() {
      $(this).on('click', function() {
        $('.tableNumbers').slideToggle(800);
      });
    });
  });
});
