import { Piece } from '../piece';
import { Position } from '../position';

class Knight extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

export { Knight };
