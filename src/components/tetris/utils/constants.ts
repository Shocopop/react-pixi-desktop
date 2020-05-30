import { LightGrayColors, DarkGrayColors } from '../../../styled/Themes';
import { utils as PIXIUtils } from 'pixi.js';

interface ColorTheme {
  primary: number;
  secondary: number;
  bg: number;
  textColor: number;
}

const normalize8bit = function(colors: [number, number, number]) {
  return colors.map(v => v / 255);
};

let LightColorTheme: ColorTheme = {
  primary: PIXIUtils.rgb2hex(normalize8bit(LightGrayColors[3])),
  secondary: PIXIUtils.rgb2hex(normalize8bit(LightGrayColors[4])),
  bg: PIXIUtils.rgb2hex(normalize8bit(LightGrayColors[1])),
  textColor: PIXIUtils.rgb2hex(normalize8bit(LightGrayColors[5])),
};

let DarkColorTheme: ColorTheme = {
  primary: PIXIUtils.rgb2hex(normalize8bit(DarkGrayColors[3])),
  secondary: PIXIUtils.rgb2hex(normalize8bit(DarkGrayColors[4])),
  bg: PIXIUtils.rgb2hex(normalize8bit(DarkGrayColors[1])),
  textColor: PIXIUtils.rgb2hex(normalize8bit(DarkGrayColors[5])),
};

export function getColors(): ColorTheme {
  return DarkMode ? DarkColorTheme : LightColorTheme;
}
export let cellSize: number = 20;
// screenSize
export let SS = {
  x: 512,
  y: 512,
};
// screenCenter
export let CC = {
  x: SS.x * 0.5,
  y: SS.y * 0.5,
};

export let DarkMode: boolean = false;
export function SetDarkModeTetris(darkMode: boolean) {
  DarkMode = darkMode;
}

export const blockRotateAnchors: Array<number[][]> = [
  [
    [0, 0],
    [2, -1],
    [0, 1],
    [1, -1],
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [0, 0],
  ],
];

export const blockShapes: Array<number[][]> = [
  [[1, 1, 1, 1]],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
];
