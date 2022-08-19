import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPainter } from '../../atoms/Frames/BGPainter';
import HeaderContainerFrames from '../../atoms/Frames/customs/HeaderContainerFrames';

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderContainerFrames.Header>
      <BGPainter color={ProjectColors.WHITE}>
        <HeaderContainerFrames.HeaderContainer>
          <HeaderContainerFrames.HeaderContent>
            {children}
          </HeaderContainerFrames.HeaderContent>
        </HeaderContainerFrames.HeaderContainer>
      </BGPainter>
    </HeaderContainerFrames.Header>
  );
};

export { HeaderContainer };
