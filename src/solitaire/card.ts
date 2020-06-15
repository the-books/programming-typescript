export type Color = 'Black' | 'Red';
export type Suit = 'Spade' | 'Heart' | 'Diamond' | 'Club';
export type Character = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
export type Flip = 'Up' | 'Down';

export class Card {
  constructor(
    public readonly color: Color,
    public readonly suit: Suit,
    public readonly character: Character,
    public flip: Flip = 'Down',
  ) { }

  flipping(): void {
    if (this.flip === 'Down') {
      this.flip = 'Up';
    } else {
      this.flip = 'Down';
    }
  }
}
