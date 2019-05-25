import React, { Component } from "react";
import '../styles/login.css';
import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyANrKQ67KjB63Ao_6sgStwTtDBYcIOoigo",
  authDomain: "zenkai-tech.firebaseapp.com",
  databaseURL: "https://zenkai-tech.firebaseio.com",
  projectId: "zenkai-tech",
  appID: "app-id"
};

firebase.initializeApp(firebaseConfig);

class Login extends Component{

  state = {
    email: "",
    password:""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.email, firebase.auth());
  }

  render(){
    return(
      <div className="blog-login">
        <h1>Sign in to Update Content</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Email:</label>
            <input name="email" value={this.state.email} onChange={this.changeHandler}></input>
          </div>

          <div>
            <label>Password:</label>
            <input name="password" value={this.state.password} onChange={this.changeHandler}></input>
          </div>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;
