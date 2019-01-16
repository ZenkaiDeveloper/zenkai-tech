import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project'
import TopMenu from './TopMenu'
import KingstonWokBanner from '../media/KingstonWokBanner.png'
import SelfImg from '../media/self.jpeg'
import Mudkip from '../media/Mudkip.png'
import SkinCareCenterMobile from '../media/SkinCareCenterMobile.png'
import Jukebox from '../media/Jukebox.png'
import BeatPop from '../media/BeatPop.png'
import pfp from '../media/pfp.png'

class Main extends Component{
  constructor(props){
    super()
    this.work = React.createRef();
    this.about = React.createRef();
    this.contact = React.createRef();
  }
  state={
    imgId:"",
    headerContent:"Hi, im Andy.",
    img:SelfImg,
    height:0,
    animation:"none"
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

  componentDidMount(){
    if (typeof this[this.props.sideMenu.scrollTerm] !== "undefined") {
      window.scrollTo({
        top:this[this.props.sideMenu.scrollTerm].current.offsetTop - 100,
        behavior: 'smooth'
      })
    }
    // if(window.sessionStorage.noAnimate){
    //   this.setState({})
    // }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.sideMenu.scrollTerm !== prevProps.sideMenu.scrollTerm) {
        window.scrollTo({
          top:this[this.props.sideMenu.scrollTerm].current.offsetTop - 100,
          behavior: 'smooth'
        })
    }

  }

  render(){
    return(
      <div>
        <div className="horizontal-header">
          <TopMenu />
        </div>
        <div>
          <h1 ref={this.work} className='work'>Featured Work</h1>
          <hr className="style-two"/>
          <div onScroll={this.scrollHandler} className="homepage-showcase">

            <div style={{animationName:"none", opacity:"1"}} className="kingston-wok">
              <Project info={["Restaurant", "asianfusion"]} icon="fas fa-utensils" name="Kingston Wok" image={KingstonWokBanner} />
            </div>

            <div style={{animationName:"none", opacity:"1"}} className="skincare">
              <Project info={["", "skincare"]} icon="" name="C&F Skincare" image={SkinCareCenterMobile} />
            </div>

            <div style={{animationName:"none", opacity:"1"}} className="mudkip">
              <Project info={["", "PWA"]} icon="" name="Job Tracker" image={Mudkip} />
            </div>

            <div className="jukebox">
              <Project info={["Jukebox", "music"]} icon="fas fa-headphones-alt" name="Social Jukebox" image={Jukebox} />
            </div>

            <div className="beatpop">
              <Project info={["Music", "game"]} icon="fas fa-headphones-alt" name="BeatPop" image={BeatPop} />
            </div>

            <div ref={this.about} className="about-header">
              <h2 className="work">About</h2>
              <hr className="style-two"/>
            </div>

            <div onMouseLeave={this.borderUnhighlight} onMouseOver={this.borderHighlight} className="about">
              <h2>{this.state.headerContent}</h2>
              <img id={this.state.imgId} className="self-img" src={this.state.img} alt="portrait of the developer"/>
              <p>
                I am a web developer and the founder of Zenkai Tech. Here at Zenkai Tech we design and build stunning web applications that align with modern and minimalist patterns with added spice. All products are built to be mobile responsive with the latest technologies that have the best chance to stand the test of time. My goal is to help businesses start an online presence so that they are more accessible. With happy customers, I can't help but love what I do and am always looking forward to my next project.
              </p>
            </div>



          </div>
          <div ref={this.contact} className="contact">
            <h1 className='work'>Contact</h1>
            <hr className="style-two"/>
            <h2>Need a website or have a cool project that you want to collaborate on? Feel free to reach out.</h2>

            <div className="card">
              <div className="icon-info">
                <div className="card-front">
                  <div className="contact-first">
                    <img src={pfp} alt="company logo" />
                  </div>
                  <div className="info-text">
                    <div className="my-info">
                      <small>Web Developer</small>
                      <h3>Andy Wang</h3>
                    </div>
                    <p><i className="far fa-envelope"></i> andy@zenkai.tech</p>
                    <p><i className="fas fa-phone"></i> 347-522-1971</p>
                    <p><i className="fas fa-globe"></i> zenkai.tech</p>
                  </div>
                </div>
                <div className="card-back">
                  <h2>Find Me On</h2>
                  <div className="icon-container">

                    <p className="linkedin-icon icon">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andy-wang32/"><i className="fab fa-linkedin"></i></a>
                    </p>

                    <p className="gh-icon icon">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ZenkaiDeveloper"><i className="fab fa-github"></i></a>
                    </p>

                    <p className="yt-icon icon">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCbSkA8Z_qpKpRenDjv2D3nA?"><i className="fab fa-youtube"></i></a>
                    </p>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Main)
