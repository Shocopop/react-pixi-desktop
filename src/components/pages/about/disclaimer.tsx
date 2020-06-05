import React from 'react';
import { StyledText, FlexContainer } from '../../../styled/StyledComponents';

export default function disclaimer() {
  return (
    <div>
      <h3>Disclaimer</h3>
      <hr />
      <StyledText>
        This project is made purely for fun. It is far from being complete and awaits a lot more{' '}
        <b>featrues</b> and <b>fixes</b>.
      </StyledText>
    </div>
  );
}
