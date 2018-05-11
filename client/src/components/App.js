import React, { Component } from 'react';
import NavBar from './NavBar/Navbar'
import { subscribeToTimer } from '../api';
class App extends Component {
  
  render() {
    return (
      <div>
        <div>
          <header className="navbar">
            <NavBar />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
