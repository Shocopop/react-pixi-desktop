import React, { useRef, useState } from 'react';
import PageController from './PagesController';
import TaskBar from './TaskBar';
import MenuBar from './MenuBar';
import styled from 'styled-components';

const StyledDesktop = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default function Desktop(Props: {}) {
  const numPage = useRef((n: number) => {});
  function onNobTouch(n: number) {
    numPage.current(n);
  }
  console.log('render');
  return (
    <StyledDesktop>
      <MenuBar></MenuBar>
      <TaskBar onElementTap={onNobTouch}></TaskBar>
      <PageController cb={numPage}></PageController>
    </StyledDesktop>
  );
}
