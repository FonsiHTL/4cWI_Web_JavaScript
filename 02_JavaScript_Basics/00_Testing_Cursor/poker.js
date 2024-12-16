class PokerGame {
    constructor() {
        this.deck = this.createDeck();
        this.shuffleDeck();
        this.players = [{ name: 'Player 1', chips: 1000, hand: [] }];
        this.communityCards = [];
        this.pot = 0;
    }

    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push({ suit, value });
            }
        }
        return deck;
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    dealCards() {
        this.players.forEach(player => {
            player.hand = [this.deck.pop(), this.deck.pop()];
        });
        this.communityCards = [this.deck.pop(), this.deck.pop(), this.deck.pop()];
    }

    startGame() {
        this.dealCards();
        this.updateUI();
    }

    updateUI() {
        const player1 = this.players[0];
        document.querySelector('#player1 .player-cards').innerText = player1.hand.map(card => `${card.value} of ${card.suit}`).join(', ');
        document.querySelector('.community-cards').innerText = this.communityCards.map(card => `${card.value} of ${card.suit}`).join(', ');
        document.querySelector('.pot').innerText = `Pot: $${this.pot}`;
    }
}

const game = new PokerGame();
game.startGame(); 