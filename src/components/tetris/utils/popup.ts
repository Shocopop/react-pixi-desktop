import { Container, DisplayObject, Sprite, Texture } from 'pixi.js';
import { SS, CC } from './constants';
import { Transition, Easing } from './utils';

interface popupParams {
  closable?: boolean;
  defaultImg?: string;
}

export default class Popup {
  private mainContainer: Container;
  private bgSprite: Sprite;
  container: Container;
  constructor(parent: Container, params?: popupParams) {
    this.mainContainer = new Container();
    this.container = new Container();
    let bg = Sprite.from(Texture.WHITE);
    bg.interactive = true;
    bg.width = SS.x;
    bg.height = SS.y;
    bg.tint = 0x000000;
    bg.alpha = 0.7;
    bg.on('pointerdown', () => {
      if (params) if (params.closable) this.Close();
    });
    this.bgSprite = bg;
    this.container.y = CC.y;
    this.container.x = CC.x;

    parent.addChild(this.mainContainer);
    this.mainContainer.addChild(bg);
    this.mainContainer.addChild(this.container);
  }

  AnimateAppearing() {
    this.bgSprite.alpha = 0;
    this.container.x = -CC.x;
    Transition.to(this.container, 300, { x: CC.x, easing: Easing.easeOutQuad });
    Transition.to(this.bgSprite, 300, { alpha: 0.7 });
  }

  AddChild(child: DisplayObject) {
    this.container.addChild(child);
  }
  Close() {
    Transition.to(this.container, 300, { x: SS.x, easing: Easing.easeInQuad });
    Transition.to(this.bgSprite, 300, {
      alpha: 0.0,
      onComplete: () => {
        this.mainContainer.destroy({ children: true, texture: true });
      },
    });
  }
}
