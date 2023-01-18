import styled from 'styled-components';

export const HeaderDiv = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    border-color:${({theme}) => theme.colors.gray100} ;
    background-color: ${({theme})=> theme.colors.white};
    padding: 15px 0 15px 15px;
`;

export const LogoImg = styled.img`
    width: 200px;
    height: 69px;
`;