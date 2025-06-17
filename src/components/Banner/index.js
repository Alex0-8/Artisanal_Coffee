import React from "react";
import { BannerContainer, StartBtn } from "./styles";

const Banner = ({ openModal }) => {
    const handleVisible = () => {
        openModal()
    }

    return(
        <BannerContainer tabIndex="0">
            <article>
                <h1>Descubre cafes que cuentan historias</h1>
                <p>Recibe un nuevo origan cada vez en tu puerta</p>
                <StartBtn onClick={handleVisible}>Empieza ahora</StartBtn>
            </article>
        </BannerContainer>
    )
}

export default Banner;