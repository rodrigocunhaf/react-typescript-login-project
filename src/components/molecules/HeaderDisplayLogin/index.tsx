import React from 'react';
import { ProjectColors } from '../../../global/configs/colors';
import { HDLoginBoxes } from '../../atoms/Frames/Boxes';
import { Modal } from '../../atoms/ModalContainer';
import { BtnRounded } from '../../atoms/UI/Buttons';
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

type InputsProps = {
  labelName: string;
  context: string;
};

export type HeaderDisplayLoginProps = {
  inputsList: InputsProps[];
  buttonText: string;
};

const HeaderDisplayLogin = ({
  buttonText,
  inputsList,
}: HeaderDisplayLoginProps) => {
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

  return (
    <HDLoginBoxes.Container>
      <HDLoginBoxes.Desktop>
        <HDLoginBoxes.ListInputs>
          {inputsList.map((input, index) => {
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
        <BtnRounded.Small
          BGColor={ProjectColors.BLUE}
          isBold={true}
          color={ProjectColors.WHITE}
          onClick={goToAuthenticate}
        >
          {buttonText}
        </BtnRounded.Small>
      </HDLoginBoxes.Desktop>
      <HDLoginBoxes.Mobile>
        {selector.UI.modalLogin && (
          <Modal>
            <HDLoginBoxes.ListInputs>
              {inputsList.map((input, index) => {
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
            <BtnRounded.Small
              BGColor={ProjectColors.BLUE}
              isBold={true}
              color={ProjectColors.WHITE}
            >
              {buttonText}
            </BtnRounded.Small>
          </Modal>
        )}
        <BtnRounded.Small
          BGColor={ProjectColors.BLUE}
          color={ProjectColors.WHITE}
          onClick={() => dispatch(modalState(onModal))}
        >
          Login
        </BtnRounded.Small>
      </HDLoginBoxes.Mobile>
    </HDLoginBoxes.Container>
  );
};

export { HeaderDisplayLogin };
