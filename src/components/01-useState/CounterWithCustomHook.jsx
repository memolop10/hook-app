import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
    //Destructurando lo que me manda el Custom Hook
    const { state , decrement, increment, reset } = useCounter();

    return (
        <>
            <h1> Counter with Hook: { state } </h1>
            <hr />

            <button onClick={ () => increment( 2 ) } className="btn btn-dark"> + 1 </button>
            <button onClick={ () => reset() } className="btn btn-dark"> Reset </button>
            <button onClick={ () => decrement( 3 ) } className="btn btn-dark"> - 1 </button>    
        </>
    )
}

export default CounterWithCustomHook
