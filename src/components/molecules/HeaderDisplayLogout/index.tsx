import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { HDLogoutBoxes } from '../../atoms/Frames/Boxes';
import { RobotoP } from '../../atoms/Typographys/Paragraphys';
import { BtnRounded } from '../../atoms/UI/Buttons';
import { useHomeDispatch } from '../../templates/HomeTemplate/store';
import { logMeOut } from '../../templates/HomeTemplate/store/actions/Auth';
import { authentication } from '../../templates/HomeTemplate/store/reducers/Auth';

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
  const dispatch = useHomeDispatch();

  const logMeOutHandler = () => {
    dispatch(authentication(logMeOut()));
  };

  return (
    <HDLogoutBoxes.Container>
      <HDLogoutBoxes.WelcomeBox>
        <RobotoP.Default>Hi,{username}</RobotoP.Default>
      </HDLogoutBoxes.WelcomeBox>

      <BtnRounded.Small
        BGColor={ProjectColors.BLUE}
        color={ProjectColors.WHITE}
        onClick={logMeOutHandler}
        isBold={true}
      >
        {logoutButton.name}
      </BtnRounded.Small>
    </HDLogoutBoxes.Container>
  );
};

export { HeaderDisplayLogout };
