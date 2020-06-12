import { King } from './pieces/king';
import { Queen } from './pieces/queen';

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      // Kings
      new King('White', 'E', 1),
      new King('White', 'E', 8),
      // Queens
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
    ];
  }
}

export { Game };
