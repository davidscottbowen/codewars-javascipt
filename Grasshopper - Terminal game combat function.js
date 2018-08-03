function combat(health, damage) {
    // Write your code here
    var newHealth = health - damage;
    if (newHealth < 0) {
      return 0;
      } else {
      return newHealth;
      }
  }