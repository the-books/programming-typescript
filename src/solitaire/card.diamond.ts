import { Card, Character } from "./card";

export class DiamondCard extends Card {

  constructor(character: Character) {
    super('Red', 'Diamond', character);
  }

}
