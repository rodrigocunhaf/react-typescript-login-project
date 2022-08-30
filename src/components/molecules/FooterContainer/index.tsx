import React from 'react';
import { FContainerBoxes } from '../../atoms/CustomBoxes';

const FooterContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <FContainerBoxes.Footer>
      <FContainerBoxes.Content>{children}</FContainerBoxes.Content>
    </FContainerBoxes.Footer>
  );
};

export { FooterContainer };
