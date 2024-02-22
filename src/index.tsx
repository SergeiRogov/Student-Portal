import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Login } from './pages/login/Login';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./styles/theme"
import { ColorModeScript } from '@chakra-ui/react'
import { LightDarkModeToggle } from './components/LightDarkModeToggle';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme = { theme }>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <LightDarkModeToggle />
      <Login />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
