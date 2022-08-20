import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuthSelector } from '../../../context/store';
import { ProjectColors } from '../../../global/configs/colors';
import { BGPageColor } from '../../../global/configs/colors/BGPageColor';
import { HeaderLogin, HeaderLoginProps } from '../../organisms/HeaderLogin';

type HomeTemplateProps = {
  data: {
    header: HeaderLoginProps;
  };
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  const authSelector = useAuthSelector((state) => state.auth);

  return (
    <>
      <BGPageColor bgColor={ProjectColors.BLUE} />
      <HeaderLogin content={data.header.content} />
      {authSelector.logged === true && <div>logged!</div>}
      {authSelector.logged === false && <div>disllogged!</div>}
    </>
  );
};

export { HomeTemplate };
