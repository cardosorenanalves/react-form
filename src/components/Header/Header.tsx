import React from 'react';
import logo from '../../assets/png/logo.png';
import { HeaderDiv, LogoImg } from './styles';

export function Header(){
    return(
        <HeaderDiv>
            <LogoImg src={logo} alt="Logo" />
        </HeaderDiv>
    );
}