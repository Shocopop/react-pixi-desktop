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
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const lastPosRef = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (!down) {
      lastPosRef.current = { x: lastPosRef.current.x + mx, y: lastPosRef.current.y + my };
      set({ x: lastPosRef.current.x, y: lastPosRef.current.y, immediate: true });
    } else {
      set({ x: lastPosRef.current.x + mx, y: lastPosRef.current.y + my, immediate: true });
    }
  });
  const hoverBind = useHover(active => {
    setHovering(active.hovering);
  });
  return (
    <StyledPage onMouseDown={Props.onFocusCb} zindex={Props.zIndex} style={{ x, y }}>
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
