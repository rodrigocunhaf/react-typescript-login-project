import React from 'react';
import { BTextBoxes } from '../../atoms/Frames/Boxes';
import RobotoH2 from '../../atoms/Typographys/Headings/RobotoH2';
import { greaterBlueH2 } from '../../atoms/Typographys/Headings/RobotoH2/themes';
import RobotoP from '../../atoms/Typographys/Paragraphys/RobotoP';

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
        <RobotoH2 theme={greaterBlueH2}>{content.title}</RobotoH2>
      </BTextBoxes.BoxTitle>
      <BTextBoxes.BoxParagraphy>
        <RobotoP>{content.paragraphy}</RobotoP>
      </BTextBoxes.BoxParagraphy>
    </BTextBoxes.Container>
  );
};

export { BannerText };
