import React,{ Component } from 'react';
import KingstonWokBanner from '../media/KingstonWokBanner.png'
import KingstonWokPhone from '../media/KingstonWokPhone.png'
import SkinCareCenterDesktop from '../media/SkinCareCenterDesktop.png'
import SkinCareCenterMobile from '../media/SkinCareCenterMobile.png'

export default class Main extends Component{
  state = {
    imgHover:{},
    divHover:{},
    imgText:{display:"none"}
  }
  overlay = () => {
    this.setState({
      imgText:{position:"absolute", color:"#fff",left:"30%", top:"7%", fontSize:"3rem"},
      imgHover:{opacity:"0.5", transition: ".4s ease-in-out"},
      divHover:{backgroundColor:"rgba(0,0,0,1)", position:"relative"}
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
      <div className="homepage-showcase">
        <div style={this.state.divHover} onMouseLeave={this.unoverlay}  onMouseOver={this.overlay}>
          <div style={this.state.imgText}>
            <h2>Kingston Wok</h2>
            <p><small><i className="fas fa-utensils"></i> Restaurant</small>   <small style={{marginLeft:"2rem"}}>#Asian Fusion</small></p>
          </div>
          <img style={this.state.imgHover} src={KingstonWokBanner} alt="Kingston Wok desktop view." />
        </div>

      </div>
    )
  }
}
