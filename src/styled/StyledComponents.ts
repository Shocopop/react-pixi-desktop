import styled, { createGlobalStyle } from 'styled-components';
import { animated } from 'react-spring';

export const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  user-select: none;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.textColor};
`;

export const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 5px;
  background-color: ${props => props.theme.primary};
  user-select: text;
`;

export const StyledNavbar = styled(animated.div)`
  position: relative;
  top: -2px;
  margin: auto;
  border: 2px solid #dddddd;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 0px 0px 30px 30px;
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
  background-color: ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.secondary};
  text-align: center;
`;

export const StyledPageBody = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 10px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.primary};
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
  border: ${props => (props.hovering ? 'none' : '1px solid ' + props.theme.secondary)};
`;

export const StyledPageButton = {
  Close: styled(_styledPageButton)`
    left: 4px;
    background-color: ${props => (props.hovering ? 'rgba(255, 50, 50, 0.9)' : props.theme.primary)};
  `,

  Minimize: styled(_styledPageButton)`
    left: 22px;
    background-color: ${props => (props.hovering ? 'rgba(255, 255, 50, 0.9)' : props.theme.primary)};
  `,

  Enlarge: styled(_styledPageButton)`
    left: 40px;
    background-color: ${props => (props.hovering ? 'rgba(50, 255, 50, 0.9)' : props.theme.primary)};
  `,
};

export const StyledTitle = styled.h2`
  padding: 15px;
  text-align: center;
`;

export const StyledText = styled.h5`
  text-align: left;
  padding: 8px;
  max-width: 400px;
`;

export const StyledCard = styled.div`
  margin: 10px;
  box-shadow: -5px 0 5px -2px rgba(0, 0, 0, 0.4), 5px 0 5px -3px rgba(0, 0, 0, 0.4);
`;
