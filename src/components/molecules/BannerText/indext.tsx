import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { BTextBoxes } from '../../atoms/Frames/Boxes';
import { RobotoH2 } from '../../atoms/Typographys';
import { RobotoP } from '../../atoms/Typographys/Paragraphys';

export type BannerTextProps = {
  content: {
    title: string;
    paragraphy: string;
  };
};

const BannerText = ({ content }: BannerTextProps) => {
  return (
    <BTextBoxes.Container>
      <BTextBoxes.BoxTitle>
        <RobotoH2.Default color={ProjectColors.BLUE}>
          {content.title}
        </RobotoH2.Default>
      </BTextBoxes.BoxTitle>
      <BTextBoxes.BoxParagraphy>
        <RobotoP.Default>{content.paragraphy}</RobotoP.Default>
      </BTextBoxes.BoxParagraphy>
    </BTextBoxes.Container>
  );
};

export { BannerText };
