import styled from 'styled-components';

export const ButtonGroup = styled.div`
  text-align: center;
  display: block;
  cursor: pointer;
  font-size: 1em;
  &:after {
    content: '';
    clear: both;
    display: table;
  }
  & div:not(:last-child) {
    border-right: 1px solid ${props => props.theme.Gray4};
  }
  & div:last-child {
    border-radius: 0 5px 5px 0;
  }
  & div:first-child {
    border-radius: 5px 0 0 5px;
  }
  & div:hover {
    background-color: ${props => props.theme.Gray5};
  }
  div {
    display: inline-block;
    padding: 0px 6px 0px 6px;
    color: ${props => props.theme.Text};
    background-color: ${props => props.theme.Gray3};
    &.checked {
      background-color: ${props => props.theme.Gray};
      color: ${props => props.theme.Gray3};
    }
  }
`;
