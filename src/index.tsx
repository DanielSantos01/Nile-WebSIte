import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import './styles';
import defaultTheme from './styles/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
