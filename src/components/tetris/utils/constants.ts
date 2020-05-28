interface colorPalette {
  primary: number;
  secondary: number;
  bg: number;
  textColor: number;
}
let colors: colorPalette[] = [
  {
    primary: 0xdddddd,
    secondary: 0xaabbbb,
    bg: 0xeeeeee,
    textColor: 0x333333,
  },
  {
    primary: 0xdddddd,
    secondary: 0xaabbbb,
    bg: 0xeeeeee,
    textColor: 0x333333,
  },
];
export function getColors(): colorPalette {
  return DarkMode ? colors[1] : colors[0];
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
export function SetDarkModeConst(darkMode: boolean) {
  DarkMode = darkMode;
  console.log(DarkMode);
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
