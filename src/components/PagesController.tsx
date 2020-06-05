import React, { useState, useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import Page from './Page';
import { PageRefType, PagesConfig, PageConfigType } from './types/PageTypes';
const pages = require.context('./pages', false);

let Pages: Array<{ page: React.FunctionComponent<{}>; cfg: PageConfigType }> = [];
for (let i = 0; i < PagesConfig.length; i++)
  Pages.push({ page: pages(PagesConfig[i].page).default, cfg: PagesConfig[i] });
const nPages = Pages.length;

export default function PageController(Props: { cb: React.MutableRefObject<(n: number) => void> }) {
  const [pagesActiveness, setPages] = useState(new Array<number>());
  const dragCallBackRef = useRef<PageRefType>();
  function setPageActive(n: number) {
    if (!pagesActiveness.includes(n)) setPages(pagesActiveness.concat(n));
    else bringPageToFront(n);
  }
  function bringPageToFront(n: number) {
    if (pagesActiveness.includes(n)) setPages(_sortBy(pagesActiveness, _n => +(n === _n)));
  }
  function setPageInactive(n: number) {
    if (pagesActiveness.includes(n)) setPages(_filter(pagesActiveness, _n => n !== _n));
  }
  const bind = useDrag(
    ({ down, movement }) => {
      if (down && dragCallBackRef.current) {
        dragCallBackRef.current.setPageSize(movement);
      }
    },
    {
      initial: () => {
        if (dragCallBackRef.current) dragCallBackRef.current.pinPositionAndSizes();
        return [0, 0];
      },
    },
  );
  // change this !!
  Props.cb.current = setPageActive;
  // change this !!

  return (
    <div
      {...bind()}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
      }}
    >
      {pagesActiveness.map((v, index) => (
        <Page
          ref={dragCallBackRef}
          key={v}
          name={Pages[v].cfg.name}
          page={Pages[v].page}
          minWidth={Pages[v].cfg.minWidth}
          minHeight={Pages[v].cfg.minHeight}
          zIndex={index}
          onCloseCb={() => setPageInactive(v)}
          onFocusCb={() => bringPageToFront(v)}
        />
      ))}
    </div>
  );
}
