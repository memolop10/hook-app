import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="your Name" 
                />

                <button 
                    className="btn btn-dark mt-5"
                    onClick={ handleClick }
                    >
                    Focus
                </button>
        </div>
    )
}

export default FocusScreen
