import React from 'react';
import { useAuthSelector } from '../../../context/store';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPageColor } from '../../../global/configs/colors/BGPageColor';
import { HCH, HCS } from '../../../global/configs/HeadConfig';
import { BannerHome, BannerHomeProps } from '../../organisms/BannerHome';
import {
  FooterDefault,
  FooterDefaultProps,
} from '../../organisms/FooterDefault';
import { HeaderLogin, HeaderLoginProps } from '../../organisms/HeaderLogin';

type HomeTemplateProps = {
  data: {
    header: HeaderLoginProps;
    banner: BannerHomeProps;
    footer: FooterDefaultProps;
  };
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  const authSelector = useAuthSelector((state) => state.auth);

  return (
    <>
      <HCH.Head>
        <HCS.SocialLink />
      </HCH.Head>
      <BGPageColor bgColor={ProjectColors.BLUE} />
      <HeaderLogin content={data.header.content} />
      <BannerHome content={data.banner.content} />
      <FooterDefault content={data.footer.content} />
    </>
  );
};

export { HomeTemplate };
