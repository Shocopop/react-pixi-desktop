import { clamp } from 'lodash';
import { cellInsides } from '../view/cellInsides';
import { Container } from 'pixi.js';
import { cellSize } from '../utils/constants';

export class cell {
  insides?: cellInsides;
  container: Container;
  x: number;
  y: number;
  constructor(parent: Container, x: number, y: number) {
    this.container = new Container();
    parent.addChild(this.container);
    this.x = x;
    this.y = y;
    this.SetCellPosition(x, y);
  }
  get isEmpty(): boolean {
    return this.insides == undefined;
  }
  SetCellEmpty(destroy: boolean = false) {
    if (this.insides) {
      if (destroy) this.insides.Destroy();
      this.insides = undefined;
    }
  }
  SetCellFilled() {
    if (!this.isEmpty) return;
    this.insides = new cellInsides(this);
  }
  SetCellPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.SetPosition(x * cellSize, y * cellSize);
  }
  SetPosition(x: number, y: number) {
    this.container.position.set(x, y);
  }
}
