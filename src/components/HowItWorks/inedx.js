import React from "react";
import { HowItWorksContainer, HowItWorksImg, Step, Steps } from "./styles";
import howItWorksImage from '../../Img/howItWorks1.jpg'
import howItWorksImage2 from '../../Img/howItWorks2.jpg'
import howItWorksImage3 from '../../Img/howItWorks3.jpg'

const HowItWorks = () => {
    return (
        <HowItWorksContainer>
            <h2>Cómo funciona</h2>

            <Steps>
                <Step tabIndex='0'>
                    <HowItWorksImg src={howItWorksImage} alt="Seleccionamos cafés únicos"/>
                    <h3>Seleccionamos cafés únicos</h3>
                    <p>Trabajamos con fincas artesanales alrededor del mundo para traerte variedades exclusivas, difíciles de encontrar en tiendas convencionales.</p>
                </Step>

                <Step tabIndex='0'>
                    <HowItWorksImg src={howItWorksImage2} alt="Tostado artesanal cada mes"/>
                    <h3>Tostado artesanal cada mes</h3>
                    <p>Cada lote se tuesta a pedido para garantizar frescura y sabor. Te enviamos notas de cata y la historia detrás de cada origen.</p>
                </Step>

                <Step tabIndex='0'>
                    <HowItWorksImg src={howItWorksImage3} alt="Envío directo a tu puerta" />
                    <h3>Envío directo a tu puerta</h3>
                    <p>Recibe tu café recién tostado cada mes sin complicaciones. Es una experiencia sensorial directa desde el origen hasta tu taza.</p>
                </Step>
            </Steps>
        </HowItWorksContainer>
    )
}

export default HowItWorks;