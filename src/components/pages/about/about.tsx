import React from 'react';
import { FlexContainer, StyledText, ButtonGroup, VerticallyCenteredSpan } from '../../../styled/StyledComponents';
import styled from 'styled-components';
const photo1 = require('../../../img/me4.jpg');

const FaceComponent = styled.img`
  position: relative;
  width: 140px;
  margin: 15px;
  padding: 1px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: inset 0 0 1px 0px white, 0 0 1px 0px white;
  pointer-events: none;
`;

export default function about() {
  return (
    <FlexContainer>
      <div style={{ flexGrow: 1 }}>
        <FaceComponent src={photo1}></FaceComponent>
      </div>
      <div style={{ flexGrow: 2 }}>
        <h3 style={{ marginBottom: '-5px' }}>
          <b>Anton</b> Chmyrov
        </h3>
        <h6 style={{ fontSize: '0.8em' }}>
          <b>Birthday</b> 10.06.1997
        </h6>
        <StyledText>
          <b>Nationality</b>&emsp;Belarus, Minks
        </StyledText>
        <StyledText>
          <b>Residence</b>&emsp;Poland, Warsaw
        </StyledText>
      </div>
    </FlexContainer>
  );
}
