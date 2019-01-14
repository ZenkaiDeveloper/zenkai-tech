import React, { Component } from 'react';
import pfp from '../media/pfp.png';
import { selectTerm } from '../actions'
import { connect } from 'react-redux';


class TopMenu extends Component{

  clickHandler = (e) => {
    let term = e.target.innerText.toLowerCase();
    if (term.length < 24 && term !== "blog") {
      this.props.selectTerm(term);
    }
  }

  render(){
    return(
      <nav onClick={this.clickHandler} className="navbar">
        <li>Work</li>
        <li>About</li>
        <li className="banner-logo">
          <img alt="Logo" src={pfp} />
        </li>
        <li><a href="https://zenkaideveloper.github.io/">Blog</a></li>
        <li>Contact</li>
      </nav>
    )
  }
}

export default connect(null, { selectTerm })(TopMenu)
