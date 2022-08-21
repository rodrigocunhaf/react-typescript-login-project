import styled from 'styled-components';

type ImageBannerRenderProps = {
  bgFileName: string;
};

const ImageBannerRender = styled.div<ImageBannerRenderProps>`
  background-image: url(${(props) => props.bgFileName});
  background-size: cover;
  height: 100%;
`;

export { ImageBannerRender };
