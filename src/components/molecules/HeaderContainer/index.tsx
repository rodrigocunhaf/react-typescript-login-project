import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPainter } from '../../atoms/Frames/BGPainter';
import { HContainerBoxes } from '../../atoms/Frames/Boxes';

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <HContainerBoxes.Header>
      <BGPainter color={ProjectColors.WHITE}>
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
