import React, { useState, useEffect } from 'react';
import { StyledMenuBarCircle, VerticallyCenteredSpan, DropDown } from '../../styled/StyledComponents';

export default function MenuBarMainMenu() {
  return (
    <DropDown.Main>
      <StyledMenuBarCircle></StyledMenuBarCircle>
      {/* <VerticallyCenteredSpan>{date.toLocaleTimeString()}</VerticallyCenteredSpan> */}
      <DropDown.Content style={{ left: 0, marginTop: 22 }}>
        <div> menu1 </div>
        <div> menu2 </div>
        <div> menu3 </div>
        <div> menu4 </div>
      </DropDown.Content>
    </DropDown.Main>
  );
}
