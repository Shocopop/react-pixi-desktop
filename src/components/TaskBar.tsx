import React, { useRef } from 'react';
import { StyledNavbar, StyledNavbarBackground, StyledNavbarBlur, StyledNavbarContainer } from '../styled/StyledComponents';
import NavBarNob from './TopBarNob';
import { useGesture } from 'react-use-gesture';
import { useSpring, useSprings, interpolate, animated } from 'react-spring';
import { clamp } from 'lodash';
import * as pages_cfg from '../pages_cgf.json';
const images = require.context('../img', false);

let Nobs: Array<{ name: string; img: string }> = [];
for (let i = 0; i < pages_cfg.cfg.length; i++) Nobs.push({ name: pages_cfg.cfg[i].name, img: images(pages_cfg.cfg[i].image) });

const NumNobs = Nobs.length;
const NobsMidNum = NumNobs * 0.5 - 0.5;
const NobsDx = 55;
const dxMovement = 20;
const barWidth = NobsDx * NumNobs;
const barWidthEnlarged = barWidth + dxMovement * 3;
const barScaleEnlarged = barWidthEnlarged / barWidth;
const dScaleSize = 0.3;
const to = (dn: number, isActive: boolean) => {
  if (!isActive) return { x: 0, y: 0, scale: 1 };
  const dsize = clamp(dn, -1.5, 1.5);
  const _dscale = (1.5 - Math.abs(dsize)) * dScaleSize;
  return { x: dsize * dxMovement, y: -_dscale * NobsDx * 0.5, scale: _dscale + 1 };
};

export default function TaskBar(Props: { onElementTap: (n: number) => void }) {
  const [springs, setNobs] = useSprings(NumNobs, i => ({ ...to(0, false) }));
  const [barSpring, setBarScaleAndPos] = useSpring(() => ({ scale: 1, x: NobsMidNum }));
  const bind = useGesture({
    onMove: ({ xy }) => {
      const dx = xy[0] - window.innerWidth * 0.5;
      const mouseNx = clamp(NobsMidNum + dx / NobsDx, 0, NumNobs - 1);
      const barOnSidesScale = (Math.max(1 - mouseNx, 0) + Math.max(mouseNx - NumNobs + 2, 0)) * (barScaleEnlarged - 1) * 0.5;
      setBarScaleAndPos({
        scale: barScaleEnlarged - barOnSidesScale,
        x: (NobsMidNum - mouseNx) * dxMovement * barOnSidesScale * 0.5,
      });
      setNobs(i => {
        const { x, y, scale } = to(i - mouseNx, true);
        return { x, y, scale, config: { friction: 50, tension: 500 } };
      });
    },
    onHover: active => {
      if (!active.hovering) {
        setNobs(i => to(0, false));
        setBarScaleAndPos({ scale: 1, x: NobsMidNum });
      }
    },
  });

  return (
    <StyledNavbarContainer style={{ zIndex: NumNobs + 1 }}>
      <StyledNavbar
        style={{
          transform: interpolate([barSpring.scale, barSpring.x], (scale, x) => `translate3d(${x}px,0,0) scale(${scale}, 1)`),
          width: NobsDx * (NumNobs + 0.5) + 'px',
        }}
        {...bind()}
      >
        <StyledNavbarBackground></StyledNavbarBackground>
        <StyledNavbarBlur></StyledNavbarBlur>
        <animated.div
          style={{
            transform: interpolate([barSpring.scale], scale => `scale(${1 / scale}, 1)`),
          }}
        >
          <div style={{ textAlign: 'center' }}>
            {springs.map(({ x, y, scale }, i) => (
              <animated.div
                key={i}
                style={{
                  display: 'inline-block',
                  transform: interpolate([x, y, scale], (x, y, scale) => `translate3d(${x}px,${y}px,0) scale(${scale})`),
                }}
              >
                <NavBarNob name={Nobs[i].name} image={Nobs[i].img} num={i} cb={Props.onElementTap}></NavBarNob>
              </animated.div>
            ))}
          </div>
        </animated.div>
      </StyledNavbar>
    </StyledNavbarContainer>
  );
}
