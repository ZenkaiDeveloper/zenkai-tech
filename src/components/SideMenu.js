import React, { Component } from 'react';
import CompanyLogo from '../media/ZenkaiTech.png';


export default class SideMenu extends Component{

  clickHandler = (e) => {
    this.props.setTerm(e);
  }

  render(){
    return(
      <div>
        <div onClick={this.clickHandler} className="homepage-left">
          <div className="navigation">
            <li>Work</li>
            <li>About</li>
            <li><a href="https://zenkaideveloper.github.io/">Blog</a></li>
            <li>Contact</li>
          </div>
          <div className="company-logo">
            <img src={CompanyLogo} alt="Company Logo" />
            <h2>Modern Web Development</h2>
            <small>Zenkai Tech Copyright &copy; 2019.</small>
          </div>
        </div>
      </div>

    )
  }
}
