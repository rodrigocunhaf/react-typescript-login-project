import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { LogoRender } from '../../atoms/FiguresRenders/LogoRender';
import { HLogoBoxes } from '../../atoms/Frames/Boxes';
import { RobotoH1 } from '../../atoms/Typographys';

export type LogoHeaderProps = {
  fileName: string;
  description: string;
  heading: string;
};

const HeaderLogo = ({ fileName, description, heading }: LogoHeaderProps) => {
  return (
    <HLogoBoxes.Container>
      <HLogoBoxes.ImageBox>
        <LogoRender description={description} fileName={fileName} />
      </HLogoBoxes.ImageBox>
      <RobotoH1.Default color={ProjectColors.BLUE}>{heading}</RobotoH1.Default>
    </HLogoBoxes.Container>
  );
};

export { HeaderLogo };
