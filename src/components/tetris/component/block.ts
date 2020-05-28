import { clamp } from 'lodash';
import { blockRenderer } from '../view/blockRenderer';
import { blockShapes, blockRotateAnchors } from '../utils/constants';

export class block {
  renderer: blockRenderer;
  id: number;
  shape: number[][];
  x: number;
  y: number;
  rotation: number; // from 0 to 3
  private width: number;
  private height: number;
  constructor(id: number) {
    this.id = clamp(id, 0, blockShapes.length - 1);
    this.shape = this.GetBlockShape();
    this.renderer = new blockRenderer(this);
    this.x = this.y = 0;
    this.width = this.shape[0].length;
    this.height = this.shape.length;
    this.rotation = 0;
  }

  SetCellPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  GetWidth() {
    if (this.rotation % 2 == 0) return this.width;
    return this.height;
  }

  GetHeight() {
    if (this.rotation % 2 == 0) return this.height;
    return this.width;
  }

  Rotate(direction: 1 | -1 = 1) {
    let blockAnchors = blockRotateAnchors[this.id];
    let previousAnchor = blockAnchors[this.rotation];
    this.rotation = (this.rotation + direction + 4) % 4;
    let currentAnchor = blockAnchors[this.rotation];
    this.x += -previousAnchor[0] + currentAnchor[0];
    this.y += -previousAnchor[1] + currentAnchor[1];
    let shape = this.shape;
    let newShape = [];
    if (direction === 1)
      for (let x = 0; x < shape[0].length; x++) {
        let temp = [];
        for (let y = 0; y < shape.length; y++) {
          temp.push(shape[y][x]);
        }
        newShape.push(temp.reverse());
      }
    else
      for (let x = shape[0].length - 1; x >= 0; x--) {
        let temp = [];
        for (let y = 0; y < shape.length; y++) {
          temp.push(shape[y][x]);
        }
        newShape.push(temp);
      }
    this.shape = newShape;
  }

  GetBlocksAmount() {
    return blockShapes.length;
  }

  static GetNewRandomBlock(): block {
    let b = new block(Math.floor(Math.random() * blockShapes.length - 1));
    return b;
  }

  private GetBlockShape(): number[][] {
    let shape = blockShapes[this.id];
    let newShape = [];
    for (var i = 0; i < shape.length; i++) newShape[i] = shape[i].slice();
    return newShape;
  }
}
