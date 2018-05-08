import React, { Component } from 'react';
import Messenger from './Messenger/Messenger'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/Navbar'
import Register from './Register/Register'
class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
