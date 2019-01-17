import React, { Component } from "react";
import { connect } from "react-redux";
import { selectComponent } from '../actions'


class Project extends Component{
  state = {
    imgHover:{},
    divHover:{},
    imgText:{display:"none"}
  }
  overlay = () => {
    if (window.innerWidth > 800) {
      this.setState({
        imgText:{position:"absolute", color:"#fff",left:"30%", top:"15%", fontSize:"2rem"},
        imgHover:{opacity:"0.5", transition: ".4s ease-in-out"},
        divHover:{backgroundColor:"rgba(0,0,0,1)", position:"relative", overflow:"hidden", borderRadius:"5px"}
      })
    }
  }

  unoverlay= () => {
    this.setState({
      imgHover:{borderRadius:"5px"},
      divHover:{},
      imgText:{display:"none"}
    })
  }

  clickHandler = (e) => {
    this.props.selectComponent(this.props.name)
  }

  componentDidMount(){
    if (window.innerWidth < 800) {
      this.setState({
        imgText:{display:"block"}

      })
    }
  }

  render(){
    return(
      <div style={this.state.divHover} onClick={this.clickHandler} onMouseLeave={this.unoverlay} onMouseOver={this.overlay}>
        <div className="project-intro" style={this.state.imgText}>
          <h2>{this.props.name}</h2>
          <p><small><i className={this.props.icon}></i> {this.props.info[0]}</small>   <small style={{marginLeft:"2rem"}}>#{this.props.info[1]}</small></p>
        </div>
        <img className="project-img" style={this.state.imgHover} src={this.props.image} alt="Project Img" />
      </div>
    )
  }
}

export default connect(null, { selectComponent })(Project)
