import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { FontsConfig } from './global/configs/fonts';
import { PageConfig } from './global/configs/html';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <FontsConfig />
      <PageConfig />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export { App };
