import { board } from './component/board';
import Cookies from 'js-cookie';
// import { Button, Popup, Text } from './utils/utils';
import { gameplayUI } from './view/gameplayUI';
import { CC, blockShapes } from './utils/constants';
import * as PIXI from 'pixi.js';
import { block } from './component/block';

interface gameplayStats {
  score: number;
  bestScore: number;
  lines: number;
  blockStats: number[];
}

export class gameplay {
  gameplayUI: gameplayUI;
  container: PIXI.Container;
  board: board;
  ticker: PIXI.Ticker;
  stats: gameplayStats;
  nextBlock: block;
  constructor(app: PIXI.Application) {
    this.nextBlock = block.GetNewRandomBlock();
    this.container = new PIXI.Container();
    this.stats = { score: 0, lines: 0, blockStats: new Array<number>(blockShapes.length), bestScore: parseInt(Cookies.get('bestScore') || '0') };
    this.board = new board(this.container, 10, 20);
    this.board.OnBlockPlaced = blockId => {
      this.stats.blockStats[blockId] = (this.stats.blockStats[blockId] || 0) + 1;
      this.gameplayUI.UpdateBlockStats(blockId, this.stats.blockStats[blockId]);
      this.board.AddBlock(this.nextBlock);
      this.nextBlock = block.GetNewRandomBlock();
      this.gameplayUI.RenderNextBlock(this.nextBlock);
    };
    this.board.OnLinesRemoved = numLines => {
      this.stats.score += numLines * numLines * 100;
      this.stats.lines += numLines;
      this.stats.bestScore = Math.max(this.stats.bestScore, this.stats.score);
      Cookies.set('bestScore', this.stats.bestScore.toString());
      this.gameplayUI.UpdateScore(this.stats.score, this.stats.bestScore, this.stats.lines);
    };
    this.board.OnGameOver = () => {
      this.gameplayUI.SetGameOver(() => {
        this.board.Clear();
        this.Clear();
      });
      this.ticker.stop();
    };
    app.stage.addChild(this.container);

    this.ticker = new PIXI.Ticker();
    this.ticker.add(time => {
      this.board.Update(this.ticker.deltaMS * 0.001);
    });

    this.gameplayUI = new gameplayUI(this.container, () => {
      this.StartGame();
    });
    this.gameplayUI.UpdateScore(this.stats.score, this.stats.bestScore, this.stats.lines);

    this.board.AddBlock(block.GetNewRandomBlock());
    this.gameplayUI.RenderNextBlock(this.nextBlock);
  }

  Clear() {
    let bestScore = this.stats.bestScore;
    this.stats = { score: 0, lines: 0, blockStats: new Array<number>(blockShapes.length), bestScore: bestScore };
    this.ticker.start();
    this.board.AddBlock(block.GetNewRandomBlock());
    this.gameplayUI.RenderNextBlock(this.nextBlock);
    this.gameplayUI.UpdateScore(0, this.stats.bestScore, 0);
    for (let i = 0; i < this.stats.blockStats.length; i++) this.gameplayUI.UpdateBlockStats(i, 0);
  }

  Destroy() {
    this.ticker.stop();
    this.board.Destroy();
    this.container.destroy({ children: true, texture: true, baseTexture: true });
  }

  StartGame() {
    this.ticker.start();
  }
}
