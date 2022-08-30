import React from 'react';
import { ImageBannerRender } from '../../atoms/FiguresRenders/ImageBannerRender';
import { BImageBoxes } from '../../atoms/CustomBoxes';

export type BannerImageProps = {
  bgFileName: string;
};

const BannerImage = ({ bgFileName }: BannerImageProps) => {
  return (
    <BImageBoxes.ImageBox>
      <ImageBannerRender bgFileName={bgFileName} />
    </BImageBoxes.ImageBox>
  );
};

export { BannerImage };
