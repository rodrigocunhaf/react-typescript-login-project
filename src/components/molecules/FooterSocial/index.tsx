import React from 'react';
import { FSocialBoxes } from '../../atoms/CustomBoxes';
import { FacebookSocial } from '../../atoms/SocialComponents/FacebookSocial';
import { InstagramSocial } from '../../atoms/SocialComponents/InstagramSocial';
import { TwitterSocial } from '../../atoms/SocialComponents/TwitterSocial';
import { YoutubeSocial } from '../../atoms/SocialComponents/YoutubeSocial';

const FooterSocial = () => {
  return (
    <FSocialBoxes.Container>
      <FacebookSocial />
      <TwitterSocial />
      <InstagramSocial />
      <YoutubeSocial />
      <TwitterSocial />
    </FSocialBoxes.Container>
  );
};

export { FooterSocial };
