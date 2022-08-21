import React from 'react';
import { BannerContainer } from '../../molecules/BannerContainer';
import { BannerImage, BannerImageProps } from '../../molecules/BannerImage';
import { BannerText, BannerTextProps } from '../../molecules/BannerText/indext';

export type BannerHomeProps = {
  content: {
    bannerText: BannerTextProps;
    bannerImage: BannerImageProps;
  };
};

const BannerHome = ({ content }: BannerHomeProps) => {
  return (
    <BannerContainer>
      <BannerText content={content.bannerText.content} />
      <BannerImage bgFileName={content.bannerImage.bgFileName} />
    </BannerContainer>
  );
};

export { BannerHome };
