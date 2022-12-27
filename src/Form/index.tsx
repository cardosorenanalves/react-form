import { Container, InfoDiv, Input, InputsDiv, Select } from "./styles";
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaGooglePlusG} from 'react-icons/fa'
import {TfiLinkedin} from 'react-icons/tfi'
import { Autocomplete, TextField } from "@mui/material";

export function Form(){
    return(
        <Container>  
            <InfoDiv>
                <h2>Contate-Nos:</h2>
                <p>Nosso endereço:</p>
                <p>Rua Caio Júlio César, 193</p>
                <p>Vila Cardoso Franco - SP</p>
                <p>{`Telefone: (11) 95072-5538`}</p>
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
                style={{display: 'flex', flexDirection:'row', width: '100%'}}
                >
                <TextField id="outlined-basic" label="Digite seu nome completo!" variant="outlined" />
                <TextField id="outlined-basic" label="Digite seu E-mail!" variant="outlined" type='email' />
                </div>
                <div
                 style={{display: 'flex', flexDirection:'row', width: '100%'}}
                >
                <TextField id="outlined-basic" label="Digite seu telefone!" variant="outlined" type='tel' />
                <TextField id="outlined-basic" variant="outlined" type='date' />
                </div> 
                <div
                 style={{display: 'flex', flexDirection:'row', width: '100%'}}
                >   
               <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                </div>
                <h3>Deseja que entremos em contato via telefone?</h3>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <input type="checkbox" name="yes"
                defaultChecked={true}/>
                <label 
                htmlFor="yes"
                style={{marginRight: '35px'}}
                
                >Sim</label>
                <input checked={true} type="checkbox" name="no"/>
                <label htmlFor="no">Não</label>
                </div>
                <button>
                    Enviar
                </button>
            </InputsDiv>
        </Container>
    );
}