import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">USECONTEXT</a>
          
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                        <NavLink exact activeClassName="active" to="/"> Home </NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink exact activeClassName="active" to="/about"> About </NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink exact activeClassName="active" to="/login"> Login </NavLink>
                    </li>
                </ul>  
            </div>
        </nav>
        
    )
}

export default NavBar
