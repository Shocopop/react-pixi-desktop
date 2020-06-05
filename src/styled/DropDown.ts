import styled from 'styled-components';

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  text-align: center;
  right: 0;
  background-color: ${props => props.theme.menubar};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  padding: 5px;
  z-index: 1;
`;

const DropDownMain = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    background-color: ${props => props.theme.Gray};
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const DropDown = {
  Main: DropDownMain,
  Content: DropDownContent,
};
