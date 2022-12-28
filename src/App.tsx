import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Global from './styles/global';
import { Form } from './Form';
import { Header } from './components/Header/Header';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Global />
    <Header/>
    <Form />
    </ThemeProvider>
  );
}

export default App;
