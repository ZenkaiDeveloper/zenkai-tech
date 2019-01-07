import React,{ Component } from 'react';
import Project from './Project.js'
import KingstonWokBanner from '../media/KingstonWokBanner.png'
import SelfImg from '../media/self.jpeg'
import Mudkip from '../media/Mudkip.png'
import SkinCareCenterMobile from '../media/SkinCareCenterMobile.png'
import Jukebox from '../media/Jukebox.png'
import BeatPop from '../media/BeatPop.png'

export default class Main extends Component{

  render(){
    return(
      <div className="homepage-showcase">
        <Project info={["Restaurant", "asianfusion"]} icon="fas fa-utensils" name="Kingston Wok" image={KingstonWokBanner} />
        <Project info={["", "skincare"]} icon="" name="C&F Skincare" image={SkinCareCenterMobile} />
        <Project info={["", "PWA"]} icon="" name="Job Tracker" image={Mudkip} />
        <div className="about">
          <h2>Hi, im Andy.</h2>
          <img className="self-img" src={SelfImg} alt="portrait of the developer"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Project info={["Jukebox", "music"]} icon="fas fa-headphones-alt" name="Social Jukebox" image={Jukebox} />
        <Project info={["Music", "game"]} icon="fas fa-headphones-alt" name="BeatPop" image={BeatPop} />


      </div>
    )
  }
}
