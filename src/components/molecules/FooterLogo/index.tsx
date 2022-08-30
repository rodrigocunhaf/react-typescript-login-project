import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { LogoRender } from '../../atoms/FiguresRenders/LogoRender';
import { FLogoBoxes } from '../../atoms/Frames/Boxes';
import RobotoP from '../../atoms/Typographys/Paragraphys/RobotoP';
import { whiteSmall } from '../../atoms/Typographys/Paragraphys/RobotoP/themes';

export type FooterLogoProps = {
  image: {
    description: string;
    filename: string;
  };
  title: string;
};

const FooterLogo = ({ image, title }: FooterLogoProps) => {
  return (
    <FLogoBoxes.Container>
      <FLogoBoxes.ImageBox>
        <LogoRender description={image.description} fileName={image.filename} />
      </FLogoBoxes.ImageBox>
      <RobotoP theme={whiteSmall}>{title}</RobotoP>
    </FLogoBoxes.Container>
  );
};

export { FooterLogo };
