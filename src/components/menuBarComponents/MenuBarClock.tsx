import React, { useState, useEffect } from 'react';
import { StyledMenuBarWidget, VerticallyCenteredSpan, DropDown } from '../../styled/StyledComponents';

const days: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function getDay(date: Date) {
  return days[date.getDay()];
}

function formatHHMM(date: Date) {
  function z(n: number) {
    return (n < 10 ? '0' : '') + n;
  }
  var h = date.getHours();
  return z(h % 12) + ':' + z(date.getMinutes()) + ' ' + (h < 12 ? 'AM' : 'PM');
}

export default function MenuBarClock() {
  const [date, setClockState] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setClockState(new Date());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <StyledMenuBarWidget>
      <DropDown.Main style={{ height: '100%' }}>
        <VerticallyCenteredSpan style={{ height: '100%' }}>
          {getDay(date)} {formatHHMM(date)}
        </VerticallyCenteredSpan>
        <DropDown.Content style={{ paddingTop: '4px' }}>
          <div>
            {date.toLocaleDateString()}
            <br />
            {getDay(date)} {formatHHMM(date)}
          </div>
        </DropDown.Content>
      </DropDown.Main>
    </StyledMenuBarWidget>
  );
}
