// const Deck = require("./Deck");

const deck = new Deck;
const playerHand = new Hand;

deck.shuffle();

$("#hit").click(function() {
  const drawnCard = deck.drawCard();
  playerHand.add(drawnCard);
  $("<span>").text(drawnCard.suit + drawnCard.value).appendTo($(".player-area"));
  console.log(playerHand.value());
});