import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="homepage">
          <SideMenu />
          <Main/>
        </div>

      </div>
    );
  }
}

export default App;
