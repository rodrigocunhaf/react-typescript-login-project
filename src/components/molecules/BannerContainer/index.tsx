import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPainter } from '../../atoms/Frames/BGPainter';
import { BContainerBoxes } from '../../atoms/Frames/Boxes';

const BannerContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <BContainerBoxes.Container>
      <BGPainter color={ProjectColors.WHITE}>
        <BContainerBoxes.BoxContent>
          <BContainerBoxes.Content>{children}</BContainerBoxes.Content>
        </BContainerBoxes.BoxContent>
      </BGPainter>
    </BContainerBoxes.Container>
  );
};

export { BannerContainer };
