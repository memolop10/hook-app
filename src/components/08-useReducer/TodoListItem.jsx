import React from 'react'

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

    return (
        
            <li 
                className="list-group-item" 
                key={ todo.id }
            >
                <p className={ `${ todo.done && 'complete' }` } 
                    onClick={ () => handleToggle( todo.id ) }
                > 
                        { index + 1 }. { todo.desc } 
                </p>
                <button 
                    className="btn btn-danger"
                    onClick={ () => handleDelete( todo.id ) } 
                >
                    Delete
                </button>
            </li>
    )
}

export default TodoListItem
