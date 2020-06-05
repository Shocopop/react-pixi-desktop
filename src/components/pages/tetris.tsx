import React from 'react';
import { useEffect, useRef } from 'react';
import InitTetris from '../tetris/main';

export default function Page() {
  const pixiDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tetrisApp = InitTetris(pixiDivRef.current);
    return () => {
      tetrisApp.Destroy();
    };
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div ref={pixiDivRef} style={{ width: '512px', height: '512px', margin: 'auto' }}></div>
    </div>
  );
}
