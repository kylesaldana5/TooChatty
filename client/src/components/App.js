import React, { Component } from 'react';
import NavBar from './NavBar/Navbar'
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
