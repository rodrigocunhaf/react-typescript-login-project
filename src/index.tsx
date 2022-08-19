import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { App } from './App';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
