import React from "react";
import { FooterNav, FooterSection } from "./styles";

const Footer = () => {
    return(
        <FooterSection>
            <p><small>© 2025 CoffeeCo. Todos los derechos reservados.</small></p>

            <FooterNav>
                <p>Siguenos en nuestras redes:</p>
                <nav>
                    <p>Contacto</p>
                    <p>Acerca de</p>
                </nav>
            </FooterNav>
        </FooterSection>
    )
}

export default Footer;