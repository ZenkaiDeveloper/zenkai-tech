import React,{ Component } from 'react';
import Project from './Project.js'
import KingstonWokBanner from '../media/KingstonWokBanner.png'
import KingstonWokPhone from '../media/KingstonWokPhone.png'
import Mudkip from '../media/Mudkip.png'
import SkinCareCenterMobile from '../media/SkinCareCenterMobile.png'

export default class Main extends Component{

  render(){
    return(
      <div className="homepage-showcase">
        <Project info={["Restaurant", "Asian Fusion"]} icon="fas fa-utensils" name="Kingston Wok" image={KingstonWokBanner} />
        <Project info={["", "skincare"]} icon="" name="C&F Skincare" image={SkinCareCenterMobile} />
        <Project info={["", "PWA"]} icon="" name="Job Tracker" image={Mudkip} />


      </div>
    )
  }
}
