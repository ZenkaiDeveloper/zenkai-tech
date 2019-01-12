import React, { Component } from 'react';
import './styles/App.css';
import SideMenu from './components/SideMenu';
import Main from './components/Main';
import ShowPage from './components/ShowPage';
import { connect } from 'react-redux';
import KingstonWokInfo from "./media/KingstonWok"


class App extends Component {
  state={
    rightComponent:"main"
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
        return <Main />;
      case "Kingston Wok":
        return <ShowPage video={KingstonWokInfo.video} img={KingstonWokInfo.mobilePic} alt="Kingston Wok Mobile Image" desc={KingstonWokInfo.description} title={KingstonWokInfo.title} />
      case "C&F Skincare":
        return <ShowPage title="C&F Skincare Center" />
      case "Job Tracker":
        return <ShowPage title="Mudkip" />
      case "Social Jukebox":
        return <ShowPage title="Social Jukebox" />
      default:
        return <Main />;
    }
  }

  render() {
    console.log(this.props)
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
