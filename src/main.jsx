import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';
import  { ThemeProvider } from 'styled-components';

import { Preview } from '../src/pages/Preview';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Preview />
    </ThemeProvider>
  </React.StrictMode>,
)
