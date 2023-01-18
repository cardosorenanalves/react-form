
import { Container, InputContainer, InputsDiv } from "./styles";

import { Autocomplete, Button, Checkbox, CircularProgress, FormControlLabel, TextField } from "@mui/material";
import { Bairros } from "../utils/bairros";
import dayjs from "dayjs";
import { ToastContainer, } from "react-toastify";
import { telefonemask } from "../utils/telefone";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { UseForm } from "./useForm";



const period = [{label: 'Manhã'},{label:'Tarde'},{label: 'Noite'}]
export function Form(){
   const {
    nameErr,
    name,
    setName,
    emailErr,
    email,
    setEmail,
    telErr,
    setTel,
    tel,
    value,
    handleChange,
    bairro,
    setBairro,
    setDisponibilit,
    disponibilit,
    checkConfirm,
    setCheckConfirm,
    handleSubmit,
    isLoading
} = UseForm();

    return(
        <Container>  
            <ToastContainer
                />
              <InputsDiv>
                <h3
                style={{marginBottom: '-10px'}}
                >Não encontrou o que procurava?</h3>
                <h4
                style={{fontWeight: '400'}}
                >Preencha o formulário e retornaremos o contato.</h4>

                <InputContainer>
                <TextField 
                error={nameErr}
                helperText={nameErr && 'Digite seu Nome'}
                label="Digite seu nome completo *" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined" 
                size="small"
                fullWidth
                color="warning"
                />
                <TextField 
                error={emailErr}
                helperText={emailErr && 'Digite um E-mail valido'}
                label="Digite seu E-mail *" 
                variant="outlined" 
                type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                size="small"
                color="warning"
                />
                </InputContainer>
                <InputContainer
                >
                <TextField 
                error={telErr}
                helperText={telErr && 'Digite um telefone valido'}
                label="Digite seu telefone *" 
                variant="outlined" 
                value={telefonemask(tel)}
                onChange={(e) => setTel(e.target.value)}
                fullWidth
                type='tel'
                size="small"
                color="warning"
                />
                <MobileDatePicker
                 value={value}
                 onChange={handleChange}
                 label="Insira sua data de nascimento *"
                 inputFormat="DD/MM/YYYY"
                 disableFuture
                 minDate={dayjs('1922-01-01T21:11:54')}
                 renderInput={(params) => <TextField
                 {...params} 
                 size='small'
                 color="warning"
                 fullWidth
                />}
                />
                </InputContainer> 
                <InputContainer
                >   
               <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Bairros}
                value={bairro}
                onChange={(e,value) => setBairro(value)}
                fullWidth
                renderInput={(params) => <TextField {...params}
                label="Selecione o bairro desejado" 
                value={bairro}
                color="warning"
                />}
                size="small"
                
                />
                <Autocomplete          
                disablePortal
                options={period}
                value={disponibilit}
                fullWidth
                onChange={(e, value)=> setDisponibilit(value)}
                renderInput={(params) => <TextField {...params} 
                value={disponibilit}
                label="Selecione sua disponibilidade"
                color="warning"
                />}
                size="small"
                
                />
                </InputContainer>
                <h4>Podemos entrar em contato via telefone?</h4>
                <InputContainer style={{display: 'flex', 
                flexDirection: 'row', 
                marginBottom: '10px', 
                marginTop: '-20px'}}>
               
                <FormControlLabel
                control={
                <Checkbox 
                checked={checkConfirm} 
                onClick={()=> setCheckConfirm(!checkConfirm)}
                color="warning"
                />
                }
                label='Sim'
                />

                <FormControlLabel
                control={
                <Checkbox 
                checked={checkConfirm === false} 
                onClick={()=> setCheckConfirm(!checkConfirm)}
                color="warning"
                />
                }
                label='Não'
                />
                </InputContainer>
                <Button 
                size="large"
                variant="contained"
                onClick={handleSubmit}
                >
                  {isLoading ?
                  <CircularProgress
                  color="inherit"
                  size={32}
                  /> :
                   'Enviar'}
                </Button>
            </InputsDiv>

        </Container>
    );
}