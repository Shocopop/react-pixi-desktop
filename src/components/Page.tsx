import React, { useRef, useState, useImperativeHandle } from 'react';
import { useDrag, useHover, useMove } from 'react-use-gesture';
import { useSpring, animated, interpolate } from 'react-spring';
import {
  StyledPage,
  StyledPageHeader,
  StyledPageBody,
  StyledPageButton,
  StyledPageButtonDiv,
} from '../styled/StyledComponents';
import { PageRefType, ArrowDirections } from './types/PageTypes';
import { Tuple } from 'react-use-gesture/dist/types';
import appConfig from '../appConfig';
const resizeCursorDelta = 4;

const calculateNewSizeAndPosition = function(
  cursorState: number,
  x: number,
  y: number,
  w: number,
  h: number,
  minW: number,
  minH: number,
  dxy: Tuple<number>,
) {
  // make sure that minWidth and minHeight are preserved
  const rightMaxDW = Math.max(w + dxy[0], minW) - w;
  const leftMaxDW = Math.max(w - dxy[0], minW) - w;
  const topMaxDH = Math.max(h - dxy[1], minH) - h;
  const botMaxDH = Math.max(h + dxy[1], minH) - h;
  // make sure that the window doesn't go above the menu bar
  const topMaxDY = Math.max(appConfig.menuBarHeight + 1, y + dxy[1]) - y;
  const topDy = Math.min(topMaxDH, topMaxDY);

  switch (cursorState) {
    case 1:
      h -= topDy;
      y += topDy;
      break;
    case 2:
      w += rightMaxDW;
      break;
    case 3:
      h -= topDy;
      y += topDy;
      w += rightMaxDW;
      break;
    case 4:
      h += botMaxDH;
      break;
    case 6:
      h += botMaxDH;
      w += rightMaxDW;
      break;
    case 8:
      w += leftMaxDW;
      x -= leftMaxDW;
      break;
    case 12:
      w += leftMaxDW;
      x -= leftMaxDW;
      h += botMaxDH;
      break;
    case 9:
      w += leftMaxDW;
      x -= leftMaxDW;
      h -= topDy;
      y += topDy;
      break;
  }
  return [x, Math.max(y, appConfig.menuBarHeight + 1), w, h];
};

const Page = React.forwardRef(
  (
    Props: {
      zIndex: number;
      name: string;
      page: React.FunctionComponent<{}>;
      minWidth: number;
      minHeight: number;
      onCloseCb: () => void;
      onFocusCb: () => void;
    },
    ref,
  ) => {
    const pinedPositionAndSizes = useRef([
      Props.minWidth,
      Props.minHeight,
      (window.innerWidth - Props.minWidth) * 0.5,
      100,
    ]);
    const [{ width, height }, setSize] = useSpring(() => ({
      width: pinedPositionAndSizes.current[0],
      height: pinedPositionAndSizes.current[1],
    }));
    const [{ xy }, setPosition] = useSpring(() => ({
      xy: [pinedPositionAndSizes.current[2], pinedPositionAndSizes.current[3]],
    }));
    const [hovering, setHovering] = useState(false);
    const [cursorState, setCursor] = useState(0);
    const bind = useDrag(
      ({ movement: [mx, my] }) => {
        if (cursorState === 0)
          setPosition({ xy: [mx, Math.max(my, appConfig.menuBarHeight + 1)], immediate: true });
      },
      { initial: () => [xy.get()[0], xy.get()[1]] },
    );
    const hoverBind = useHover(active => {
      setHovering(active.hovering);
    });
    useImperativeHandle(
      ref,
      (): PageRefType => ({
        setPageSize: (dxy: Tuple<number>) => {
          if (cursorState === 0) return;
          let w = pinedPositionAndSizes.current[0],
            h = pinedPositionAndSizes.current[1];
          let x = pinedPositionAndSizes.current[2],
            y = pinedPositionAndSizes.current[3];
          [x, y, w, h] = calculateNewSizeAndPosition(
            cursorState,
            x,
            y,
            w,
            h,
            Props.minWidth,
            Props.minHeight,
            dxy,
          );
          setSize({ width: w, height: h, immediate: true });
          setPosition({ xy: [x, y], immediate: true });
        },
        pinPositionAndSizes: () =>
          (pinedPositionAndSizes.current = [width.get(), height.get(), xy.get()[0], xy.get()[1]]),
      }),
    );
    const moveBind = useMove(
      ({ down, movement: [mx, my], xy: [xPos, yPos] }) => {
        if (down) {
          return;
        }
        /**
         * transfrom the position of the mouse into the direction if the position is on the edge of the page
         * else the direction is 0
         * directions:
         * 9-1-3
         * 8-0-2
         *12-4-6
         */
        let [pageX, pageY] = xy.get();
        //sides = [left, bot, right, top]
        let sides = [false, false, false, false];
        if (Math.abs(pageX - xPos) < resizeCursorDelta) sides[0] = true;
        else if (Math.abs(pageX - xPos + width.get()) < resizeCursorDelta) sides[2] = true;
        if (Math.abs(pageY - yPos) < resizeCursorDelta) sides[3] = true;
        else if (Math.abs(pageY - yPos + height.get()) < resizeCursorDelta) sides[1] = true;
        let sidesTotalIndex = parseInt(sides.map(s => (+s).toString()).join(''), 2);
        setCursor(sidesTotalIndex);
      },
      { initial: () => [width.get(), height.get()] },
    );
    return (
      <StyledPage
        {...moveBind()}
        onMouseDown={() => {
          Props.onFocusCb();
        }}
        zindex={Props.zIndex}
        style={{
          transform: xy.interpolate((x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`),
          width: width.interpolate((width: number) => `${width}px`),
          height: height.interpolate((height: number) => `${height}px`),
          cursor: ArrowDirections[cursorState],
        }}
      >
        <StyledPageHeader {...bind()}>
          <StyledPageButtonDiv {...hoverBind()}>
            <StyledPageButton.Close onClick={Props.onCloseCb} hovering={hovering} />
            <StyledPageButton.Minimize onClick={Props.onCloseCb} hovering={hovering} />
            <StyledPageButton.Enlarge hovering={hovering} />
          </StyledPageButtonDiv>
          <span>{Props.name}</span>
        </StyledPageHeader>
        <StyledPageBody>{React.createElement(Props.page, {})}</StyledPageBody>
      </StyledPage>
    );
  },
);
export default Page;
