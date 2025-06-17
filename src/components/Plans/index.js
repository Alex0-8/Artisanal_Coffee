import React from "react";
import { PlanIndividual, PlansContent, PlansSection } from "./styles";

const Plans = ({openModal}) => {
    const handleVisible = () => {
        openModal()
    }

    const plans = [
        {
            name: "Básico",
            price: "199/mes",
            features: [
                "1 bolsa de 250g de café",
                "Tostado bajo pedido",
                "Envío regular",
            ]
        },

        {
            name: "Clásico",
            price: "349/mes",
            features: [
                "2 bolsa de 250g de café",
                "Seleccion personalizada",
                "Envio prioritario",
                "Postales con historias del café"
            ],
            recommended: true,
        },

        {
            name: "Premium",
            price: "499/mes",
            features: [
                "3 bolsas de café premium",
                "Acceso a ediciones limitadas",
                "Envío express gratuito",
                "Regalo mensual sorpresa",
            ]
        }
    ]

    return(
        <PlansSection>
            <h2>Planes de Suscripción</h2>
            
            <PlansContent>
                {plans.map((plan, i) => (
                    <PlanIndividual key={i} className={plan.recommended ? "highlight" : ""}>
                        <h3>{plan.name}</h3>
                        <p>{plan.price}</p>

                        <ul>
                            {plan.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                        <button onClick={handleVisible}>Elegir Plan</button>
                    </PlanIndividual>
                ))}
            </PlansContent>
        </PlansSection>
    )
}

export default Plans;