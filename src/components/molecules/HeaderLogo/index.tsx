import React from 'react';
import { LogoRender } from '../../atoms/FiguresRenders/LogoRender';
import { HLogoBoxes } from '../../atoms/CustomBoxes';
import RobotoH1 from '../../atoms/Typographys/Headings/RobotoH1';
import { mediumBlue } from '../../atoms/Typographys/Headings/RobotoH1/themes';

export type LogoHeaderProps = {
  fileName: string;
  description: string;
  heading: string;
};

const HeaderLogo = ({ fileName, description, heading }: LogoHeaderProps) => {
  return (
    <HLogoBoxes.Container>
      <HLogoBoxes.ImageBox>
        <LogoRender fileName={fileName} description={description} />
      </HLogoBoxes.ImageBox>
      <RobotoH1 theme={mediumBlue}>{heading}</RobotoH1>
    </HLogoBoxes.Container>
  );
};

export { HeaderLogo };
