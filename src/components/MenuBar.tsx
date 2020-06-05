import React, { useState } from 'react';
import { StyledMenuBar, StyledMenuBarCircle } from '../styled/StyledComponents';
import MenuBarClock from './menuBarComponents/MenuBarClock';
import MenuBarWeather from './menuBarComponents/MenuBarWeather';
import MenuBarMainMenu from './menuBarComponents/MenuBarMainMenu';

export default function MenuBar() {
  //   const DarkMode = useContext(DarkModeContext);
  return (
    <StyledMenuBar>
      <MenuBarMainMenu></MenuBarMainMenu>
      <MenuBarClock></MenuBarClock>
      <MenuBarWeather></MenuBarWeather>
    </StyledMenuBar>
  );
}
