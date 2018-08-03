function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
    var testNumber = "(999) 999-9999";
    if (phoneNumber.length != 14) {
        return false;
      } else if (phoneNumber[0] != "(" ) {
       return false;
      } else if (phoneNumber[4] != ")" ) {
        return false;
      } else if (phoneNumber[5] != " " ) {
        return false;    
      } else if (phoneNumber[9] != "-" ) {
        return false;
      } else {
        return true;
      }
  }