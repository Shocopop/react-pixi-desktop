import React, { useRef, useState } from 'react';
import PageController from './PagesController';
import TopBar from './TopBar';
import { StyledPage, StyledPageHeader, StyledPageBody, StyledPageButton, StyledPageButtonDiv } from '../styled/StyledComponents';

// lazy preload light and dark bg
// change later
import lightBackgroundImage from '../img/mojave-day-1080.jpg';
import darkBackgroundImage from '../img/mojave-night-1080.jpg';
new Image().src = lightBackgroundImage;
new Image().src = darkBackgroundImage;
// change later

export default function Desktop(Props: {}) {
  const numPage = useRef((n: number) => {});
  function onNobTouch(n: number) {
    numPage.current(n);
  }
  console.log('render');
  return (
    <div>
      <TopBar onElementTap={onNobTouch}></TopBar>
      <PageController cb={numPage}></PageController>
    </div>
  );
}
