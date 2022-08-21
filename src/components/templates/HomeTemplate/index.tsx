import React from 'react';
import { useAuthSelector } from '../../../context/store';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPageColor } from '../../../global/configs/colors/BGPageColor';
import { BannerHome, BannerHomeProps } from '../../organisms/BannerHome';
import { HeaderLogin, HeaderLoginProps } from '../../organisms/HeaderLogin';

type HomeTemplateProps = {
  data: {
    header: HeaderLoginProps;
    banner: BannerHomeProps;
  };
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  const authSelector = useAuthSelector((state) => state.auth);

  return (
    <>
      <BGPageColor bgColor={ProjectColors.BLUE} />
      <HeaderLogin content={data.header.content} />
      <BannerHome content={data.banner.content} />
    </>
  );
};

export { HomeTemplate };
