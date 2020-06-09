type Color = 'Black' | 'White';
type Rank = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
type File =  1  |  2  |  3  |  4  |  4  |  5  |  6  |  7;

class Game {}

// tslint:disable-next-line: max-classes-per-file
class Position {
  constructor(
    private rank: Rank,
    private file: File,
  ) {}
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
}

// tslint:disable-next-line: max-classes-per-file
class King extends Piece {}

// tslint:disable-next-line: max-classes-per-file
class Queen extends Piece {}

const king = new King('Black', 'a', 1);
console.log(king);

const gueen = new Queen('White', 'b', 1);
console.log(gueen);

export {};
