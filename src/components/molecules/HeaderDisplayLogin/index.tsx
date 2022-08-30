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
import { authentication } from '../../templates/HomeTemplate/store/reducers/Auth';
import { setInput } from '../../templates/HomeTemplate/store/reducers/UI/FormLogin';

import {
  logMe,
  logMeOut,
} from '../../templates/HomeTemplate/store/actions/Auth';
import {
  useHomeDispatch,
  useHomeSelector,
} from '../../templates/HomeTemplate/store';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import { smallBlueBtnRounded } from '../../atoms/UI/Buttons/BtnRounded/themes';
import validator from 'validator';
import { modalInvalidState } from '../../templates/HomeTemplate/store/reducers/UI/ModalInvalid';
import {
  offModalInvalid,
  onModalInvalid,
} from '../../templates/HomeTemplate/store/actions/UI/ModalInvalid';

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
  const dispatch = useHomeDispatch();

  const { formLogin } = useHomeSelector((state) => state);

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
      value={formLogin.loginPassword}
      onChange={onChangePasswordHandler}
    />
  );

  const UsernameInput = (
    <RobotoInputs.Default
      type="email"
      value={formLogin.loginUsername}
      onChange={onChangeUsernameHandler}
    />
  );

  const goToAuthenticate = () => {
    if (
      validator.isEmail(formLogin.loginUsername) === true &&
      formLogin.loginPassword.length >= 8
    ) {
      dispatch(authentication(logMe(formLogin.loginUsername)));
      dispatch(setInput(resetAllInputsLogin()));
      return;
    }
    dispatch(modalInvalidState(onModalInvalid));
  };

  return (
    <>
      <HDLoginBoxes.Container>
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
      </HDLoginBoxes.Container>
    </>
  );
};

export { HeaderDisplayLogin };
