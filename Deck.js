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

  // Method to shuffle the deck using Fisher–Yates shuffle (modern algorithm)
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
    // set the current card to 0
    this.currentCard = 0;
  }
}

// module.exports = Deck;