class Hand {
  constructor() {
    this.cards = [];
    this.hasAce = false;
  }

  // Method to add a card to the hand
  add(card) {
    this.cards.push(card);
    if (card.value === "A") {
      this.hasAce = true;
    }
  }

  // Method to get the value of the hand
  value() {
    const hardValue = this.cards.reduce((total, card) => {
      switch(card.value) {
        case "A":
          return total + 1;
        case "T":
        case "J":
        case "Q":
        case "K":
          return total + 10;
        default:
          return total + parseInt(card.value);
      }
    }, 0);
    // If the hand has an ace and can be a soft hand
    if (this.hasAce && hardValue <= 11) {
      return hardValue + 10;
    }
    else {
      return hardValue;
    }
  }

  // Method to clear the hand
  clear() {
    this.cards.length = 0;
    this.hasAce = false;
  }
}