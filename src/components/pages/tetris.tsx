import React from 'react';
import { useEffect, useRef } from 'react';
import InitTetris from '../tetris/main';

export default function Page() {
  const pixiDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('colors changed');
    const tetrisApp = InitTetris(pixiDivRef.current);
    return () => {
      tetrisApp.Destroy();
    };
  }, []);
  return <div ref={pixiDivRef} style={{ width: '512px', height: '512px' }}></div>;
}
