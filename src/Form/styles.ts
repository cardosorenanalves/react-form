import styled from 'styled-components';

export const Container = styled.div`
max-width: 100%;
width: 600px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: ${({ theme }) => theme.colors.white};
margin-bottom: 30px;

`;



export const InputsDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


.css-jh47zj-MuiButtonBase-root-MuiButton-root{
    background-color: #ed6c02 ;

    &:hover{
        background-color: #E98010 ;
    }
}`;

export const InputContainer = styled.div`
flex: 1;
display: flex; 
flex-direction:row; 
justify-content: center;
width: 100%;
margin-bottom: 15px;
gap:1rem;

@media(max-width: 450px){
    flex-direction: column;
    margin-bottom:15px ;
    width: 90%;
}


`;
