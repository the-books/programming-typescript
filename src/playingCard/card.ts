type Color = 'Black' | 'Red';
type Suit = 'Spade' | 'Heart' | 'Diamond' | 'Club';
type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type Character = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

class Card {
  constructor(
    public color: Color,
    public suit: Suit,
    public size: Size,
    public character: Character,
  ) { }
}

// tslint:disable-next-line: max-classes-per-file
class Deck {
  static makeDeck(): Card[] {
    return [
      // Spade
      new Card('Black', 'Spade', 1, 'A'),
      new Card('Black', 'Spade', 2, '2'),
      new Card('Black', 'Spade', 3, '3'),
      new Card('Black', 'Spade', 4, '4'),
      new Card('Black', 'Spade', 5, '5'),
      new Card('Black', 'Spade', 6, '6'),
      new Card('Black', 'Spade', 7, '7'),
      new Card('Black', 'Spade', 8, '8'),
      new Card('Black', 'Spade', 9, '9'),
      new Card('Black', 'Spade', 10, '10'),
      new Card('Black', 'Spade', 11, 'J'),
      new Card('Black', 'Spade', 12, 'Q'),
      new Card('Black', 'Spade', 13, 'K'),
      // Diamond
      new Card('Red', 'Diamond', 1, 'A'),
      new Card('Red', 'Diamond', 2, '2'),
      new Card('Red', 'Diamond', 3, '3'),
      new Card('Red', 'Diamond', 4, '4'),
      new Card('Red', 'Diamond', 5, '5'),
      new Card('Red', 'Diamond', 6, '6'),
      new Card('Red', 'Diamond', 7, '7'),
      new Card('Red', 'Diamond', 8, '8'),
      new Card('Red', 'Diamond', 9, '9'),
      new Card('Red', 'Diamond', 10, '10'),
      new Card('Red', 'Diamond', 11, 'J'),
      new Card('Red', 'Diamond', 12, 'Q'),
      new Card('Red', 'Diamond', 13, 'K'),
      // Heart
      new Card('Red', 'Heart', 1, 'A'),
      new Card('Red', 'Heart', 2, '2'),
      new Card('Red', 'Heart', 3, '3'),
      new Card('Red', 'Heart', 4, '4'),
      new Card('Red', 'Heart', 5, '5'),
      new Card('Red', 'Heart', 6, '6'),
      new Card('Red', 'Heart', 7, '7'),
      new Card('Red', 'Heart', 8, '8'),
      new Card('Red', 'Heart', 9, '9'),
      new Card('Red', 'Heart', 10, '10'),
      new Card('Red', 'Heart', 11, 'J'),
      new Card('Red', 'Heart', 12, 'Q'),
      new Card('Red', 'Heart', 13, 'K'),
      // Club
      new Card('Black', 'Club', 1, 'A'),
      new Card('Black', 'Club', 2, '2'),
      new Card('Black', 'Club', 3, '3'),
      new Card('Black', 'Club', 4, '4'),
      new Card('Black', 'Club', 5, '5'),
      new Card('Black', 'Club', 6, '6'),
      new Card('Black', 'Club', 7, '7'),
      new Card('Black', 'Club', 8, '8'),
      new Card('Black', 'Club', 9, '9'),
      new Card('Black', 'Club', 10, '10'),
      new Card('Black', 'Club', 11, 'J'),
      new Card('Black', 'Club', 12, 'Q'),
      new Card('Black', 'Club', 13, 'K'),
    ];
  }
}

const deck = Deck.makeDeck();

export {};
