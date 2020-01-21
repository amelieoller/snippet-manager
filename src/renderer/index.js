import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './style.scss';
import theme from './theme';
import App from './components/App';
import SnippetProvider from './providers/SnippetProvider';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnippetProvider>
      <App />
    </SnippetProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
