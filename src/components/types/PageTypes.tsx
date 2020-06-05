import { Tuple } from 'react-use-gesture/dist/types';

export interface PageRefType {
  setPageSize: (dxy: Tuple<number>) => void;
  pinPositionAndSizes: () => void;
}

export const ArrowDirections: { [key: number]: string } = {
  0: 'auto',
  1: 'ns-resize',
  2: 'ew-resize',
  3: 'nesw-resize',
  4: 'ns-resize',
  6: 'nwse-resize',
  8: 'ew-resize',
  9: 'nwse-resize',
  12: 'nesw-resize',
};

export interface PageConfigType {
  image: string;
  name: string;
  page: string;
  minWidth: number;
  minHeight: number;
}
export const PagesConfig: Array<PageConfigType> = [
  { image: './info.png', name: 'About', page: './about.tsx', minWidth: 512, minHeight: 320 },
  { image: './settings.png', name: 'Preferences', page: './preferences.tsx', minWidth: 300, minHeight: 130 },
  { image: './puzzle.png', name: 'Tetris', page: './tetris.tsx', minWidth: 600, minHeight: 600 },
];
