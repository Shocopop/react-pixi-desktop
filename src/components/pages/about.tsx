import React, { useState } from 'react';
import {
  FlexContainer,
  StyledText,
  ButtonGroup,
  VerticallyCenteredSpan,
} from '../../styled/StyledComponents';
import about from './about/about';
import experience from './about/experience';
import github from './about/github';
import disclaimer from './about/disclaimer';

interface buttonInfoType {
  0: string;
  1: React.FunctionComponent<{}>;
  2: number;
}
const buttonsInfo: Array<buttonInfoType> = [
  ['Information', about, 0],
  ['Experience', experience, 1],
  ['Repository', github, 2],
  ['Disclaimer', disclaimer, 3],
];

export default function Page() {
  const [chosenButton, setChoosenButton] = useState(buttonsInfo[0]);
  return (
    <div>
      <ButtonGroup>
        {buttonsInfo.map((info, index) => (
          <div
            onMouseDown={() => {
              setChoosenButton(buttonsInfo[index]);
            }}
            key={index}
            className={index == chosenButton[2] ? 'checked' : ''}
          >
            {info[0]}
          </div>
        ))}
      </ButtonGroup>
      <div style={{ margin: '20px' }}>{React.createElement(chosenButton[1], {})}</div>
    </div>
  );
}
