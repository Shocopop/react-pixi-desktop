import React from 'react';
import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    bg: string;
    textColor: string;
    hrefColor: string;
  }
}

export const DarkModeContext = React.createContext({
  DarkMode: false,
  SetDarkMode: (darkMode: boolean): void => {},
});

export const Light: DefaultTheme = {
  primary: '#dddddd',
  secondary: '#aabbbb',
  bg: '#eeeeee',
  textColor: '#333333',
  hrefColor: 'rgba(100,50,200,0.8)',
};

export const Dark: DefaultTheme = {
  primary: '#333333',
  secondary: '#666666',
  bg: '#bbbbbb',
  textColor: '#aaaaaa',
  hrefColor: 'rgba(200,180,250,0.9)',
};
