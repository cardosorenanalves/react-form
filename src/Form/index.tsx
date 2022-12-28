import { Container, InfoDiv, InputsDiv } from "./styles";
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaGooglePlusG} from 'react-icons/fa'
import {TfiLinkedin} from 'react-icons/tfi'
import { Autocomplete, Button, TextField } from "@mui/material";
import { Bairros } from "../utils/bairros";


const period = [{label: 'Manhã'},{label:'Tarde'},{label: 'Noite'}]

export function Form(){
    return(
        <Container>  
                  
            <InfoDiv>
                <h2>Contate-Nos:</h2>
                <p>Nosso endereço:</p>
                <p>Rua Caio Júlio César, 193 Vila Cardoso Franco - SP</p>
                <p>E-mail: contato@imobiliaria.com.br</p>
                <p>{`Telefone: +55 (21) 9 9999-0000`}</p>
                <h3>Conheça também:</h3>
                <div>
                <GrInstagram size={25}
                style={{marginRight: '15px'}}
                />
                <FaFacebookF size={24}
                 style={{marginRight: '15px'}}
                />
                <TfiLinkedin size={25}
                 style={{marginRight: '15px'}}
                />
                <FaGooglePlusG size={33} 
                 style={{marginBottom: '-6px'}}
                />
                </div>
            </InfoDiv>
            <InputsDiv
            >
               
                <h2
                style={{marginBottom: '-10px'}}
                >Não encontrou o que procurava?</h2>
                <h4>Preencha o formulário e retornaremos o contato.</h4>

                <div
                style={{display: 'flex', flexDirection:'row', width: '100%', marginBottom: '15px'}}
                >
                <TextField 
                label="Digite seu nome completo!" 
                variant="outlined" 
                style={{width: '48%', marginRight: '15px'}}
                />
                <TextField 
                label="Digite seu E-mail!" 
                variant="outlined" 
                type='email' 
                style={{width: '48%'}}
                />
                </div>
                <div
                 style={{display: 'flex', flexDirection:'row', width: '100%', marginBottom: '15px'}}
                >
                <TextField 
                label="Digite seu telefone!" 
                variant="outlined" 
                type='tel'
                style={{width: '48%', marginRight: '15px'}}
                />
                <TextField 
                variant="outlined" 
                type='date' 
                style={{width: '48%'}}
                />
                </div> 
                <div
                 style={{display: 'flex', flexDirection:'row', width: '100%'}}
                >   
               <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Bairros}
                sx={{ width: 300 }}
                style={{width: '48%', marginRight: '15px'}}
                renderInput={(params) => <TextField {...params} label="Selecione o bairro desejado!" />}
                />
                <Autocomplete
                disablePortal
                options={period}
                id="combo-box-demo"
                sx={{ width: 300 }}
                style={{width: '48%'}}
                renderInput={(params) => <TextField {...params} label="Selecione o melhor período para ser atendido!" />}
                />
                </div>
                <h3>Deseja que entremos em contato via telefone?</h3>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
                <input type="checkbox" name="yes"
                defaultChecked={true}/>
                <label 
                htmlFor="yes"
                style={{marginRight: '35px'}}
                
                >Sim</label>
                <input checked={true} type="checkbox" name="no"/>
                <label htmlFor="no">Não</label>
                </div>
                <Button variant="outlined">
                    Enviar
                </Button>
            </InputsDiv>
        </Container>
    );
}