import React, { useRef, useState } from 'react';
import { useDrag, useHover } from 'react-use-gesture';
import { useSpring, animated, interpolate } from 'react-spring';
import { StyledPage, StyledPageHeader, StyledPageBody, StyledPageButton, StyledPageButtonDiv } from '../styled/StyledComponents';

export default function Page(Props: {
  zIndex: number;
  name: string;
  page: React.FunctionComponent<{}>;
  onCloseCb: () => void;
  onFocusCb: () => void;
}) {
  const [pos, set] = useSpring(() => ({ x: 0, y: 0 }));
  const lastPosRef = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (!down) {
      lastPosRef.current = { x: lastPosRef.current.x + mx, y: lastPosRef.current.y + my };
      set({ x: lastPosRef.current.x, y: lastPosRef.current.y, config: { friction: 200, tension: 10000 } });
    } else {
      set({ x: lastPosRef.current.x + mx, y: lastPosRef.current.y + my, config: { friction: 200, tension: 10000 } });
    }
  });
  const hoverBind = useHover(active => {
    setHovering(active.hovering);
  });
  return (
    <StyledPage
      onMouseDown={Props.onFocusCb}
      zindex={Props.zIndex}
      style={{ transform: interpolate([pos.x, pos.y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}
    >
      <StyledPageHeader {...bind()}>
        <StyledPageButtonDiv {...hoverBind()}>
          <StyledPageButton.Close onClick={Props.onCloseCb} hovering={hovering} />
          <StyledPageButton.Minimize hovering={hovering} />
          <StyledPageButton.Enlarge hovering={hovering} />
        </StyledPageButtonDiv>
        <span>{Props.name}</span>
      </StyledPageHeader>
      <StyledPageBody>{React.createElement(Props.page, {})}</StyledPageBody>
    </StyledPage>
  );
}
