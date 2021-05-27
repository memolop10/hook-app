import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
            <ul className="list-group list-group-flush">
                {
                    todos.map( (todo, index) => (
                        <TodoListItem 
                            todo={ todo }
                            index={ index }
                            key={ todo.id }
                            handleDelete= { handleDelete }
                            handleToggle= { handleToggle }
                        />

                    ))
                }
            </ul>
    )
}

export default TodoList
