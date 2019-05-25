import React, { Component } from 'react';
import './styles/App.css';
import SideMenu from './components/SideMenu';
import Main from './components/Main';
import ShowPage from './components/ShowPage';
import { connect } from 'react-redux';
import KingstonWokInfo from "./media/KingstonWok";
import SkincareCenterInfo from "./media/CFSkincareCenter";
import MudkipInfo from "./media/Mudkip";
import SocialJukeboxInfo from "./media/SocialJukebox";
import BeatPopInfo from "./media/BeatPop";
import MainNoAnimate from "./components/MainNoAnimate";


class App extends Component {
  state={
    rightComponent:"animate"
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.sideMenu.rightComponent !== this.state.rightComponent){
      this.setState({
        rightComponent: nextProps.sideMenu.rightComponent
      })
    }else if(typeof nextProps.sideMenu.scrollTerm !== "undefined") {
      this.setState({
        rightComponent:"main"
      })
    }

  }

  showComponent = () => {
    switch (this.state.rightComponent) {
      case "main":
        return <MainNoAnimate />;
      case "Kingston Wok":
        return <ShowPage video={KingstonWokInfo.video} img={KingstonWokInfo.mobilePic} alt="Kingston Wok Mobile Image" desc={KingstonWokInfo.description} title={KingstonWokInfo.title} />
      case "C&F Skincare":
        return <ShowPage title={SkincareCenterInfo.title} video={SkincareCenterInfo.video} img={SkincareCenterInfo.mobilePic} alt="C&F Skincare Center Mobile Image" desc={SkincareCenterInfo.description} />
      case "Job Tracker":
        return <ShowPage title={MudkipInfo.title} video={MudkipInfo.video} img={MudkipInfo.mobilePic} alt="Job Tracker mobile image" desc={MudkipInfo.description} />
      case "Social Jukebox":
        return <ShowPage title={SocialJukeboxInfo.title} video={SocialJukeboxInfo.video} img={SocialJukeboxInfo.mobilePic} alt="Socail Jukebox Mobile Pic" desc={SocialJukeboxInfo.description} />
      case "BeatPop":
        return <ShowPage title={BeatPopInfo.title} imgInfo="Custom Algorithm for Particles" img={BeatPopInfo.mobilePic} video={BeatPopInfo.video} desc={BeatPopInfo.description} imgDesc={BeatPopInfo.imgDesc} />
      default:
        return <Main />;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="homepage">
          <SideMenu />
          {this.showComponent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App);
