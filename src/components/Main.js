import React,{ Component } from 'react';
import Project from './Project'
import TopMenu from './TopMenu'
import KingstonWokBanner from '../media/KingstonWokBanner.png'
import KingstonWokPhone from '../media/KingstonWokPhone.png'
import SelfImg from '../media/self.jpeg'
import Mudkip from '../media/Mudkip.png'
import SkinCareCenterMobile from '../media/SkinCareCenterMobile.png'
import Jukebox from '../media/Jukebox.png'
import BeatPop from '../media/BeatPop.png'
import pfp from '../media/pfp.png'

export default class Main extends Component{
  state={
    imgId:"",
    headerContent:"Hi, im Andy.",
    img:SelfImg
  }

  borderHighlight = ()=>{
    this.setState({
      imgId:"div-hover",
      headerContent: "Hey, its Zenkai Dev.",
      img:pfp
    })
  }

  borderUnhighlight = () => {
    this.setState({
      imgId:"",
      headerContent:"Hi, im Andy.",
      img:SelfImg
    })
  }

  render(){
    return(
      <div>
        <div className="horizontal-header">
          <TopMenu />
        </div>

        <h1 className='work'>Work</h1>
        <hr className="style-two"/>
        <div className="homepage-showcase">
          <div className="kingston-wok-mobile">
            <Project info={["Restaurant", "asianfusion"]} icon="fas fa-utensils" name="Kingston Wok" image={KingstonWokPhone} />
          </div>
          <div className="kingston-wok">
            <Project info={["Restaurant", "asianfusion"]} icon="fas fa-utensils" name="Kingston Wok" image={KingstonWokBanner} />
          </div>

          <div className="skincare">
            <Project info={["", "skincare"]} icon="" name="C&F Skincare" image={SkinCareCenterMobile} />
          </div>

          <div className="mudkip">
            <Project info={["", "PWA"]} icon="" name="Job Tracker" image={Mudkip} />
          </div>

          <div className="jukebox">
            <Project info={["Jukebox", "music"]} icon="fas fa-headphones-alt" name="Social Jukebox" image={Jukebox} />
          </div>

          <div className="beatpop">
            <Project info={["Music", "game"]} icon="fas fa-headphones-alt" name="BeatPop" image={BeatPop} />
          </div>

          <div className="about-header">
            <h2 className="work">About</h2>
            <hr className="style-two"/>
          </div>

          <div onMouseLeave={this.borderUnhighlight} onMouseOver={this.borderHighlight} className="about">
            <h2>{this.state.headerContent}</h2>
            <img id={this.state.imgId} className="self-img" src={this.state.img} alt="portrait of the developer"/>
            <p>
              I am a web developer and the founder of Zenkai Tech. Here at Zenkai Tech we design and build stunning web applications that align with modern and minimalist patterns along with added spice. All products are built to be mobile responsive with the latest technologies that have the best chance to stand the test of time. My goal is to help buisnesses start an online presence so that they are more accessible. With happy customers, I can't help but love what I do and I am always looking forward to the next project.
            </p>
          </div>



        </div>
      </div>

    )
  }
}
