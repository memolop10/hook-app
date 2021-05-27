import React, { useState, useEffect } from 'react'
import Message from './Message';
import './effect.css'



const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
       console.log('hey!!!')
    }, [formState]);

    useEffect(() => {
        console.log('email cambio')
     }, [email]);

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })

    }

    return (
        <>
            <h1>useEffect</h1>
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

                { name === '123' && <Message />}
        </>
    )
}

export default SimpleForm
