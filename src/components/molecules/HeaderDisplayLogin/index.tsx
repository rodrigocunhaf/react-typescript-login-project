import React, { useState } from 'react';
import { logIn } from '../../../context/reducers/authReducers';
import { useAuthDispath, useAuthSelector } from '../../../context/store';
import { ProjectColors } from '../../../global/configs/colors';
import { HDLoginBoxes } from '../../atoms/Frames/Boxes';
import { BtnRounded } from '../../atoms/UI/Buttons';
import { RobotoInputs } from '../../atoms/UI/Inputs';
import { RobotoLabels } from '../../atoms/UI/Labels';

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
  const selector = useAuthSelector((state) => state);

  const dispatch = useAuthDispath();

  const [username, setUsername] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const PasswordInput = (
    <RobotoInputs.Default
      type="password"
      onChange={onChangePassword}
      value={password}
    />
  );

  const UsernameInput = (
    <RobotoInputs.Default
      type="email"
      onChange={onChangeUsername}
      value={username}
    />
  );

  return (
    <HDLoginBoxes.Container>
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
        onClick={() => {
          dispatch(
            logIn({
              userName: username,
            })
          );
        }}
      >
        {buttonText}
      </BtnRounded.Small>
    </HDLoginBoxes.Container>
  );
};

export { HeaderDisplayLogin };
