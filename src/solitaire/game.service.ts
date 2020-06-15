import { Deck } from './deck.service';

export class Game {
  private score: number;
  private time: Date;
  private move: number;

  constructor() {
    this.score = 0;
    this.time = new Date();
    this.move = 0;
  }

  start(): void {
    //
    const deck = Deck.shuffleDeck();
    const shuffledDeck = deck.slice(0, 24);
    const spredDeck = deck.slice(24);
  }

  pause(): void {
    //
  }

  resume(): void {
    //
  }

  retry(): void {
    //
  }

  newGame(): void {
    //
  }
}
