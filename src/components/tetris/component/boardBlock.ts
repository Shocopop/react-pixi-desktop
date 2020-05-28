import { block } from './block';
import { board } from './board';
import { blockShapes } from '../utils/constants';

export class boardBlock extends block {
  board: board;
  constructor(parentBoard: board, id: number) {
    super(id);
    this.board = parentBoard;
  }

  /**
   * returns true if block can be placed,
   * returns false otherwise
   */
  CanPlaceAt(xPos: number, yPos: number): boolean {
    let shape = this.shape;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (yPos + y < 0 || shape[y][x] == 0) continue;
        if (yPos + y >= this.board.height || xPos + x >= this.board.width || xPos + y < 0) return false;
        if (!this.board.cells[xPos + x][yPos + y].isEmpty) return false;
      }
    }
    return true;
  }

  CanRotateInPlace(): boolean {
    this.Rotate(1);
    let ret = this.CanPlaceAt(this.x, this.y);
    this.Rotate(-1);
    return ret;
  }

  static GetNewRandomBoardBlock(_board: board): boardBlock {
    let b = new boardBlock(_board, Math.floor(Math.random() * blockShapes.length - 1));
    return b;
  }

  static GetNewBoardBlock(_board: board, id: number) {
    return new boardBlock(_board, id);
  }
}
