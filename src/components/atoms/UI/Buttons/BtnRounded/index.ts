import styled from 'styled-components';

type BtnRoundedProps = {
  isBold?: boolean;
};

const BtnRounded = styled.button<BtnRoundedProps>`
  display: flex;
  align-items: center;
  font-family: Roboto;
  border: 0;
  border-radius: 2rem;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  ${(props) => props.isBold && 'font-weight:bold'};

  &:hover {
    cursor: pointer;
  }
`;

BtnRounded.defaultProps = {
  theme: {
    bgColor: 'white',
    fontColor: 'black',
    fontSize: '1rem',
  },
};

export default BtnRounded;
