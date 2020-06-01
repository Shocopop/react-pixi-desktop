import React, { useRef, useState, useImperativeHandle } from 'react';
import { useDrag, useHover, useMove } from 'react-use-gesture';
import { useSpring, animated, interpolate } from 'react-spring';
import { StyledPage, StyledPageHeader, StyledPageBody, StyledPageButton, StyledPageButtonDiv } from '../styled/StyledComponents';
import { PageRefType, ArrowDirections } from './types/PageTypes';
import { Tuple } from 'react-use-gesture/dist/types';
const resizeCursorDelta = 4;

const calculateNewSizeAndPosition = function(cursorState: number, x: number, y: number, w: number, h: number, dxy: Tuple<number>) {
  switch (cursorState) {
    case 1:
      h -= dxy[1];
      y += dxy[1];
      break;
    case 2:
      w += dxy[0];
      break;
    case 3:
      h -= dxy[1];
      y += dxy[1];
      w += dxy[0];
      break;
    case 4:
      h += dxy[1];
      break;
    case 6:
      h += dxy[1];
      w += dxy[0];
      break;
    case 8:
      w -= dxy[0];
      x += dxy[0];
      break;
    case 12:
      w -= dxy[0];
      x += dxy[0];
      h += dxy[1];
      break;
    case 9:
      w -= dxy[0];
      x += dxy[0];
      h -= dxy[1];
      y += dxy[1];
      break;
  }
  return [x, y, w, h];
};

const Page = React.forwardRef(
  (
    Props: {
      zIndex: number;
      name: string;
      page: React.FunctionComponent<{}>;
      minWidth: number;
      minHeight: number;
      width: number;
      height: number;
      onCloseCb: () => void;
      onFocusCb: () => void;
    },
    ref,
  ) => {
    const pinedPositionAndSizes = useRef([Props.width, Props.height, (window.innerWidth - Props.width) * 0.5, 100]);
    const [{ width, height }, setSize] = useSpring(() => ({ width: pinedPositionAndSizes.current[0], height: pinedPositionAndSizes.current[1] }));
    const [{ xy }, setPosition] = useSpring(() => ({ xy: [pinedPositionAndSizes.current[2], pinedPositionAndSizes.current[3]] }));
    const [hovering, setHovering] = useState(false);
    const [cursorState, setCursor] = useState(0);
    const bind = useDrag(
      ({ movement: [mx, my] }) => {
        if (cursorState === 0) setPosition({ xy: [mx, my], immediate: true });
      },
      {
        initial: () => [xy.get()[0], xy.get()[1]],
      },
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
          [x, y, w, h] = calculateNewSizeAndPosition(cursorState, x, y, w, h, dxy);
          setSize({ width: w, height: h, immediate: true });
          setPosition({ xy: [x, y], immediate: true });
        },
        pinPositionAndSizes: () => (pinedPositionAndSizes.current = [width.get(), height.get(), xy.get()[0], xy.get()[1]]),
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
        let sides = [false, false, false, false]; //[left, bot, right, top]
        if (Math.abs(pageX - xPos) < resizeCursorDelta) sides[0] = true;
        else if (Math.abs(pageX - xPos + width.get()) < resizeCursorDelta) sides[2] = true;
        if (Math.abs(pageY - yPos) < resizeCursorDelta) sides[3] = true;
        // + 24 is hardcoded - change!!
        else if (Math.abs(pageY - yPos + height.get() + 24) < resizeCursorDelta) sides[1] = true;
        // + 24 is hardcoded - change!!
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
