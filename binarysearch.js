(function() {
  Array.prototype.binarySearch = function(elementToSearch) {
    var high, i, low;

    low = 0;
    high = this.length - 1;
    while (low <= high) {
      i = Math.floor((low + high) / 2);
      if (this[i] < elementToSearch) {
        low = i + 1;
        continue;
      } else if (this[i] > elementToSearch) {
        high = i - 1;
        continue;
      }
      return this[i];
    }
    return -1;
  };

}).call(this);
