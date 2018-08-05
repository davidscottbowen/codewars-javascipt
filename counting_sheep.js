function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var total = 0;
    for (i=0;i<arrayOfSheep.length;i++) {
      if (arrayOfSheep[i] == true) {
        total = total + 1;
    }
    }
    return total;
  }
