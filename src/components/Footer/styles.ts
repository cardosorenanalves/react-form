import styled from "styled-components";

export const Footer = styled.div`
width: 100%;
background: #ed6c02;
color: ${({theme})=> theme.colors.white};
border-top:1px solid;
border-color:${({theme}) => theme.colors.gray100} ;
`;


export const InfoDiv = styled.div`
font-size: 12px;
line-height: 10px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
text-align:center;
gap: 5rem;

@media(max-width: 450px){
    gap: 0;
    flex-direction: column;
    align-items: center;
justify-content: center;
margin-bottom: 15px;
}

`;

export const MidiaDiv = styled.div`
margin-left: 8px;
display: flex;
align-items: center;
`