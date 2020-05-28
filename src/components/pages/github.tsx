import React from 'react';
import { StyledTitle, StyledText, StyledCard } from '../../styled/StyledComponents';

export default function Page() {
  return (
    <div className="align-center">
      <StyledTitle>React Projects</StyledTitle>
      <StyledCard>
        <StyledText>The first project is a web application that you are currently using ( that mac-like portfolio web app )</StyledText>
        <StyledText>
          <a href="https://github.com/Shocopop/react-pixi-desktop">react-pixi-desktop</a>
        </StyledText>
      </StyledCard>
      <StyledText>Runtimes/libraries used :</StyledText>
      <StyledCard>
        <StyledCard>
          <StyledText>Web-app</StyledText>
          <table>
            <tbody>
              <tr>
                <td>React</td>
              </tr>
              <tr>
                <td>Styled-Components</td>
              </tr>
              <tr>
                <td>React-Spring</td>
              </tr>
              <tr>
                <td>Typescript</td>
              </tr>
            </tbody>
          </table>
        </StyledCard>
        <StyledCard>
          <StyledText>Tetris Game</StyledText>
          <table>
            <tbody>
              <tr>
                <td>Pixi.js</td>
              </tr>
              <tr>
                <td>Typescript</td>
              </tr>
            </tbody>
          </table>
        </StyledCard>
      </StyledCard>
    </div>
  );
}
