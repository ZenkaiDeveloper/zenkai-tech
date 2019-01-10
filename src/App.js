import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu'
import Main from './components/Main'

class App extends Component {
  state = {
    scrollTerm:""
  }

  setTerm = (e) => {
    if (e.target.innerText.length < 24) {
      this.setState({
        scrollTerm: e.target.innerText.toLowerCase()
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="homepage">
          <SideMenu setTerm={this.setTerm} />
          <Main scrollTerm={this.state.scrollTerm} />
        </div>

      </div>
    );
  }
}

export default App;
