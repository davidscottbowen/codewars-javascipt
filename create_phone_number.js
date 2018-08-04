function createPhoneNumber(numbers){
    var numbersString = numbers.join("");
    var slice1 = numbersString.slice(0,3);
    var slice2 = numbersString.slice(3,6);
    var slice3 = numbersString.slice(6);
    var finalString = "(" + slice1 + ") " + slice2 + "-" + slice3;
    return finalString;
 }
