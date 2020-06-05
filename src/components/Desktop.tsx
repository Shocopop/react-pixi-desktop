import React, { useRef, useState } from 'react';
import PageController from './PagesController';
import TaskBar from './TaskBar';
import MenuBar from './MenuBar';

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
      <MenuBar></MenuBar>
      <TaskBar onElementTap={onNobTouch}></TaskBar>
      <PageController cb={numPage}></PageController>
    </div>
  );
}
