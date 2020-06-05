import React from 'react';
import { StyledText, FlexContainer } from '../../../styled/StyledComponents';

export default function github() {
  return (
    <div>
      <h3>Repository</h3>
      <hr />
      <StyledText>This web applocation is available on github as an open-source project.</StyledText>
      <StyledText className="align-center">
        <b>Link</b>&emsp;
        <a href="https://github.com/Shocopop/react-pixi-desktop">react-pixi-desktop</a>
      </StyledText>
      <hr />
      <FlexContainer style={{ alignItems: 'flex-start', marginTop: '15px' }}>
        <div style={{ flexGrow: 1 }}>
          <h4>Runtimes/libraries</h4>
        </div>
        <div style={{ flexGrow: 2, textAlign: 'left' }}>
          <div>React</div>
          <div>Typescript</div>
          <div>Pixi.js</div>
          <div>Styled-Components</div>
          <div>React-Spring</div>
        </div>
      </FlexContainer>
    </div>
  );
}
