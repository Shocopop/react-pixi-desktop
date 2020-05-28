import { Container, Sprite, DisplayObject } from 'pixi.js';

interface buttonParams {
  defaultImg?: string;
  defaultImgSize?: { w: number; h: number };
}

export default class Button {
  container: Container;
  isFocused: boolean;
  callback: () => void;
  constructor(parent: Container, params?: buttonParams) {
    this.callback = () => {};
    this.isFocused = false;
    let container = new Container();
    this.container = container;
    container.interactive = true;
    container.buttonMode = true;
    parent.addChild(container);

    if (params)
      if (params.defaultImg) {
        let path = params.defaultImg;
        let sprite = Sprite.from(path);
        if (params.defaultImgSize) {
          sprite.width = params.defaultImgSize.w;
          sprite.height = params.defaultImgSize.h;
          sprite.x -= sprite.width * 0.5;
          sprite.y -= sprite.height * 0.5;
        }
        container.addChild(sprite);
      }

    container
      .on('pointerdown', () => {
        this.isFocused = true;
        container.scale.set(0.98);
      })
      .on('pointerup', () => {
        if (!this.isFocused) return;
        this.isFocused = false;
        container.scale.set(1);
        this.callback();
      })
      .on('pointerout', () => {
        if (!this.isFocused) return;
        this.isFocused = false;
        container.scale.set(1);
      });
  }

  SetCallback(callback: () => void) {
    this.callback = callback;
  }

  AddChild(child: DisplayObject) {
    this.container.addChild(child);
  }

  RecalculatePivot() {
    let bounds = this.container.getBounds();
    this.container.pivot.set(bounds.width * 0.5, bounds.height * 0.5);
  }
}
