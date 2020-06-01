import { Tuple } from 'react-use-gesture/dist/types';

export interface PageRefType {
  setPageSize: (dxy: Tuple<number>) => void;
  pinPositionAndSizes: () => void;
}

export const ArrowDirections: { [key: number]: string } = {
  0: 'pointer',
  1: 'ns-resize',
  2: 'ew-resize',
  3: 'nesw-resize',
  4: 'ns-resize',
  6: 'nwse-resize',
  8: 'ew-resize',
  9: 'nwse-resize',
  12: 'nesw-resize',
};
