import { useState } from "react";
import { Container, InputContainer, InputsDiv } from "./styles";

import { Autocomplete, Button, Checkbox, TextField } from "@mui/material";
import { Bairros } from "../utils/bairros";
import { DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import {AiFillCheckCircle } from 'react-icons/ai'
import { validateEmail } from "../utils/validateEmail";
import { telefonemask } from "../utils/telefone";
import { MobileDatePicker } from "@mui/x-date-pickers";



const period = [{label: 'Manhã'},{label:'Tarde'},{label: 'Noite'}]
export function Form(){
    const [value, setValue] = useState<Dayjs | null>(
        dayjs(),
      );
    const [name, setName] = useState<string>('');  
    const [email, setEmail] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [disponibilit, setDisponibilit] = useState<string>('');
    const [checkConfirm, setCheckConfirm] = useState<boolean>(true);
    const [nameErr, setNameErr] = useState<boolean>(false);  
    const [emailErr, setEmailErr] = useState<boolean>(false); 
    const [telErr, setTelErr] = useState<boolean>(false); 
    const [dateErr, setDateErr] = useState<boolean>(false);

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };
 

    function handleSubmit(){
        resetError()
        if(!name){
       setNameErr(true)
        }
        if(!email || !validateEmail(email)){
             setEmailErr(true)
        }
        if(!tel || telefonemask(tel)?.length as number < 17){
             setTelErr(true)
        }

        if(
            tel 
            && telefonemask(tel)?.length as number === 17 
            && email
            && validateEmail(email)
            && name
            ){
            toast(`Cadastrado com sucesso!`, {progressStyle:{background:'#ed6c02'}});
            const register = {
                nome: name,
                email: email,
                telefone: tel,
                dataDeNascimento: value?.format('DD/MM/YYYY'),
                bairro: bairro ? bairro : "Qualquer",
                disponibilidade: disponibilit ? disponibilit : 'Qualquer',
                contatoTel: checkConfirm ? 'Sim' : 'Não'
            }
            console.log(register)
            
        }

    }

    function resetError(){
        setNameErr(false)
        setEmailErr(false)
        setTelErr(false)
    }


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
                label="Digite seu nome completo" 
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
                label="Digite seu E-mail" 
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
                label="Digite seu telefone" 
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
                 label="Insira sua data de nascimento"
                 inputFormat="DD/MM/YYYY"
                 disableFuture
                 minDate={dayjs('1922-01-01T21:11:54')}
                 renderInput={(params) => <TextField
                 {...params} 
                 error={dateErr}
                 helperText={dateErr && 'Selecione uma data valida'}
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
                onChange={(e,value) => setBairro(value?.label as string)}
                fullWidth
                renderInput={(params) => <TextField {...params}
                label="Selecione o bairro desejado" 
                color="warning"
                />}
                size="small"
                
                />
                <Autocomplete
                
                disablePortal
                options={period}
                fullWidth
                onChange={(e, value)=> setDisponibilit(value?.label as string)}
                renderInput={(params) => <TextField {...params} 
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
                <Checkbox
                color="warning"
                checked={checkConfirm}
                onClick={()=> setCheckConfirm(!checkConfirm)}
                />
                <p          
                style={{marginRight: '35px'}}
                
                >Sim</p>
                <Checkbox 
                checked={checkConfirm === false} 
                onClick={()=> setCheckConfirm(!checkConfirm)}
                color="warning"
                />
                <p>Não</p>
                </InputContainer>
                <Button 
                size="large"
                variant="contained"
                onClick={handleSubmit}
                >
                    Enviar
                </Button>
            </InputsDiv>

        </Container>
    );
}