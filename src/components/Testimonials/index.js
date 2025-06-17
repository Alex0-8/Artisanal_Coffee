import React from "react";
import { CommentContainer, TestimonialsContainer } from "./styles";
import porfileImg1 from '../../Img/fotos-de-perfil/comentario-1.jpg'
import porfileImg2 from '../../Img/fotos-de-perfil/comentario-2.jpg'
import porfileImg3 from '../../Img/fotos-de-perfil/comentario-4.jpg'

const Testimonials = () => {
    return(
        <TestimonialsContainer>
            <h2>Lo que dicen nuestros clientes</h2>

            <CommentContainer tabIndex='0'>
                <img src={porfileImg1} alt="Fernanda R." />
                <div>
                    <h3>Fernanda R.</h3>
                    <p>El plan clásico me encantó. Me gusta que puedo elegir según mi gusto, y las postales con historias del café son un detallazo. Se nota que les importa la experiencia.</p>
                </div>
            </CommentContainer>

            <CommentContainer tabIndex='0'>
                <img src={porfileImg2} alt="Andrés G." />
                <div>
                    <h3>Andrés G.</h3>
                    <p>Desde que empecé mi suscripción, cada mes es una nueva sorpresa. El café siempre llega fresco, y me encanta descubrir nuevos orígenes. ¡Ya no puedo tomar otro café!</p>
                </div>
            </CommentContainer>

            <CommentContainer tabIndex='0'>
                <img src={porfileImg3} alt="Laura M." />
                <div>
                    <h3>Laura M.</h3>
                    <p>Probé el plan premium y ¡wow! Me tocó una edición limitada de Etiopía que estaba brutal. Súper recomendado para los que amamos el café de verdad.</p>
                </div>
            </CommentContainer>
        </TestimonialsContainer>
    )
}

export default Testimonials;