import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { LogoRender } from '../../atoms/FiguresRenders/LogoRender';
import LogoHeaderFrames from '../../atoms/Frames/customs/LogoHeaderFrames';
import Typographys from '../../atoms/Typographys';

export type LogoHeaderProps = {
  fileName: string;
  description: string;
  heading: string;
};

const LogoHeader = ({ fileName, description, heading }: LogoHeaderProps) => {
  return (
    <LogoHeaderFrames.LogoHeaderContainer>
      <LogoHeaderFrames.LogoHeaderImageBox>
        <LogoRender description={description} fileName={fileName} />
      </LogoHeaderFrames.LogoHeaderImageBox>
      <Typographys.RobotoH1 color={ProjectColors.BLUE}>
        {heading}
      </Typographys.RobotoH1>
    </LogoHeaderFrames.LogoHeaderContainer>
  );
};

export { LogoHeader };
