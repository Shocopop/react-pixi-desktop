import React, { useContext, useState, useEffect } from 'react';
import { DarkModeContext } from '../../styled/Themes';
import StyledToggle from '../../styled/StyledToggle';
import { StyledCard } from '../../styled/StyledComponents';

export default function Page() {
  const DarkMode = useContext(DarkModeContext);
  return (
    <StyledCard>
      <div style={{ minWidth: '200px', padding: '30px' }}>
        <span>Dark Mode :</span>
        <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <StyledToggle
            checked={DarkMode.DarkMode}
            onClick={(checked: boolean) => {
              DarkMode.SetDarkMode(checked);
            }}
          ></StyledToggle>
        </div>
      </div>
    </StyledCard>
  );
}
