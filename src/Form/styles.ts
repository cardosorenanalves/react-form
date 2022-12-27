import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const InfoDiv = styled.div`
margin-left: 6% ;
`;

export const InputsDiv = styled.div`
width: 45%;
display: flex;
flex-direction: column;
align-items: center;

margin-right: 6%;
`;

export const Input = styled.input`
all: unset;
width: 100%;

margin-bottom: 30px;
border: 1px solid;
border-color:${({theme})=> theme.colors.gray700};
border-radius: 5px;

margin-right: 10px;

padding: 10px;
`;

export const Select = styled.select`
all: unset;
width: 100%;

border: 1px solid;
border-color:${({theme})=> theme.colors.gray700};
border-radius: 5px;

margin-right: 10px;

padding: 10px;
`;