import { Text, Container } from 'pixi.js';
import { getColors } from './constants';

export default class text {
  text: Text;
  constructor(
    text: string,
    fontSize: number,
    fontFamily: string = '"Trebuchet MS", Helvetica, sans-serif',
    fontWeight: 'bold' | 'normal' = 'bold',
    align: 'center' | 'left' | 'right' = 'center',
    fill: number = getColors().textColor,
  ) {
    this.text = new Text(text, { fontFamily: fontFamily, fontSize: fontSize, fill: fill, fontWeight: fontWeight, align: align });
    this.text.pivot.set(this.text.width * 0.5, this.text.height * 0.5);
  }

  SetParent(parent: Container) {
    parent.addChild(this.text);
  }

  SetPosition(x: number, y: number) {
    this.text.position.set(x, y);
  }

  SetText(text: string) {
    this.text.text = text;
    this.text.pivot.set(this.text.width * 0.5, this.text.height * 0.5);
  }
}
