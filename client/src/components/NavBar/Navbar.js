import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import './NavBar.css'
import Messenger from '../Messenger/Messenger'
import Register from '../Register/Register'


const navBar = () => {
    return (
        <HashRouter>
            <div className="navbar">
                <h1> NavBar </h1>
                <ul>
                    <li> <NavLink to={'/register'} > Register </NavLink > </li>
                    <li> <NavLink to={'/messenger'} > Chatty </NavLink >  </li>
                </ul>

                <div className="content">
                    <Route path="/register" component={Register} />
                    <Route path="/messenger" component={Messenger} />
                </div>
            </div>
        </HashRouter>


    )
}

export default navBar;