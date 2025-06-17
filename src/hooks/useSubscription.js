import { useState } from "react"

const useSubscription = () => {    
    const [form, setForm] = useState({
        name: '',
        email: '',
        plan: "",
        termsAccepted: false,
    })
    const [error, setError] = useState(null)
    const [succes, setSucces] = useState(false)

    const handleChange = ((e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
            
        }))

    })

    const handleSubmit = (e) => { // funcion que controla el formnulario
        e.preventDefault();

        if(!form.name || !form.email || !form.plan || !form.termsAccepted){
            setError("Por favor completa todos los campos");
            return;
        }

        if(form.name.length < 3){
            setError("Nombre demasiado corto")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(form.email)){
            setError("Correo electronico no valido");
            return;
        }

        setError(null)
        setSucces(true)

        setTimeout(() => { // reinica el formulario una vez enviado
            setForm({
                name: '',
                email: '',
                plan: "",
            })
            setSucces(false)
        }, 4000)
    }

    return{ form, succes, error, handleSubmit, handleChange}
}

export default useSubscription;