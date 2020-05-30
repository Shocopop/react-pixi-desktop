import React from 'react';

const circleStyle = {
  width: '45px',
  height: '45px',
  margin: '0px',
  alignItems: 'center',
};

export default function TopBarNob(Props: { name: string; image: string; num: number; cb(num: number): void }) {
  return (
    <div style={{ padding: '5px' }} className="align-middle" onClick={() => Props.cb(Props.num)}>
      <img style={circleStyle} src={Props.image} />
    </div>
  );
}
