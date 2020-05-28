import { block } from '../component/block';
import { Container, Graphics } from 'pixi.js';
import { Button, Popup, Text } from '../utils/utils';
import { CC, getColors, cellSize, blockShapes } from '../utils/constants';
import btnImg from '../img/btn.png';

export class gameplayUI {
  container: Container;
  highScoreValueText: Text;
  scoreValueText: Text;
  linesValueText: Text;
  blockStatsValueTexts: Text[];
  private nextBlockGraphics: Graphics;
  constructor(parent: Container, onStartCb: () => void) {
    this.blockStatsValueTexts = new Array<Text>(blockShapes.length);
    this.container = parent;
    let nextBlockPlaceholder = this.AddPlaceHolder(this.container, CC.x + 170, CC.y - 100, 90, 90);
    let nextBlockText = new Text('NEXT', 30);
    nextBlockText.SetParent(nextBlockPlaceholder);
    nextBlockText.SetPosition(0, -30);
    this.nextBlockGraphics = new Graphics();
    this.nextBlockGraphics.y = 30;
    nextBlockPlaceholder.addChild(this.nextBlockGraphics);

    let scorePlaceholder = this.AddPlaceHolder(this.container, CC.x + 170, CC.y + 30, 110, 140);
    let highScoreText = new Text('HighScore', 20);
    highScoreText.SetParent(scorePlaceholder);
    highScoreText.SetPosition(0, -45);
    let highScoreValueText = new Text('0', 20);
    highScoreValueText.SetParent(scorePlaceholder);
    highScoreValueText.SetPosition(0, -20);

    let scoreText = new Text('Score', 20);
    scoreText.SetParent(scorePlaceholder);
    scoreText.SetPosition(0, 20);
    let scoreValueText = new Text('0', 20);
    scoreValueText.SetParent(scorePlaceholder);
    scoreValueText.SetPosition(0, 45);

    let linesPlaceHolder = this.AddPlaceHolder(this.container, CC.x + 170, CC.y + 150, 70, 70);
    let linesText = new Text('Lines', 20);
    linesText.SetParent(linesPlaceHolder);
    linesText.SetPosition(0, -12);
    let linesValueText = new Text('0', 20);
    linesValueText.SetParent(linesPlaceHolder);
    linesValueText.SetPosition(0, 12);

    this.DrawStats();

    let popup = new Popup(this.container);
    let btn = new Button(popup.container, { defaultImg: btnImg, defaultImgSize: { w: 100, h: 60 } });
    new Text('Start', 24).SetParent(btn.container);
    btn.SetCallback(() => {
      popup.Close();
      onStartCb();
    });

    this.highScoreValueText = highScoreValueText;
    this.scoreValueText = scoreValueText;
    this.linesValueText = linesValueText;
  }

  private DrawStats() {
    let g = new Graphics();
    let n = blockShapes.length;
    let statsPlaceholder = this.AddPlaceHolder(this.container, CC.x - 170, CC.y, 130, 400);
    statsPlaceholder.addChild(g);
    for (let i = 0; i < n; i++) {
      let tempBlock = new block(i);
      let dy = (i - n * 0.5 + 0.5) * 2.8;
      tempBlock.renderer.RenderArbitrary(g, -tempBlock.GetWidth() * 0.5 - 1, -tempBlock.GetHeight() * 0.5 + dy);
      let statValueText = new Text('0', 20);
      statValueText.SetParent(g);
      statValueText.SetPosition(45, dy * cellSize);
      this.blockStatsValueTexts[i] = statValueText;
    }
  }

  private AddPlaceHolder(parent: Container, x: number, y: number, width: number, height: number) {
    let g = new Graphics();
    g.scale.set(0.8);
    g.lineStyle(1, getColors().secondary, 1);
    g.beginFill(getColors().primary, 1);
    g.drawRoundedRect(-width * 0.5, -height * 0.5, width, height, width * 0.12);
    g.endFill();
    g.position.set(x, y);
    parent.addChild(g);
    return g;
  }

  UpdateScore(score: number, bestScore: number, lines: number) {
    this.scoreValueText.SetText(score.toString());
    this.highScoreValueText.SetText(bestScore.toString());
    this.linesValueText.SetText(lines.toString());
  }

  UpdateBlockStats(blockId: number, blockValue: number) {
    this.blockStatsValueTexts[blockId].SetText(blockValue.toString());
  }

  RenderNextBlock(block: block) {
    this.nextBlockGraphics.clear();
    block.renderer.Render(this.nextBlockGraphics);
    this.nextBlockGraphics.position.set(-block.GetWidth() * cellSize * 0.5, -block.GetHeight() * cellSize * 0.5 + 20);
  }

  SetGameOver(callback: () => void) {
    let popup = new Popup(this.container);
    popup.AnimateAppearing();
    let btn = new Button(popup.container, { defaultImg: btnImg, defaultImgSize: { w: 100, h: 60 } });
    new Text('Restart', 24).SetParent(btn.container);
    btn.SetCallback(() => {
      popup.Close();
      callback();
    });
  }
}
