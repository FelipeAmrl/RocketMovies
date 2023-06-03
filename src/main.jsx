import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';
import  { ThemeProvider } from 'styled-components';

import { Profile } from '../src/pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
