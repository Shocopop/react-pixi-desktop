import React, { useRef, useState } from 'react';
import { useDrag, useHover, useMove } from 'react-use-gesture';
import { useSpring, animated, interpolate } from 'react-spring';
import { StyledPage, StyledPageHeader, StyledPageBody, StyledPageButton, StyledPageButtonDiv } from '../styled/StyledComponents';
const resizeCursorDelta = 3;

export default function Page(Props: {
  zIndex: number;
  name: string;
  page: React.FunctionComponent<{}>;
  minWidth: number;
  minHeight: number;
  width: number;
  height: number;
  onCloseCb: () => void;
  onFocusCb: () => void;
}) {
  const [{ width, height }, setSize] = useSpring(() => ({ width: Props.width, height: Props.height }));
  const [{ xy }, setPosition] = useSpring(() => ({ xy: [(window.innerWidth - Props.width) * 0.5, 100] }));
  const [hovering, setHovering] = useState(false);
  const bind = useDrag(({ movement: [mx, my] }) => setPosition({ xy: [mx, my], immediate: true }), { initial: () => [xy.get()[0], xy.get()[1]] });
  const hoverBind = useHover(active => {
    setHovering(active.hovering);
  });
  const moveBind = useMove(({ xy: [xPos, yPos] }) => {
    let [pageX, pageY] = xy.get();
    let left = Math.abs(pageX - xPos) < resizeCursorDelta;
    let right = Math.abs(pageX - xPos + width.get()) < resizeCursorDelta;
    let top = Math.abs(pageY - yPos) < resizeCursorDelta;
    let bot = Math.abs(pageY - yPos + height.get()) < resizeCursorDelta;
    console.log(left, top, right, bot);
  });
  console.log('render');
  return (
    <StyledPage
      {...moveBind()}
      onMouseDown={Props.onFocusCb}
      zindex={Props.zIndex}
      style={{
        transform: xy.interpolate((x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`),
        width: width.interpolate((width: number) => `${width}px`),
        height: height.interpolate((height: number) => `${height}px`),
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
}
