import { File, Rank, Position } from './position';

type Color = 'Black' | 'White';

abstract class Piece {

  protected position: Position;

  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank,
  ) {
    this.position = new Position(file, rank);
  }

  moveTo(postion: Position) {
    this.position = this.position;
  }

  abstract canMoveTo(position: Position): boolean;
}

export {
  Piece,
};
