import React from 'react';
import BGPainter from '../../atoms/BGPainter';
import { BContainerBoxes } from '../../atoms/CustomBoxes';

const BannerContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <BContainerBoxes.Container>
      <BGPainter>
        <BContainerBoxes.BoxContent>
          <BContainerBoxes.Content>{children}</BContainerBoxes.Content>
        </BContainerBoxes.BoxContent>
      </BGPainter>
    </BContainerBoxes.Container>
  );
};

export { BannerContainer };
