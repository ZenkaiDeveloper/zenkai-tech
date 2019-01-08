import React, { Component } from "react";


export default class Project extends Component{
  state = {
    imgHover:{},
    divHover:{},
    imgText:{display:"none"}
  }
  overlay = () => {
    this.setState({
      imgText:{position:"absolute", color:"#fff",left:"30%", top:"7%", fontSize:"2rem"},
      imgHover:{opacity:"0.5", transition: ".4s ease-in-out"},
      divHover:{backgroundColor:"rgba(0,0,0,1)", position:"relative", overflow:"hidden"}
    })
  }

  unoverlay= () => {
    this.setState({
      imgHover:{},
      divHover:{},
      imgText:{display:"none"}
    })
  }

  render(){
    return(
      <div style={this.state.divHover} onMouseLeave={this.unoverlay}  onMouseOver={this.overlay}>
        <div style={this.state.imgText}>
          <h2>{this.props.name}</h2>
          <p><small><i className={this.props.icon}></i> {this.props.info[0]}</small>   <small style={{marginLeft:"2rem"}}>#{this.props.info[1]}</small></p>
        </div>
        <img style={this.state.imgHover} src={this.props.image} alt="Kingston Wok desktop view." />
      </div>
    )
  }
}
