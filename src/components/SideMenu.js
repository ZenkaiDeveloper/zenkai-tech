import React, { Component } from 'react';
import CompanyLogo from '../media/ZenkaiTech.png';
import { selectTerm } from '../actions';
import { connect } from "react-redux";


class SideMenu extends Component{

  clickHandler = (e) => {
    let term = e.target.innerText.toLowerCase();
    if (term.length < 24 && term !== "blog") {
      this.props.selectTerm(term);
    }
  }

  render(){
    return(
      <div>
        <div className="homepage-left">
          <div onClick={this.clickHandler} className="navigation">
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

export default connect(null,{ selectTerm })(SideMenu);
