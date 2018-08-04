function nextHappyYear(year){
  //your code here
  var complete = false;
  while (complete == false) {
    var year = year + 1;
    var yearString = year.toString();
    var tempArray = [];
    var good = 0;
    for (i=0; i<yearString.length; i++) {
      if (tempArray.includes(yearString[i]) == false) {
        tempArray.push(yearString[i]); 
      }
    }
    if (tempArray.length == 4) {
      complete = true;
      }
  }
  return Number(tempArray.join(''));
}