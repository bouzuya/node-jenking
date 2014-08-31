var TimeBomb = function(options) {
  this.bomb = options.bomb;
  this.timeout = options.timeout;
  this.timerId = null;
};

TimeBomb.prototype.reset = function() {
  this.stop();
  this.start();
};

TimeBomb.prototype.start = function() {
  this.timerId = setTimeout(function() {
    this.timerId = null;
    this.bomb();
  }.bind(this), this.timeout);
};

TimeBomb.prototype.stop = function() {
  if (this.timerId) {
    clearTimeout(this.timerId);
    this.timerId = null;
  }
};

module.exports.TimeBomb = TimeBomb;
