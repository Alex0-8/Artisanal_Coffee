import React, { useState } from "react";
import { FaqContainer, QuestionContainer } from "./styles";

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const questions = [
        {
            title: "¿Qué hace diferente a Café Crate?",
            content:
            "Seleccionamos cafés de especialidad directamente de productores locales y los tostamos a pedido para que siempre recibas calidad y frescura.",
        },
        {
            title: "¿Cómo funciona la suscripción?",
            content:
            "Elige tu frecuencia y tipo de café. Nosotros nos encargamos del resto. Puedes modificar, pausar o cancelar en cualquier momento.",
        },
        {
            title: "¿De dónde proviene el café?",
            content:
            "Trabajamos con fincas de México, Colombia, Perú y Etiopía, cuidando que cada grano provenga de prácticas éticas y sostenibles.",
        },
    ];


    return(
        <FaqContainer>
            <h2>¿Qué es Café Crate?</h2>

            {questions.map((q, i) => (
                <QuestionContainer key={i} className={openIndex === i ? "open" : ""}>
                    <button onClick={() => toggle(i)}>
                        {q.title}
                        <span>+</span>
                    </button>

                    <div>
                        <p>
                            {q.content}
                        </p>
                    </div>
                </QuestionContainer>
            ))}
        </FaqContainer>
    )
}

export default FaqSection;