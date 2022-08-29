import React from 'react';
import { Provider } from 'react-redux';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPageColor } from '../../../global/configs/colors/BGPageColor';
import { HCS } from '../../../global/configs/HeadConfig';
import { BannerHome, BannerHomeProps } from '../../organisms/BannerHome';
import {
  FooterDefault,
  FooterDefaultProps,
} from '../../organisms/FooterDefault';
import { HeaderLogin, HeaderLoginContent } from '../../organisms/HeaderLogin';
import store from './store';
import UIContent from './UI/index.json';

type HomeTemplateProps = {
  data: {
    header: HeaderLoginContent;
    banner: BannerHomeProps;
    footer: FooterDefaultProps;
  };
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return (
    <Provider store={store}>
      <HCS.SocialLink />
      <BGPageColor bgColor={ProjectColors.BLUE} />
      <HeaderLogin content={data.header.content} UIcontent={UIContent.header} />
      <BannerHome content={data.banner.content} />
      <FooterDefault content={data.footer.content} />
    </Provider>
  );
};

export { HomeTemplate };
