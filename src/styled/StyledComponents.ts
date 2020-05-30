import styled, { createGlobalStyle } from 'styled-components';
import { animated } from 'react-spring';

export const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  user-select: none;
  background-image: url(${props => props.theme.bgImage});
  background-size: cover;
  color: ${props => props.theme.Text};
`;

export const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 5px;
  background-color: ${props => props.theme.Gray4};
  user-select: text;
`;

export const StyledNavbarBlur = styled(animated.div)`
  position: fixed;
  backdrop-filter: blur(15px);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0px 0px 10px 10px;
`;

export const StyledNavbarBackground = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.4);
  background-color: ${props => props.theme.taskbar};
`;

export const StyledNavbar = styled(animated.div)`
  position: relative;
  margin: auto;
  border-radius: 0px 0px 10px 10px;
`;

export const StyledPage = styled(animated.div)<{ zindex: number; onMouseDown: () => void; style: React.StyleHTMLAttributes<HTMLElement> }>`
  position: absolute;
  z-index: ${props => props.zindex};
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.4);
  margin: auto;
  border-radius: 5px;
`;

export const StyledPageHeader = styled.div`
  border-radius: 5px 5px 0 0;
  height: 24px;
  padding: 2;
  background-color: ${props => props.theme.Gray3};
  text-align: center;
  -moz-box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.5);
`;

export const StyledPageBody = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.Gray4};
`;

export const StyledPageButtonDiv = styled.div`
  position: absolute;
  height: 24px;
  width: 60px;
`;

const _styledPageButton = styled.div<{ hovering: boolean }>`
  position: absolute;
  width: 16px;
  height: 16px;
  padding: 0px;
  top: 4px;
  border-radius: 50%;
  line-height: 16px;
  font-size: 12px;
  -moz-box-shadow:    inset 0 0 1px rgba(0,0,0,0.4);
  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.4);
  box-shadow:         inset 0 0 1px rgba(0,0,0,0.4);
  // border: ${props => (props.hovering ? 'none' : '1px solid ' + props.theme.Gray5)};
`;

export const StyledPageButton = {
  Close: styled(_styledPageButton)`
    left: 4px;
    background-color: ${props => (props.hovering ? 'rgba(255, 50, 50, 0.9)' : props.theme.Gray2)};
  `,

  Minimize: styled(_styledPageButton)`
    left: 22px;
    background-color: ${props => (props.hovering ? 'rgba(255, 255, 50, 0.9)' : props.theme.Gray2)};
  `,

  Enlarge: styled(_styledPageButton)`
    left: 40px;
    background-color: ${props => (props.hovering ? 'rgba(50, 255, 50, 0.9)' : props.theme.Gray2)};
  `,
};

export const StyledTitle = styled.h4`
  padding: 15px;
  text-align: center;
`;

export const StyledText = styled.h6`
  text-align: left;
  padding: 8px;
  max-width: 400px;
`;

export const StyledCard = styled.div`
  margin: 10px;
  box-shadow: -5px 0 5px -2px rgba(0, 0, 0, 0.4), 5px 0 5px -3px rgba(0, 0, 0, 0.4);
`;
