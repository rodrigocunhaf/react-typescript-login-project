import styled from 'styled-components';

const ImageBox = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: unset;
    max-width: 50%;
    width: 100%;
    height: 100%;
  }
`;

export { ImageBox };
