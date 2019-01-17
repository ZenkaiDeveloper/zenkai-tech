import React from 'react';
import "../styles/ShowPage.css";
import TopMenu from './TopMenu'

class ShowPage extends React.Component{
  componentDidMount(){
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  render(){
    return(
      <div className="showpage">
        <div className="horizontal-header">
          <TopMenu />
        </div>
        <h1>{this.props.title}</h1>
        <video id="show-video" autoPlay muted loop>
          <source src={this.props.video} type="video/mp4" />
        </video>
        <div className="more-info">
          <div className="showpage-description">
            <p>{this.props.desc}</p>
          </div>
          <div className="description-right">
            <h2>{this.props.imgInfo}</h2>
            <img src={this.props.img} alt={this.props.alt} />
            <p>{this.props.imgDesc}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default ShowPage
