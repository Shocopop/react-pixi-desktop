import { Container, Graphics } from 'pixi.js';
import { cellSize, getColors } from '../utils/constants';
import { block } from '../component/block';

export class blockRenderer {
  parentBlock: block;
  constructor(parent: block) {
    this.parentBlock = parent;
  }

  Render(graphics: Graphics) {
    let xPos = this.parentBlock.x;
    let yPos = this.parentBlock.y;
    let shape = this.parentBlock.shape;
    for (let y = 0; y < shape.length; y++) {
      var row = shape[y];
      for (let x = 0; x < row.length; x++) {
        if (y + yPos < 0) continue;
        if (!shape[y][x]) continue;
        graphics.lineStyle(1, getColors().primary, 1);
        graphics.beginFill(getColors().textColor, 1);
        graphics.drawRoundedRect(cellSize * (x + xPos) + 2, cellSize * (y + yPos) + 2, cellSize - 4, cellSize - 4, cellSize * 0.2);
        graphics.endFill();
      }
    }
  }

  RenderArbitrary(graphics: Graphics, xPos: number, yPos: number) {
    let shape = this.parentBlock.shape;
    for (let y = 0; y < shape.length; y++) {
      var row = shape[y];
      for (let x = 0; x < row.length; x++) {
        if (!shape[y][x]) continue;
        graphics.lineStyle(1, getColors().primary, 1);
        graphics.beginFill(getColors().textColor, 1);
        graphics.drawRoundedRect(cellSize * (x + xPos) + 2, cellSize * (y + yPos) + 2, cellSize - 4, cellSize - 4, cellSize * 0.2);
        graphics.endFill();
      }
    }
  }
}
