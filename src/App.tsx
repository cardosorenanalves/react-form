import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Global from './styles/global';
import { Form } from './Form';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Global />
    <Form />
    </ThemeProvider>
  );
}

export default App;
