import React from 'react';
import { HeaderContainer } from './styles';
import logoImg from '../../Img/iconos/coffee_Icon.png'

const Header = () => {
    return(
        <HeaderContainer>
            <img src={logoImg} alt='logotipo principal de Café Crate'/>

            <h1 tabIndex='0'>Café Crate</h1>

            <nav>
                <ul>
                    <li>Contacto</li>
                    <li>Acerca de</li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header;