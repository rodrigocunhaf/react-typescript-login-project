import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { HDLogoutBoxes } from '../../atoms/Frames/Boxes';
import RobotoP from '../../atoms/Typographys/Paragraphys/RobotoP';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import { smallBlueBtnRounded } from '../../atoms/UI/Buttons/BtnRounded/themes';
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
        <RobotoP>Hi,{username}</RobotoP>
      </HDLogoutBoxes.WelcomeBox>

      <BtnRounded
        theme={smallBlueBtnRounded}
        onClick={logMeOutHandler}
        isBold={true}
      >
        {logoutButton.name}
      </BtnRounded>
    </HDLogoutBoxes.Container>
  );
};

export { HeaderDisplayLogout };
