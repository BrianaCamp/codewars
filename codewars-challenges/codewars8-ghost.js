var Ghost = function() {
  var colors = ["green", "white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(colors.length * Math.random())];

};

var casper = new Ghost();
