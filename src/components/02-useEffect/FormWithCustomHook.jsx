import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';
import './effect.css'



const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password:''
    })

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />   

            <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="your name"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }/>
            
            <input 
                type="text" 
                name="email"
                className="form-control"
                placeholder="your email"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }/>

            <input 
                type="password" 
                name="password"
                className="form-control"
                placeholder="your password"
                value={ password }
                onChange={ handleInputChange }/>

                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>

        </form>
    )
}

export default FormWithCustomHook
