import React from 'react';
import { StyledText, FlexContainer } from '../../../styled/StyledComponents';

export default function experience() {
  return (
    <div>
      <h3>Work Experience</h3>
      <hr />
      <StyledText>
        I've been working for an Indie GameDev company <a href="http://xi-art.com/">XI-ART</a> more than <b>5</b> years now.
      </StyledText>
      <StyledText>Last 2 years I was responsible for creating administrative tools for every game.</StyledText>
      <div style={{ marginLeft: '10px' }}>
        <hr />
        <FlexContainer style={{ alignItems: 'flex-start', marginTop: '15px' }}>
          <div style={{ flexGrow: 1 }}>
            <h5>
              <b>Technologies</b>
            </h5>
          </div>
          <div style={{ flexGrow: 2 }}>
            <b>
              <div>JS, TS, React, Pixi.js</div>
              <div>Eng(C1), Rus(Native), Polish(B1)</div>
              <div> C#, Unity, Hlsl</div>
            </b>
          </div>
        </FlexContainer>
        <hr />
        <FlexContainer style={{ alignItems: 'flex-start', marginTop: '15px' }}>
          <div style={{ flexGrow: 1 }}>
            <h6>
              <b>Education</b>
            </h6>
          </div>
          <div style={{ flexGrow: 2 }}>
            <div>Warsaw University of Technology</div>
            <div>Faculty of Mathematics and Information Science (MiNi)</div>
            <div>Computer Science</div>
          </div>
        </FlexContainer>
      </div>
    </div>
  );
}
