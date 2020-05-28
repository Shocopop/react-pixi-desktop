import React from 'react';

export default function StyledToggle(Props: { checked: boolean; onClick: (checked: boolean) => void }) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    Props.onClick(event.target.checked);
  }
  return (
    <div className="toggleDiv">
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={Props.checked} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
