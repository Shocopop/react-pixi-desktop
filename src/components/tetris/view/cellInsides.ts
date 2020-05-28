import { Container, Graphics } from 'pixi.js';
import { cell } from '../component/cell';
import { cellSize, getColors } from '../utils/constants';
import { Transition } from '../utils/utils';

export class cellInsides {
  graphics: Graphics;
  cell: cell;
  constructor(parent: cell) {
    this.cell = parent;
    let graphics = new Graphics();
    graphics.lineStyle(1, getColors().primary, 1);
    graphics.beginFill(getColors().textColor);
    graphics.drawRoundedRect(3, 3, cellSize - 6, cellSize - 6, cellSize * 0.1);
    graphics.endFill();
    parent.container.addChild(graphics);
    this.graphics = graphics;
  }
  Destroy() {
    this.graphics.destroy();
  }
  AnimateFalling(dy: number, callback: () => void) {
    this.cell.SetCellEmpty();
    Transition.to(this.graphics, 250, { y: dy * cellSize, onComplete: callback });
  }
  SetParent(parentCell: cell) {
    parentCell.insides = this;
    parentCell.container.addChild(this.graphics);
    this.cell = parentCell;
    this.graphics.position.set(0);
  }
}
