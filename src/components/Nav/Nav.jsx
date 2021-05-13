import React from 'react'
import { NavLink } from 'react-router-dom';

import './Nav.css'

const Nav = () => {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
