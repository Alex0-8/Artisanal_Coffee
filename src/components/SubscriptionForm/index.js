import React, { useEffect, useRef } from "react";
import useSubscription from "../../hooks/useSubscription";
import { ErrorMsg, FormModal, FormSection, FormSub, SuccesMsg } from "./styles";

const SubscriptionForm = ({modalVisible, closeModal}) => {
    const {form, handleChange, handleSubmit, error, succes} = useSubscription();
    const modalRef = useRef(null);

    useEffect(() => { // controla el scroll cuando el modal está abierto, la seleccion de elementos con el tab y el cierre del modal cuando se hace click fuera de la seccion del formulario
        
        if (!modalVisible) return;

        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableElements = modalRef.current?.querySelectorAll(focusableSelectors);
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        const trapFocus = (e) => {
            if (e.key === "Tab") {
                if (!focusableElements || focusableElements.length === 0) return;

                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }

                } else {
                    // Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };

        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        };

        document.addEventListener("keydown", trapFocus);
        document.addEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = 'hidden'
        firstElement?.focus(); // Enfoca el primer elemento

        return () => {
            document.removeEventListener("keydown", trapFocus);
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'auto'
        };
    }, [modalVisible, closeModal]);

    if(!modalVisible) return null;

    return(
        <FormModal visible={modalVisible} >
            <FormSection ref={modalRef}>
                <div>
                    <h2>Susribete Ahora</h2>
                    <button onClick={closeModal}><img src="/Img/iconos/x.svg" alt="Cerrar formulario de suscripción" /></button>
                </div>

                <FormSub onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" placeholder="Nombre" name="name" id="name" value={form.name} onChange={handleChange} />
                        {}
                    </div>

                    <div>
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" placeholder="correo electronico" id="email" name="email" value={form.email} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="plan">Plan de suscripcion</label>
                        <select name="plan" id="plan" value={form.plan} onChange={handleChange} >
                            <option value=""></option>
                            <option value='Básico'>Básico</option>
                            <option value='Clásico'>Clásico</option>
                            <option value='Premium'>Premium</option>
                        </select>
                    </div>

                    <div>
                        <input 
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            value={form.termsAccepted}
                            onChange={handleChange}
                        />
                        <label htmlFor="termsAccepted">Acepto los Terminos y Condiciones</label>
                    </div>

                    <button type="submit">Subscribirme</button>
                </FormSub>
                {succes && <SuccesMsg>Sucripcion completada</SuccesMsg>}
                {error && <ErrorMsg>{error}</ErrorMsg>}
            </FormSection>
        </FormModal>
    )
}

export default SubscriptionForm;