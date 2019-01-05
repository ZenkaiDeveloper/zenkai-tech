import React, { Component } from 'react';
import CompanyLogo from '../media/ZenkaiTech.png';


export default class SideMenu extends Component{
  render(){
    return(
      <div>
        <div className="navigation">
          <li>Work</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>
        <div className="company-logo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
      </div>

    )
  }
}
