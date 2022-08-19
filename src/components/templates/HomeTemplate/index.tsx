import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPageColor } from '../../../global/configs/colors/BGPageColor';
import { HeaderLogin, HeaderLoginProps } from '../../organisms/HeaderLogin';

type HomeTemplateProps = {
  data: {
    header: HeaderLoginProps;
  };
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return (
    <>
      <BGPageColor bgColor={ProjectColors.BLUE} />
      <HeaderLogin content={data.header.content} />
    </>
  );
};

export { HomeTemplate };
