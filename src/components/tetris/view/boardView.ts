import { Container, Graphics } from 'pixi.js';
import * as constants from '../utils/constants';
import { board } from '../component/board';

export class boardView {
  board: board;
  graphics: Graphics;
  bgGraphics: Graphics;

  constructor(parent: board) {
    this.board = parent;
    this.graphics = new Graphics();
    this.bgGraphics = new Graphics();
    this.drawBackground();
    this.bgGraphics.pivot.set(0.5);

    parent.container.addChild(this.bgGraphics);
    parent.container.addChild(this.graphics);
  }

  private drawBackground(): void {
    let graphics = this.bgGraphics;
    let size = constants.cellSize;
    let width = this.board.width;
    let height = this.board.height;
    graphics.lineStyle(1, constants.getColors().primary, 1);
    for (let x = 0; x < width + 1; x++) {
      let currentX = x * size;
      graphics.moveTo(currentX, 0);
      graphics.lineTo(currentX, height * size);
    }
    for (let y = 0; y < height + 1; y++) {
      let currentY = y * size;
      graphics.moveTo(0, currentY);
      graphics.lineTo(width * size, currentY);
    }
  }

  SetPosition(x: number, y: number): void {
    this.bgGraphics.position.set(x, y);
    this.graphics.position.set(x, y);
  }
  AnimateLineFalling(y: number, numLinesRemoved: number) {
    for (let x = 0; x < this.board.width; x++) {
      let cell = this.board.cells[x][y];
      if (cell.insides) {
        let insides = cell.insides;
        insides.AnimateFalling(numLinesRemoved, () => {
          insides.SetParent(this.board.cells[x][y + numLinesRemoved]);
        });
      }
    }
  }

  Redraw() {
    this.graphics.clear();
    // let cells = this.board.cells;
    // for (let x = 0; x < this.board.width; x++) {
    //   for (let y = 0; y < this.board.height; y++) {
    //     cells[x][y].renderer.Render(this.graphics);
    //   }
    // }
    if (this.board.block) this.board.block.renderer.Render(this.graphics);
  }
}
