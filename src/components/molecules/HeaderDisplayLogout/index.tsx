import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { HDLogoutBoxes } from '../../atoms/CustomBoxes';
import { LogoRender } from '../../atoms/FiguresRenders/LogoRender';
import RobotoP from '../../atoms/Typographys/Paragraphys/RobotoP';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import { smallRedBtnRounded } from '../../atoms/UI/Buttons/BtnRounded/themes';
import {
  useHomeDispatch,
  useHomeSelector,
} from '../../templates/HomeTemplate/store';
import { logMeOut } from '../../templates/HomeTemplate/store/actions/Auth';
import { authentication } from '../../templates/HomeTemplate/store/reducers/Auth';
import { menuMobileState } from '../../templates/HomeTemplate/store/reducers/UI/MenuMobile';
import {
  openMenuMobile,
  closeMenuMobile,
} from '../../templates/HomeTemplate/store/actions/UI/MenuMobile';

type HeaderDisplayLogoutProps = {
  username: string;
};

const HeaderDisplayLogout = ({ username }: HeaderDisplayLogoutProps) => {
  const selectorMenuMobile = useHomeSelector((state) => state.menuMobile);
  const dispatch = useHomeDispatch();

  const logMeOutHandler = () => {
    dispatch(authentication(logMeOut()));
    dispatch(menuMobileState(closeMenuMobile));
  };

  const menuMobileHandler = () => {
    if (selectorMenuMobile.open === true) {
      return dispatch(menuMobileState(closeMenuMobile));
    }
    return dispatch(menuMobileState(openMenuMobile));
  };

  return (
    <HDLogoutBoxes.Container>
      <HDLogoutBoxes.Desktop>
        <HDLogoutBoxes.WelcomeBox>
          <RobotoP>Hi,{username}</RobotoP>
        </HDLogoutBoxes.WelcomeBox>

        <BtnRounded
          theme={smallRedBtnRounded}
          onClick={logMeOutHandler}
          isBold={true}
        >
          Logout
        </BtnRounded>
      </HDLogoutBoxes.Desktop>
      <HDLogoutBoxes.Mobile>
        <HDLogoutBoxes.MobileMenuButtonBox>
          <BtnRounded>
            <HDLogoutBoxes.MobileMenuIconBox onClick={menuMobileHandler}>
              <LogoRender fileName="menu.png" description={'open menu icon'} />
            </HDLogoutBoxes.MobileMenuIconBox>
          </BtnRounded>
        </HDLogoutBoxes.MobileMenuButtonBox>
        {selectorMenuMobile.open === true && (
          <HDLogoutBoxes.MobileInfoContainer>
            <HDLogoutBoxes.WelcomeBox>
              <RobotoP>Hi,{username}</RobotoP>
            </HDLogoutBoxes.WelcomeBox>

            <BtnRounded
              theme={smallRedBtnRounded}
              onClick={logMeOutHandler}
              isBold={true}
            >
              Logout
            </BtnRounded>
          </HDLogoutBoxes.MobileInfoContainer>
        )}
      </HDLogoutBoxes.Mobile>
    </HDLogoutBoxes.Container>
  );
};

export { HeaderDisplayLogout };
