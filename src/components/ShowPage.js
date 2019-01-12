import React from 'react';
import "../styles/ShowPage.css"

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
        <h1>{this.props.title}</h1>
        <video id="show-video" autoPlay muted loop>
          <source src={this.props.video} type="video/mp4" />
        </video>
        <div className="more-info">
          <div className="showpage-description">
            <p>{this.props.desc}</p>
          </div>
          <div className="description-right">
            <img src={this.props.img} alt={this.props.alt} />
          </div>
        </div>
      </div>
    )
  }

}

export default ShowPage
