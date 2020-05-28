import React from 'react';
import { StyledTitle, StyledText, StyledCard } from '../../styled/StyledComponents';
const photo1 = require('../../img/me.jpg');
const photo2 = require('../../img/me2.jpg');

export default function Page() {
  return (
    <div style={{ display: 'inline-block' }}>
      <StyledTitle>Personal Information</StyledTitle>
      <StyledCard>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td className="align-right">Anton Chmyrov</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td className="align-right">Belarus, Minsk</td>
            </tr>
            <tr>
              <td>Residence</td>
              <td className="align-right">Poland, Warsaw</td>
            </tr>
          </tbody>
        </table>
      </StyledCard>
      <StyledCard>
        <img src={photo1} style={{ width: '140px', margin: '15px', display: 'inline-block' }} />
        <img src={photo2} style={{ width: '188px', margin: '15px', display: 'inline-block' }} />
      </StyledCard>
    </div>
  );
}
