import { Container, InfoDiv, Input, InputsDiv, Select } from "./styles";
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaGooglePlusG} from 'react-icons/fa'
import {TfiLinkedin} from 'react-icons/tfi'

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
                <Input type='text' placeholder='Digite seu nome completo!'/>
                <Input type='email' placeholder='Digite seu E-mail!'/>
                </div>
                <div
                 style={{display: 'flex', flexDirection:'row', width: '100%'}}
                >
                <Input type='tel' placeholder='Digite seu telefone!'/>
                <Input type='date' placeholder='Digite seu telefone!'/>
                </div> 
                <div
                 style={{display: 'flex', flexDirection:'row', width: '100%'}}
                >   
                <Select>
                    <option value="1">Morumbi</option>
                </Select>
                <Select>
                    <option value="1">Manhã</option>
                    <option value="1">Tarde</option>
                    <option value="1">Noite</option>
                </Select>
                </div>
                <h3>Deseja que entremos em contato via telefone?</h3>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <input type="checkbox" name="yes"/>
                <label 
                htmlFor="yes"
                style={{marginRight: '35px'}}
                >Sim</label>
                <input type="checkbox" name="no"/>
                <label htmlFor="no">Não</label>
                </div>
            </InputsDiv>
        </Container>
    );
}