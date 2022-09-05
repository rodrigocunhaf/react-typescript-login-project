import React from 'react';
import { MLoginBoxes } from '../../atoms/CustomBoxes';
import { Modal } from '../../atoms/ModalContainer';
import RobotoH2 from '../../atoms/Typographys/Headings/RobotoH2';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import {
  smallBlueBtnRounded,
  smallRedBtnRounded,
} from '../../atoms/UI/Buttons/BtnRounded/themes';
import { RobotoLabels } from '../../atoms/UI/Labels';
import {
  useHomeDispatch,
  useHomeSelector,
} from '../../templates/HomeTemplate/store';
import validator from 'validator';
import { authentication } from '../../templates/HomeTemplate/store/reducers/Auth';
import { logMe } from '../../templates/HomeTemplate/store/actions/Auth';
import { setInput } from '../../templates/HomeTemplate/store/reducers/UI/FormLogin';
import {
  changePassword,
  changeUsername,
  onInvalidUser,
  resetAllInputsLogin,
} from '../../templates/HomeTemplate/store/actions/UI/FormLogin';
import { onModalInvalid } from '../../templates/HomeTemplate/store/actions/UI/ModalInvalid';
import { modalInvalidState } from '../../templates/HomeTemplate/store/reducers/UI/ModalInvalid';
import { mediumBlueH2 } from '../../atoms/Typographys/Headings/RobotoH2/themes';
import { RobotoInputs } from '../../atoms/UI/Inputs';
import { modalState } from '../../templates/HomeTemplate/store/reducers/UI/ModalLogin';
import {
  offModal,
  onModal,
} from '../../templates/HomeTemplate/store/actions/UI/ModalLogin';
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

const ModalLogin = () => {
  const dispatch = useHomeDispatch();

  const { UI, formLogin, auth } = useHomeSelector((state) => state);

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
          dispatch(modalState(offModal));
          return;
        }
        dispatch(setInput(resetAllInputsLogin()));
        dispatch(setInput(onInvalidUser()));
        dispatch(modalInvalidState(onModalInvalid));
      });
    }
    dispatch(modalInvalidState(onModalInvalid));
  };

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

  const cancelHandler = () => {
    dispatch(modalState(offModal));
    dispatch(setInput(resetAllInputsLogin()));
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

  return (
    <MLoginBoxes.Container>
      {UI.modalLogin && (
        <Modal id="modal-login">
          <MLoginBoxes.Content>
            <MLoginBoxes.TitleBox>
              <RobotoH2 theme={mediumBlueH2}>Login Project</RobotoH2>
            </MLoginBoxes.TitleBox>
            <MLoginBoxes.ListInputs>
              {inputs.map((input, index) => {
                return (
                  <MLoginBoxes.ListInputsItems
                    key={`header_display_login_mobile_${index + 1}`}
                  >
                    <RobotoLabels.Default>
                      {input.labelName}
                      {input.context === 'PASSWORD' && PasswordInput}
                      {input.context === 'USERNAME' && UsernameInput}
                    </RobotoLabels.Default>
                  </MLoginBoxes.ListInputsItems>
                );
              })}
            </MLoginBoxes.ListInputs>
            <MLoginBoxes.ButtonBox>
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
            </MLoginBoxes.ButtonBox>
          </MLoginBoxes.Content>
        </Modal>
      )}
      {auth.logged === false && (
        <BtnRounded
          theme={smallBlueBtnRounded}
          onClick={() => dispatch(modalState(onModal))}
        >
          Enter
        </BtnRounded>
      )}
    </MLoginBoxes.Container>
  );
};

export { ModalLogin };
