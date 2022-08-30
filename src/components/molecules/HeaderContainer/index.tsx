import React from 'react';
import BGPainter from '../../atoms/BGPainter';
import { HContainerBoxes } from '../../atoms/CustomBoxes';

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <HContainerBoxes.Header>
      <BGPainter>
        <HContainerBoxes.HeaderContainer>
          <HContainerBoxes.HeaderContent>
            {children}
          </HContainerBoxes.HeaderContent>
        </HContainerBoxes.HeaderContainer>
      </BGPainter>
    </HContainerBoxes.Header>
  );
};

export { HeaderContainer };
