import { Card, Character } from "./card";

export class ClubCard extends Card {

  constructor(character: Character) {
    super('Black', 'Club', character);
  }

}
