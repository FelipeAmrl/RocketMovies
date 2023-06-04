import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';
import  { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
