import React from 'react'
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo )
        reset()
    }

    return (
        <>
          <h4>Agregar Todo</h4>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    className="form-control"
                    name="description" 
                    placeholder="Aprender"
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button 
                    className="btn btn-block btn-dark mt-1"
                    type="submit"
                >
                    Agregar
                </button>
            </form>  
        </>
    )
}

export default TodoAdd
