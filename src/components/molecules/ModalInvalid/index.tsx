import React from 'react';
import validator from 'validator';
import BGPainter from '../../atoms/BGPainter';
import { bgPainterBlue } from '../../atoms/BGPainter/themes';
import { MInvalidBoxes } from '../../atoms/CustomBoxes';
import { Modal } from '../../atoms/ModalContainer';
import RobotoH2 from '../../atoms/Typographys/Headings/RobotoH2';
import { mediumWhite } from '../../atoms/Typographys/Headings/RobotoH2/themes';
import RobotoP from '../../atoms/Typographys/Paragraphys/RobotoP';
import BtnRounded from '../../atoms/UI/Buttons/BtnRounded';
import { smallBlueBtnRounded } from '../../atoms/UI/Buttons/BtnRounded/themes';
import {
  useHomeDispatch,
  useHomeSelector,
} from '../../templates/HomeTemplate/store';
import { resetAllInputsLogin } from '../../templates/HomeTemplate/store/actions/UI/FormLogin';
import { offModalInvalid } from '../../templates/HomeTemplate/store/actions/UI/ModalInvalid';
import { setInput } from '../../templates/HomeTemplate/store/reducers/UI/FormLogin';
import { modalInvalidState } from '../../templates/HomeTemplate/store/reducers/UI/ModalInvalid';

const ModalInvalid = () => {
  const { formLogin, modalInvalid } = useHomeSelector((state) => state);
  const dispatch = useHomeDispatch();

  const onClickOkHandler = () => {
    dispatch(modalInvalidState(offModalInvalid));
    dispatch(setInput(resetAllInputsLogin()));
  };

  const validationMessages = () => {
    const listErrors: JSX.Element[] = [];

    if (
      validator.isEmail(formLogin.loginUsername) === false &&
      formLogin.invalidUser === false
    ) {
      listErrors.push(
        <RobotoP>
          Please enter a valid <strong style={{ color: 'red' }}>email</strong>{' '}
          value.
        </RobotoP>
      );
    }
    if (formLogin.loginPassword.length < 8 && formLogin.invalidUser === false) {
      listErrors.push(
        <RobotoP>
          Please enter a valid{' '}
          <strong style={{ color: 'red' }}>password</strong> value.
        </RobotoP>
      );
    }

    if (formLogin.invalidUser === true) {
      listErrors.push(
        <RobotoP>
          Authentication failed!{' '}
          <strong style={{ color: 'red' }}>Invalid username/password</strong>
        </RobotoP>
      );
    }
    return listErrors;
  };
  return (
    <>
      {modalInvalid.open === true && (
        <Modal id="modal-invalid">
          <MInvalidBoxes.Container>
            <MInvalidBoxes.TitleBox>
              <BGPainter theme={bgPainterBlue}>
                <RobotoH2 theme={mediumWhite}>Validation error</RobotoH2>
              </BGPainter>
            </MInvalidBoxes.TitleBox>
            <MInvalidBoxes.Content>
              <MInvalidBoxes.ValidationList>
                {validationMessages().map((item, index) => {
                  return (
                    <MInvalidBoxes.ValidationListItem
                      key={`validation_list_${index}`}
                    >
                      {item}
                    </MInvalidBoxes.ValidationListItem>
                  );
                })}
              </MInvalidBoxes.ValidationList>
              <MInvalidBoxes.ButtonBox>
                <BtnRounded
                  theme={smallBlueBtnRounded}
                  onClick={onClickOkHandler}
                >
                  OK
                </BtnRounded>
              </MInvalidBoxes.ButtonBox>
            </MInvalidBoxes.Content>
          </MInvalidBoxes.Container>
        </Modal>
      )}
    </>
  );
};

export { ModalInvalid };
