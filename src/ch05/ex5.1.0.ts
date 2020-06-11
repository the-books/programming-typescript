type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 4 | 5 | 6 | 7;

type Distance = {
  rank: number;
  file: number;
};

class Game {}

// tslint:disable-next-line: max-classes-per-file
class Position {

  constructor(
    private rank: Rank,
    private file: File,
  ) {}

  distanceFrom(position: Position): Distance {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

// tslint:disable-next-line: max-classes-per-file
abstract class Piece {

  protected position: Position;

  constructor(
    private readonly color: Color,
    rank: Rank,
    file: File,
  ) {
    this.position = new Position(rank, file);
  }

  moveTo(postion: Position) {
    this.position = this.position;
  }

  abstract canMoveTo(position: Position): boolean;
}

// tslint:disable-next-line: max-classes-per-file
class King extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

// tslint:disable-next-line: max-classes-per-file
class Queen extends Piece {
  canMoveTo() {

  }
}

const king = new King('Black', 'A', 1);
console.log(king);

const gueen = new Queen('White', 'B', 1);
console.log(gueen);


export {};
