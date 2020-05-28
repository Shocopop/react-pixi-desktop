import React from 'react';
import { StyledTitle, StyledText, StyledCard } from '../../styled/StyledComponents';

export default function Page() {
  return (
    <div>
      <StyledTitle>My Work Experience</StyledTitle>
      <StyledCard>
        <StyledText>
          I've been working for an Indie GameDev company <a href="http://xi-art.com/">XI-ART</a>
        </StyledText>
        <StyledText>Except for developing games I was also responsible for creating admin tools pages for every game with React and Pixi</StyledText>
        <StyledText>Pixi was used to make:</StyledText>
        <StyledCard>
          <table>
            <tbody>
              <tr>
                <td>Tools for level creation</td>
              </tr>
              <tr>
                <td>Gameplay replicas for every game to test levels faster</td>
              </tr>
            </tbody>
          </table>
        </StyledCard>

        <StyledText>I have been working for XI-ART for more than five years now</StyledText>
      </StyledCard>
      <StyledText>Technologies :</StyledText>
      <StyledCard>
        <table>
          <tbody>
            <tr>
              <td>JS, TS, React, Pixi.js, C#, Unity, Hlsl</td>
            </tr>
            <tr>
              <td>Lang: Eng(C1), Rus(Native), Polish(B1)</td>
            </tr>
          </tbody>
        </table>
      </StyledCard>
      <StyledText>Education :</StyledText>
      <StyledCard>
        <table>
          <tbody>
            <tr>
              <td>Warsaw University of Technology (October 2014 — 2018)</td>
            </tr>
            <tr>
              <td>Faculty of Mathematics and Information Science (MiNi)</td>
            </tr>
            <tr>
              <td>Computer Science</td>
            </tr>
          </tbody>
        </table>
      </StyledCard>
    </div>
  );
}
