import React from 'react'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import Back from './back'

export default class Programming extends React.Component {
  render() {
    return (
      <div>
        <Back history={this.props.history} />
        <h1>Tech Projects</h1>
        <div className="project">
          <h3>iSearchMovies</h3>{' '}
          <div className="description">
            <span>
              A simple movie search app that allows a user to search IMDB for
              their favorite movie titles and leave a rating.
            </span>
          </div>
          <div className="techstack">
            <span>
              Technology: Javascript, React, Redux, Express, Sequelize
            </span>
            <img
              className="gif-vid"
              src="http://g.recordit.co/lBWVJdPcOa.gif"
            />
          </div>
        </div>
        <div className="project">
          <h3>Audtari</h3>{' '}
          <div className="description">
            <span>
              Play a variety of retro video games using only your voice as the
              controller. Choose between single-player or multiplayer options to
              play with friends. I helped implement Firebase & p5.Speech
              functionality as well as overall UX
            </span>
          </div>
          <div className="techstack">
            <span>Technology: Javascript, React, Firebase, p5</span>
            <ReactPlayer url="https://youtu.be/ceDXIIs-rDo" />
          </div>
        </div>
        <div className="project">
          <h3>Grace Chopper</h3>
          <div className="description">
            <span>
              A fully functioning e-commerce site built in seven days. I helped
              implement the guest session functionality.
            </span>
          </div>
          <div className="techstack">
            <span>
              Technology: Javascript, React, Redux, Express, Sequelize
            </span>
          </div>
        </div>
        <div className="project">
          <h3>Hackathon Project: Audio Plugins</h3>
          <div className="description">
            <span>
              Two functioning audio plugins built in 4 days: A volume slider to
              control how loud a song is and a filter that can affect the
              frequencies you hear. A quick dive into C++ and the JUCE framework
              in order to get this up and working in a DAW.
            </span>
          </div>
          <div className="techstack">
            <span>Technology: C++, JUCE</span>
            <ReactPlayer url="https://youtu.be/Xciaq8a7Rto" />
          </div>
        </div>
        <div className="project">
          <h3>MixSlider</h3>
          <div className="description">
            <span>
              An easier way to showcase unmixed vs. mixed music. Drag the slider
              from left to right to see how much has change from an unmixed
              version of a song to the final master. Stay tuned to my Audio
              section to see it implemented.
            </span>
          </div>
          <div className="techstack">
            <span>Technology: Javascript, React, Howl.js</span>
            <ReactPlayer url="https://youtu.be/W73rVFj84EE" />
          </div>
        </div>
      </div>
    )
  }
}
