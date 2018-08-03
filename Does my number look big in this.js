function narcissistic( value ) {
    // Code me
    var valueString = value.toString();
    var length = valueString.length;
    var total = 0;
    for (i=0; i<length; i++) {
      var convert = Number(valueString[i]);
      var temp = Math.pow(convert, length);
      total = total + temp;
    }
    if (total == value) {
      return true;
    } else {
      return false;
      }
  }