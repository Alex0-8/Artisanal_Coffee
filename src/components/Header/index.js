import React from 'react';
import { HeaderContainer } from './styles';

const Header = () => {
    return(
        <HeaderContainer>
            <img src='/Img/iconos/coffee_Icon.png' alt='logotipo principal de Café Crate'/>

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