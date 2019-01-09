import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../media/pfp.png';


export default class TopMenu extends Component{
  render(){
    return(
      <nav className="navbar">
        <li>Work</li>
        <li>About</li>
        <li className="banner-logo">
          <img src={pfp} />
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </nav>
    )
  }
}
