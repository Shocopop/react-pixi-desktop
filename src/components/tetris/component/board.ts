import { boardView } from '../view/boardView';
import { boardBlock } from './boardBlock';
import { block } from './block';
import { cell } from './cell';
import { Container } from 'pixi.js';
import { Keyboard } from '../utils/utils';
import { cellSize, CC } from '../utils/constants';

export class board {
  container: Container;
  view: boardView;
  block?: boardBlock;
  blockDelta: number;
  cells: cell[][];
  width: number;
  height: number;
  speed: number;
  boostedSpeed: number;
  gameEnded: boolean;
  OnLinesRemoved?: (numLines: number) => void;
  OnBlockPlaced?: (blockId: number) => void;
  OnGameOver?: () => void;
  unsubscribe: () => void;
  constructor(parent: Container, width: number, height: number) {
    this.container = new Container();
    this.gameEnded = false;
    this.width = width;
    this.height = height;
    this.blockDelta = 0;
    this.view = new boardView(this);
    this.cells = new Array<Array<cell>>();
    for (let x = 0; x < this.width; x++) {
      this.cells[x] = new Array<cell>();
      for (let y = 0; y < this.height; y++) {
        this.cells[x][y] = new cell(this.container, x, y);
      }
    }
    this.speed = 3;
    this.boostedSpeed = 0;
    parent.addChild(this.container);

    let l = Keyboard('ArrowLeft', { delay: 150, repeatDelay: 30 });
    l.press = () => this.move(-1);
    let u = Keyboard('ArrowUp');
    u.press = () => this.rotate();
    let r = Keyboard('ArrowRight', { delay: 150, repeatDelay: 30 });
    r.press = () => this.move(1);
    let s = Keyboard(' ');
    s.press = () => this.bringBlockDown();
    let downKey = Keyboard('ArrowDown');
    downKey.press = () => (this.boostedSpeed = 50);
    downKey.release = () => (this.boostedSpeed = 0);

    this.unsubscribe = () => {
      l.unsubscribe();
      u.unsubscribe();
      r.unsubscribe();
      s.unsubscribe();
    };

    this.container.position.set(-cellSize * width * 0.5 + CC.x, -cellSize * height * 0.5 + CC.y);
  }
  Update(deltaTime: number): void {
    if (this.gameEnded) return;
    if (!this.block) return;
    if ((this.blockDelta += deltaTime * Math.max(this.speed, this.boostedSpeed)) >= 1) {
      if (this.block.CanPlaceAt(this.block.x, this.block.y + 1)) {
        this.blockDelta -= 1;
        this.block.SetCellPosition(this.block.x, this.block.y + 1);
        this.view.Redraw();
      } else {
        this.BakeCurrentBlock();
      }
    }
  }
  BakeCurrentBlock() {
    let cblock = this.block;
    if (!cblock) return false;
    this.block = undefined;
    this.blockDelta = 0;
    if (cblock.y <= 0) {
      if (this.OnGameOver) this.OnGameOver();
      this.gameEnded = true;
      return;
    }

    let shape = cblock.shape;
    for (let y = 0; y < shape.length; y++)
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] > 0) this.cells[cblock.x + x][cblock.y + y].SetCellFilled();
      }

    this.CheckForFilledLines();
    if (this.OnBlockPlaced) this.OnBlockPlaced(cblock.id);
  }

  CheckForFilledLines() {
    let linesRemoved = 0;
    for (let y = this.height - 1; y >= 0; y--) {
      let filled = true;
      for (let x = 0; x < this.width; x++) {
        if (this.cells[x][y].isEmpty) {
          filled = false;
          break;
        }
      }
      if (filled) {
        this.RemoveLine(y);
        ++linesRemoved;
      } else {
        if (linesRemoved > 0) this.view.AnimateLineFalling(y, linesRemoved);
      }
    }
    if (linesRemoved && this.OnLinesRemoved) this.OnLinesRemoved(linesRemoved);
  }

  Clear() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.cells[x][y].SetCellEmpty(true);
      }
    }
    this.gameEnded = false;
  }

  RemoveLine(y: number) {
    for (let x = 0; x < this.width; x++) {
      this.cells[x][y].SetCellEmpty(true);
    }
  }

  AddBlock(nextBlock: block): void {
    if (this.block) return;
    this.block = boardBlock.GetNewBoardBlock(this, nextBlock.id);
    let w = this.width - this.block.GetWidth();
    let y = -this.block.GetHeight();
    this.block.SetCellPosition(Math.floor(Math.random() * w), y);
    this.view.Redraw();
  }

  private move(direction: number) {
    if (!this.block) return;
    let w = this.block.GetWidth();
    let x = this.block.x + direction;
    let y = this.block.y;
    if (x + w > this.width || x < 0) return;
    if (this.block.CanPlaceAt(x, y)) {
      this.block.SetCellPosition(x, y);
      this.view.Redraw();
    }
  }

  private bringBlockDown() {
    if (!this.block) return;
    let cblock = this.block;
    for (let y = cblock.y; y <= this.height - cblock.GetHeight(); y++) {
      if (cblock.CanPlaceAt(cblock.x, y)) continue;
      cblock.SetCellPosition(cblock.x, y - 1);
      this.view.Redraw();
      return;
    }
    cblock.SetCellPosition(cblock.x, this.height - cblock.GetHeight());
    this.view.Redraw();
  }

  Destroy() {
    this.unsubscribe();
  }

  private rotate() {
    if (!this.block) return;
    if (this.block.CanRotateInPlace()) {
      this.block.Rotate();
      this.view.Redraw();
    }
  }
}
