import React from 'react';
import { logOff } from '../../../context/reducers/authReducers';
import { useAuthDispath } from '../../../context/store';
import { ProjectColors } from '../../../global/configs/colors';
import { HDLogoutBoxes } from '../../atoms/Frames/Boxes';
import { RobotoP } from '../../atoms/Typographys/Paragraphys';
import { BtnRounded } from '../../atoms/UI/Buttons';

export type HeaderDisplayLogoutBtn = {
  name: string;
};

type HeaderDisplayLogoutProps = {
  username: string;
  logoutButton: HeaderDisplayLogoutBtn;
};

const HeaderDisplayLogout = ({
  username,
  logoutButton,
}: HeaderDisplayLogoutProps) => {
  const dispatch = useAuthDispath();

  return (
    <HDLogoutBoxes.Container>
      <HDLogoutBoxes.WelcomeBox>
        <RobotoP.Default>Hi,{username}</RobotoP.Default>
      </HDLogoutBoxes.WelcomeBox>

      <BtnRounded.Small
        BGColor={ProjectColors.BLUE}
        color={ProjectColors.WHITE}
        onClick={() => dispatch(logOff())}
        isBold={true}
      >
        {logoutButton.name}
      </BtnRounded.Small>
    </HDLogoutBoxes.Container>
  );
};

export { HeaderDisplayLogout };
