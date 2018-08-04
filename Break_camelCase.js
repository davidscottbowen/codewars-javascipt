// complete the function
function solution(string) {
    var finalString = "";
    for (i = 0; i<string.length; i++) {
      if (string[i] != string[i].toUpperCase()) {
       finalString = finalString + string[i];
      }  else {
        finalString = finalString + " " + string[i];
      }
    }
    return finalString;
}  

 
