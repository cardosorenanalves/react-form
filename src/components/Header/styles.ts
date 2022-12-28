import styled from "styled-components";

export const HeaderDiv = styled.div`
height: 90px;
width: 100%;
display: flex;
align-items: center;

background-color: ${({theme})=> theme.colors.gray500};
`;

export const LogoImg = styled.img`
width: 200px;
height: 69px;

margin-left: 15px
`