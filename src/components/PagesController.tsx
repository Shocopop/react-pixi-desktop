import React, { useState, useRef } from 'react';
import * as pages_cfg from '../pages_cgf.json';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import Page from './Page';
const pages = require.context('./pages', false);

let Pages: Array<{ name: string; page: React.FunctionComponent<{}> }> = [];
for (let i = 0; i < pages_cfg.cfg.length; i++) Pages.push({ name: pages_cfg.cfg[i].name, page: pages(pages_cfg.cfg[i].page).default });
const nPages = Pages.length;

export default function PageController(Props: { cb: React.MutableRefObject<(n: number) => void> }) {
  const [pagesActiveness, setPages] = useState(new Array<number>());
  function setPageActive(n: number) {
    if (!pagesActiveness.includes(n)) setPages(pagesActiveness.concat(n));
  }
  function bringPageToFront(n: number) {
    if (pagesActiveness.includes(n)) setPages(_sortBy(pagesActiveness, _n => +(n === _n)));
  }
  function setPageInactive(n: number) {
    if (pagesActiveness.includes(n)) setPages(_filter(pagesActiveness, _n => n !== _n));
  }
  Props.cb.current = setPageActive;

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
      }}
    >
      {pagesActiveness.map((v, index) => (
        <Page
          key={v}
          name={Pages[v].name}
          page={Pages[v].page}
          zIndex={index}
          onCloseCb={() => setPageInactive(v)}
          onFocusCb={() => bringPageToFront(v)}
          minWidth={512}
          minHeight={512}
          width={512}
          height={512}
        />
      ))}
    </div>
  );
}
