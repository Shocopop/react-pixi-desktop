import React from 'react';
import 'styled-components';
import { DefaultTheme } from 'styled-components';
import lightBackgroundImage from '../img/mojave-day-1080.jpg';
import darkBackgroundImage from '../img/mojave-night-1080.jpg';

type colorType = [number, number, number];
type GrayColorsType = [colorType, colorType, colorType, colorType, colorType, colorType];

export const LightGrayColors: GrayColorsType = [
  [142, 142, 147],
  [147, 147, 148],
  [199, 199, 204],
  [209, 209, 214],
  [229, 229, 234],
  [242, 242, 247],
];

export const DarkGrayColors: GrayColorsType = [
  [142, 142, 147],
  [99, 99, 102],
  [72, 72, 74],
  [58, 58, 60],
  [44, 44, 46],
  [28, 28, 30],
];

declare module 'styled-components' {
  export interface DefaultTheme {
    Gray: string;
    Gray2: string;
    Gray3: string;
    Gray4: string;
    Gray5: string;
    Gray6: string;
    Text: string;
    Link: string;
    bgImage: string;
    taskbar: string;
  }
}

export const DarkModeContext = React.createContext({
  DarkMode: false,
  SetDarkMode: (darkMode: boolean): void => {},
});

export const Light: DefaultTheme = {
  Gray: `rgb(${LightGrayColors[0].join(',')})`,
  Gray2: `rgb(${LightGrayColors[1].join(',')})`,
  Gray3: `rgb(${LightGrayColors[2].join(',')})`,
  Gray4: `rgb(${LightGrayColors[3].join(',')})`,
  Gray5: `rgb(${LightGrayColors[4].join(',')})`,
  Gray6: `rgb(${LightGrayColors[5].join(',')})`,
  Text: 'rgb(28, 28, 30)',
  Link: 'rgb(100, 50, 200)',
  taskbar: 'rgba(200, 200, 200, 0.35)',
  bgImage: lightBackgroundImage,
};

export const Dark: DefaultTheme = {
  Gray: `rgb(${DarkGrayColors[0].join(',')})`,
  Gray2: `rgb(${DarkGrayColors[1].join(',')})`,
  Gray3: `rgb(${DarkGrayColors[2].join(',')})`,
  Gray4: `rgb(${DarkGrayColors[3].join(',')})`,
  Gray5: `rgb(${DarkGrayColors[4].join(',')})`,
  Gray6: `rgb(${DarkGrayColors[5].join(',')})`,
  Text: 'rgb(242, 242, 247)',
  Link: 'rgb(200, 180, 250)',
  taskbar: 'rgba(65, 65, 65, 0.35)',
  bgImage: darkBackgroundImage,
};
