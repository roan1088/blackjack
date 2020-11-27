class Deck {
  constructor() {
    this.cards = [];
    this.currentCard = 0;

    // Fill the cards array with all the cards of a standard deck
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
    const suits = ['♣', '♦', '♠', '♥'];
    values.forEach(value => {
      suits.forEach(suit => {
        this.cards.push({
          value: value,
          suit: suit
        });
      });
    });
  }

  // Method to draw a card
  drawCard() {
    // Draw the card at the current position and increment the current card position
    return this.cards[this.currentCard++];
  }
}

// module.exports = Deck;