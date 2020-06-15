import * as _ from 'underscore';
import { Color, Suit, Character, Card } from './card';

const SuitList: Suit[] = ['Spade', 'Heart', 'Diamond', 'Club'];
const CharacterList: Character[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export class DeckService {

  private deck: Card[];

  constructor() {
    this.deck = [];
    for (const suit of SuitList) {
      for (const character of CharacterList) {
        const color: Color = (suit === 'Spade' || suit === 'Club') ? 'Black' : 'Red';
        const card = new Card(color, suit, character);
        this.deck.push(card);
      }
    }
  }

  getDeck() {
    return this.deck;
  }

   getShuffleDeck(): Card[] {
    return _.shuffle(this.deck);
  }
}
