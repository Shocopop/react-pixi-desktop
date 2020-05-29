interface ColorTheme {
  primary: number;
  secondary: number;
  bg: number;
  textColor: number;
}

let LightColorTheme: ColorTheme = {
  primary: 0xdddddd,
  secondary: 0xaabbbb,
  bg: 0xeeeeee,
  textColor: 0x333333,
};

let DarkColorTheme: ColorTheme = {
  primary: 0x333333,
  secondary: 0x666666,
  bg: 0xbbbbbb,
  textColor: 0xaaaaaa,
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
