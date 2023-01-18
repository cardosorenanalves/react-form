import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Global from './styles/global';
import { Form } from './Form';
import { Header } from './components/Header/Header';
import { CustomFooter } from './components/Footer/Footer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import ptBR from 'dayjs/locale/pt-br';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Global />
        <Header/>
        <Form />
        <CustomFooter />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
