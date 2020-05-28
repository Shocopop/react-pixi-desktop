import * as PIXI from 'pixi.js';
import { gameplay } from './gameplay';
import { SS, getColors } from '../tetris/utils/constants';

interface TetrisInstance {
  Destroy(): void;
}
export default function InitTetris(parentElement: HTMLDivElement | null): TetrisInstance {
  const app = new PIXI.Application({
    width: SS.x,
    height: SS.y,
    antialias: true,
    transparent: false,
    backgroundColor: getColors().bg,
  });
  parentElement && parentElement.appendChild(app.view);
  var game = new gameplay(app);
  let tetrisInstance: TetrisInstance = {
    Destroy: () => {
      game.Destroy();
      app.destroy(true);
      console.log('destroy the app');
    },
  };
  return tetrisInstance;
}

export function DestroyTetris() {}
