import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus, GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { Footer, InfoDiv, MidiaDiv } from "./styles";

export function CustomFooter(){
    return(
        <Footer
        >
        <InfoDiv>
            <div>
            <h2>Contate-nos:</h2>
            <p>Nosso endereço:</p>
            <p>Rua Caio Júlio César, 193 Vila Cardoso Franco - SP</p>
            <p>E-mail: contato@imobiliaria.com.br</p>
            <p>{`Telefone: +55 (21) 9 9999-0000`}</p>
            </div>
            <div >
            <h2>Conheça também:</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.4rem'}}>
            <MidiaDiv>
            <GrInstagram size={15}
            style={{marginRight: '18px'}}
            />
            <span>@Imobiliaria</span>
            </MidiaDiv>
            <MidiaDiv>
            <FaFacebookF size={15}
            style={{marginRight: '18px'}}
            />
            <span>Imobiliaria</span>
            </MidiaDiv>
            <MidiaDiv>
            <TfiLinkedin size={15}
            style={{marginRight: '18px'}}
            />
            <span
            style={{marginTop: '2px'}}
            >Imobiliaria</span>
             </MidiaDiv>
             <MidiaDiv>
            <GrGooglePlus 
            style={{marginRight: '10px'}}
            size={21} 
            />
            <span>contato@Imobiliaria.com</span>
            </MidiaDiv>
            </div>
            </div>
        </InfoDiv>
        </Footer>
    );
}