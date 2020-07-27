import styled from 'styled-components';
import { animated } from 'react-spring';
import appConfig from '../appConfig';

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

export const StyledNavbarBlur = styled(animated.div)`
  position: fixed;
  backdrop-filter: blur(5px);
  bottom: 0;
  border-radius: 10px 10px 0px 0px;
`;

export const StyledNavbarBackground = styled.div`
  position: fixed;
  left: -2px;
  right: -2px;
  top: -2px;
  bottom: 0;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.4);
  background-color: ${props => props.theme.taskbar};
`;

export const StyledNavbar = styled(animated.div)`
  position: fixed;
  margin: auto;
  bottom: 0;
`;

export const StyledMenuBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${appConfig.menuBarHeight}px;
  padding: 3px;
  background-color: ${props => props.theme.menubar};
`;

export const StyledMenuBarCircle = styled.div`
  position: realtaive;
  float: left;
  margin: 2px 2px 2px 7px;
  width: ${appConfig.menuBarHeight - 10}px;
  height: ${appConfig.menuBarHeight - 10}px;
  border-radius: ${(appConfig.menuBarHeight - 4) * 0.5}px;
  background-color: ${props => props.theme.Gray6};
`;

export const StyledMenuBarWidget = styled.div`
  // position: realtaive;
  line-height: 100%;
  height: 100%;
  max-height: 100%;
  float: right;
  display: inline-block;
  margin-left: 15px;
  // & > div
`;

export const StyledPage = styled(animated.div)<{
  zindex: number;
  onMouseDown: () => void;
  style: React.StyleHTMLAttributes<HTMLElement>;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: ${props => props.zindex};
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.4);
`;

export const StyledPageHeader = styled.div`
  display: block;
  border-radius: 5px 5px 0 0;
  height: ${appConfig.pageHeaderHeight}px;
  width: 100%;
  padding: 2;
  background-color: ${props => props.theme.Gray3};
  text-align: center;
  -moz-box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.5);
`;

export const StyledPageBody = styled.div`
  margin: 0 auto;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.Gray4};
`;

export const StyledPageButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 24px;
  width: 60px;
  padding-left: 10px;
`;

const _styledPageButton = styled.div<{ hovering: boolean }>`
  width: 11px;
  height: 11px;
  margin-right: 5px;
  padding: 0px;
  top: 4px;
  border-radius: 50%;
  line-height: 16px;
  font-size: 12px;
  -moz-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4);
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

export const StyledText = styled.h5`
  font-size: 1em;
`;

export const StyledCard = styled.div`
  margin: 10px;
  box-shadow: -5px 0 5px -2px rgba(0, 0, 0, 0.4), 5px 0 5px -3px rgba(0, 0, 0, 0.4);
`;

export const VerticallyCenteredSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  & > div {
    // text-align: center;
    margin: 5px;
    padding: 5px;
  }
`;
export { ButtonGroup } from './ButtonGroup';
export { DropDown } from './DropDown';
