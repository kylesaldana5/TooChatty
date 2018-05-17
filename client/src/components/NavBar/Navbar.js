import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import './NavBar.css'
import Messenger from '../Messenger/Messenger'
import Register from '../Register/Register'
import Login from '../Login/Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const navBar = () => {

    const style={
        textDecoration: 'none',
        color: "white"
    }

    return (
        <HashRouter>
            <div>
                <MuiThemeProvider>
                    <div>
                        <h1 className="nav-header"> Too Chatty </h1>
                        <ul className="nav-bar">
                            <li> <NavLink to={'/messenger'} style={style}> Messenger </NavLink >  </li>
                            <li> <NavLink to={'/register'} style={style}> Register </NavLink > </li>
                            <li> <NavLink to={'/login'} style={style}> Login </NavLink >  </li>
                            <li> <NavLink to={'/login'} style={style}> Logout </NavLink >  </li>                            
                        </ul>
                    </div>
                </MuiThemeProvider>

                <div className="content">
                    <Route path="/messenger" component={Messenger} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </div>
            </div>
        </HashRouter>


    )
}

export default navBar;