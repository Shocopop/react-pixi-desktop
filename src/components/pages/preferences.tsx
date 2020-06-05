import React, { useContext } from 'react';
import { DarkModeContext } from '../../styled/Themes';
import StyledToggle from '../../styled/StyledToggle';
import { FlexContainer } from '../../styled/StyledComponents';
import Cookies from 'js-cookie';

export default function Page() {
  const DarkMode = useContext(DarkModeContext);
  return (
    <FlexContainer style={{ justifyContent: 'center', marginTop: '15px' }}>
      <div>
        <h5>
          <b>Dark Mode</b>
        </h5>
      </div>
      <div>
        <StyledToggle
          checked={DarkMode.DarkMode}
          onClick={(checked: boolean) => {
            DarkMode.SetDarkMode(checked);
            Cookies.set('darkMode', (+checked).toString());
          }}
        ></StyledToggle>
      </div>
    </FlexContainer>
  );
}
