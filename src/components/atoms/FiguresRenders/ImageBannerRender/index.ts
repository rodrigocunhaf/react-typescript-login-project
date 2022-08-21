import styled from 'styled-components';

type ImageBannerRenderProps = {
  bgFileName: string;
};

const ImageBannerRender = styled.div<ImageBannerRenderProps>`
  background-image: url(${(props) =>
    `${process.env.PUBLIC_PATH}images/banner/${props.bgFileName}`});
  background-size: cover;
  height: 100%;
`;

export { ImageBannerRender };
