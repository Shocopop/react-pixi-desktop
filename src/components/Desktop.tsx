import React, { useRef, useState } from 'react';
import PageController from './PagesController';
import TaskBar from './TaskBar';
import MenuBar from './MenuBar';

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
