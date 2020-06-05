import React, { useState, useEffect } from 'react';
import { StyledMenuBarWidget, VerticallyCenteredSpan, DropDown } from '../../styled/StyledComponents';

function getNewDate() {
  const d = new Date();
  return d;
}

export default function MenuBarClock() {
  const [date, setClockState] = useState(getNewDate());
  useEffect(() => {
    const interval = setInterval(() => {
      setClockState(getNewDate());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <StyledMenuBarWidget>
      <DropDown.Main style={{ height: '100%' }}>
        <VerticallyCenteredSpan style={{ height: '100%' }}>{date.toLocaleTimeString()}</VerticallyCenteredSpan>
        <DropDown.Content style={{ paddingTop: '4px' }}>
          <div>{date.toLocaleString()}</div>
        </DropDown.Content>
      </DropDown.Main>
    </StyledMenuBarWidget>
  );
}
