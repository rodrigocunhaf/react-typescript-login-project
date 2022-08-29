import React from 'react';
import ReactDOM from 'react-dom';

const Head = document.querySelector('head') as HTMLElement;

const SocialLink = () => {
  return ReactDOM.createPortal(
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />,
    Head
  );
};

export { SocialLink };
