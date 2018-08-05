function rot13(message){
  //your code here
  var lowerAlpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmn";
  var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN";
  var finalString = [];
  for (i = 0; i<message.length; i++) {
    var match = false;
    for (c = 0; c<26; c++) {
      if (message[i] == lowerAlpha[c]) {
        finalString.push(lowerAlpha[c+13]);
        match = true;
      } else if (message[i] == upperAlpha[c]) {
        finalString.push(upperAlpha[c+13]);
        match = true;
      }
    }
    if (!match) {
    finalString.push(message[i]);
    }
  }
  return finalString.join("");
}
 
