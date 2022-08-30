import React from 'react';
import { HDLoginBoxes } from '../../atoms/CustomBoxes';
import { Modal } from '../../atoms/ModalContainer';
import { RobotoInputs } from '../../atoms/UI/Inputs';
import { RobotoLabels } from '../../atoms/UI/Labels';
import {
  changePassword,
  changeUsername,
  resetAllInputsLogin,
} from '../../templates/HomeTemplate/store/actions/UI/FormLogin';
import {
  offModal,
  onModal,
} from '../../templates/HomeTemplate/store/actions/UI/ModalLogin';
import { authentication } from '../../templates/HomeTemplate/store/reducers/Auth';
import { setInput } from '../../templates/HomeTemplate/store/reducers/UI/FormLogin';
import { modalState } from '../../templates/HomeTemplate/store/reducers/UI/ModalLogin';

import {
  logMe,
  logMeOut,
} from '../../templates/HomeTemplate/store/actions/Auth';
import {
  useHomeDispatch,
  useHomeSelector,
} from '../../templates/HomeTemplate/store';
import RobotoH2 from '../../atoms/Typographys/Headings/RobotoH2';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import {
  smallBlueBtnRounded,
  smallRedBtnRounded,
} from '../../atoms/UI/Buttons/BtnRounded/themes';
import { mediumBlueH2 } from '../../atoms/Typographys/Headings/RobotoH2/themes';

type InputProps = {
  labelName: string;
  context: string;
};

const inputs: InputProps[] = [
  {
    labelName: 'Username',
    context: 'USERNAME',
  },
  {
    labelName: 'Password',
    context: 'PASSWORD',
  },
];

const HeaderDisplayLogin = () => {
  const selector = useHomeSelector((state) => state);
  const dispatch = useHomeDispatch();

  const onChangeUsernameHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(setInput(changeUsername(event.currentTarget.value)));
  };

  const onChangePasswordHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(setInput(changePassword(event.currentTarget.value)));
  };

  const PasswordInput = (
    <RobotoInputs.Default
      type="password"
      value={selector.formLogin.loginPassword}
      onChange={onChangePasswordHandler}
    />
  );

  const UsernameInput = (
    <RobotoInputs.Default
      type="email"
      value={selector.formLogin.loginUsername}
      onChange={onChangeUsernameHandler}
    />
  );

  const goToAuthenticate = () => {
    dispatch(authentication(logMe(selector.formLogin.loginUsername)));
    dispatch(setInput(resetAllInputsLogin()));
  };

  const cancelHandler = () => {
    dispatch(modalState(offModal));
    dispatch(setInput(resetAllInputsLogin()));
  };

  return (
    <HDLoginBoxes.Container>
      <HDLoginBoxes.Desktop>
        <HDLoginBoxes.ListInputs>
          {inputs.map((input, index) => {
            return (
              <HDLoginBoxes.ListInputsItems
                key={`header_display_login__${index + 1}`}
              >
                <RobotoLabels.Default>
                  {input.labelName}
                  {input.context === 'PASSWORD' && PasswordInput}
                  {input.context === 'USERNAME' && UsernameInput}
                </RobotoLabels.Default>
              </HDLoginBoxes.ListInputsItems>
            );
          })}
        </HDLoginBoxes.ListInputs>
        <BtnRounded
          theme={smallBlueBtnRounded}
          isBold={true}
          onClick={goToAuthenticate}
        >
          Login
        </BtnRounded>
      </HDLoginBoxes.Desktop>
      <HDLoginBoxes.Mobile>
        {selector.UI.modalLogin && (
          <Modal>
            <HDLoginBoxes.ModalContent>
              <RobotoH2 theme={mediumBlueH2}>Login Project</RobotoH2>
              <HDLoginBoxes.ListInputs>
                {inputs.map((input, index) => {
                  return (
                    <HDLoginBoxes.ListInputsItems
                      key={`header_display_login_mobile_${index + 1}`}
                    >
                      <RobotoLabels.Default>
                        {input.labelName}
                        {input.context === 'PASSWORD' && PasswordInput}
                        {input.context === 'USERNAME' && UsernameInput}
                      </RobotoLabels.Default>
                    </HDLoginBoxes.ListInputsItems>
                  );
                })}
              </HDLoginBoxes.ListInputs>
              <HDLoginBoxes.ButtonModalBox>
                <BtnRounded
                  theme={smallBlueBtnRounded}
                  isBold={true}
                  onClick={goToAuthenticate}
                >
                  Login
                </BtnRounded>
                <BtnRounded
                  theme={smallRedBtnRounded}
                  isBold={true}
                  onClick={cancelHandler}
                >
                  Cancel
                </BtnRounded>
              </HDLoginBoxes.ButtonModalBox>
            </HDLoginBoxes.ModalContent>
          </Modal>
        )}
        <BtnRounded
          theme={smallBlueBtnRounded}
          onClick={() => dispatch(modalState(onModal))}
        >
          Enter
        </BtnRounded>
      </HDLoginBoxes.Mobile>
    </HDLoginBoxes.Container>
  );
};

export { HeaderDisplayLogin };
