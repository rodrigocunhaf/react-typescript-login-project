import React from 'react';
import { HDLoginBoxes } from '../../atoms/CustomBoxes';
import { RobotoInputs } from '../../atoms/UI/Inputs';
import { RobotoLabels } from '../../atoms/UI/Labels';
import {
  changePassword,
  changeUsername,
  resetAllInputsLogin,
  onInvalidUser,
} from '../../templates/HomeTemplate/store/actions/UI/FormLogin';
import { authentication } from '../../templates/HomeTemplate/store/reducers/Auth';
import { setInput } from '../../templates/HomeTemplate/store/reducers/UI/FormLogin';

import { logMe } from '../../templates/HomeTemplate/store/actions/Auth';
import {
  useHomeDispatch,
  useHomeSelector,
} from '../../templates/HomeTemplate/store';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import { smallBlueBtnRounded } from '../../atoms/UI/Buttons/BtnRounded/themes';
import validator from 'validator';
import { modalInvalidState } from '../../templates/HomeTemplate/store/reducers/UI/ModalInvalid';
import { onModalInvalid } from '../../templates/HomeTemplate/store/actions/UI/ModalInvalid';
import fetchData from '../../../utils/fetchData';

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

  const { formLogin, modalInvalid } = useHomeSelector((state) => state);

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

  const goToAuthenticate = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      validator.isEmail(formLogin.loginUsername) === true &&
      formLogin.loginPassword.length >= 8
    ) {
      return fetchData().then((data) => {
        const findedUser = data.find(
          (user) => user.id === formLogin.loginUsername
        );
        if (findedUser) {
          dispatch(authentication(logMe(formLogin.loginUsername)));
          dispatch(setInput(resetAllInputsLogin()));
          return;
        }
        dispatch(setInput(resetAllInputsLogin()));
        dispatch(setInput(onInvalidUser()));
        dispatch(modalInvalidState(onModalInvalid));
      });
    }
    dispatch(modalInvalidState(onModalInvalid));
  };

  return (
    <>
      <HDLoginBoxes.Container onSubmit={goToAuthenticate}>
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
        <BtnRounded theme={smallBlueBtnRounded} isBold={true} type="submit">
          Login
        </BtnRounded>
      </HDLoginBoxes.Container>
    </>
  );
};

export { HeaderDisplayLogin };
