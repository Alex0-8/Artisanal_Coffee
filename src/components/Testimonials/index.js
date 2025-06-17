import React from "react";
import { CommentContainer, TestimonialsContainer } from "./styles";

const Testimonials = () => {
    return(
        <TestimonialsContainer>
            <h2>Lo que dicen nuestros clientes</h2>

            <CommentContainer tabIndex='0'>
                <img src="/Img/fotos-de-perfil/comentario-1.jpg" alt="jeorgina" />
                <div>
                    <h3>Fernanda R.</h3>
                    <p>El plan clásico me encantó. Me gusta que puedo elegir según mi gusto, y las postales con historias del café son un detallazo. Se nota que les importa la experiencia.</p>
                </div>
            </CommentContainer>

            <CommentContainer tabIndex='0'>
                <img src="/Img/fotos-de-perfil/comentario-2.jpg" alt="Paco" />
                <div>
                    <h3>Andrés G.</h3>
                    <p>Desde que empecé mi suscripción, cada mes es una nueva sorpresa. El café siempre llega fresco, y me encanta descubrir nuevos orígenes. ¡Ya no puedo tomar otro café!</p>
                </div>
            </CommentContainer>

            <CommentContainer tabIndex='0'>
                <img src="/Img/fotos-de-perfil/comentario-4.jpg" alt="Paco" />
                <div>
                    <h3>Laura M.</h3>
                    <p>Probé el plan premium y ¡wow! Me tocó una edición limitada de Etiopía que estaba brutal. Súper recomendado para los que amamos el café de verdad.</p>
                </div>
            </CommentContainer>
        </TestimonialsContainer>
    )
}

export default Testimonials;