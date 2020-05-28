import { Ticker } from 'pixi.js';
import Easing, { EasingFunction } from './easing';

let ticker = Ticker.shared;

interface transitionParams {
  xScale?: number;
  yScale?: number;
  x?: number;
  y?: number;
  alpha?: number;
  onComplete?: () => void;
  easing?: EasingFunction;
}
interface initParams {
  xScale: number;
  yScale: number;
  x: number;
  y: number;
  alpha: number;
}

export default class transition {
  static to(obj: PIXI.DisplayObject, duratation: number, p: transitionParams) {
    let from: initParams = { xScale: obj.scale.x, yScale: obj.scale.y, x: obj.x, y: obj.y, alpha: obj.alpha };
    let animation: ((d: number) => void)[] = [];

    if (p.xScale != undefined) {
      let dd = p.xScale - from.xScale;
      animation.push(d => (obj.scale.x = from.xScale + dd * d));
    }
    if (p.yScale != undefined) {
      let dd = p.yScale - from.yScale;
      animation.push(d => (obj.scale.y = from.yScale + dd * d));
    }
    if (p.x != undefined) {
      let dd = p.x - from.x;
      animation.push(d => (obj.x = from.x + dd * d));
    }
    if (p.y != undefined) {
      let dd = p.y - from.y;
      animation.push(d => (obj.y = from.y + dd * d));
    }
    if (p.alpha != undefined) {
      let dd = p.alpha - from.alpha;
      animation.push(d => (obj.alpha = from.alpha + dd * d));
    }

    let easingFunction = p.easing || Easing.easeInOutQuad;
    let curTime = 0;

    function cb() {
      ticker.remove(animate);
      if (p.onComplete) p.onComplete();
    }

    let i = 0;
    let n = animation.length;

    function animate(delta: number) {
      curTime += delta * 16.66667;
      curTime = Math.min(curTime, duratation);
      let d = easingFunction(curTime, 0, 1, duratation);
      for (i = 0; i < n; i++) animation[i](d);
      if (curTime >= duratation) {
        cb();
      }
    }

    ticker.add(animate);
  }
}
