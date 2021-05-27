import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

const { setUser } = useContext(UserContext)
console.log(setUser)
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button 
                className="btn btn-primary ml-5"
                onClick={ () => setUser({  
                    id: 123,
                    name:'Memo'
                }) }    
            >
                Login
            </button>

        </div>
    )
}

export default LoginScreen
