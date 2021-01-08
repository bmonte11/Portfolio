import React from 'react'
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player'
import ProgressSlider from './Slider/slider'
import {Howl} from 'howler'

export default class Music extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      song1: null,
      song2: null,
      value: 0
    }
    this.capSong = new Howl({
      src: ['/Bad Guy Before.mp3'],
      volume: 1
    })
    this.capSongMixed = new Howl({
      src: ['/Bad Guy After.mp3'],
      volume: 0
    })
    this.handleChange = this.handleChange.bind(this)
    this.playSong = this.playSong.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  playSong(sound1, sound2) {
    if (
      this.state.playing === false &&
      this.state.song1 === null &&
      this.state.song2 === null
    ) {
      sound1.play()
      sound2.play()
      this.setState({
        playing: true,
        song1: sound1,
        song2: sound2
      })
    } else if (
      this.state.playing === false &&
      this.state.song1 !== null &&
      this.state.song2 !== null
    ) {
      sound1.play()
      sound2.play()
      this.setState({
        playing: true
      })
    }
  }

  play() {
    this.capSong.play()
    this.capSongMixed.play()
    this.setState({
      playing: true,
      song1: this.capSong,
      song2: this.capSongMixed
    })
  }

  pause() {
    this.capSong.pause()
    this.capSongMixed.pause()
    this.setState({
      playing: false
    })
  }

  handleChange(event) {
    // event.preventDefault()
    this.setState({
      value: event
    })

    if (this.state.value === 0) {
      this.state.song1.fade(this.state.song1._volume, 1.0, 50)
      this.state.song2.fade(this.state.song2._volume, 0.0, 50)
    } else if (this.state.value === 25) {
      this.state.song1.fade(this.state.song1._volume, 0.75, 50)
      this.state.song2.fade(this.state.song2._volume, 0.25, 50)
    } else if (this.state.value === 50) {
      this.state.song1.fade(this.state.song1._volume, 0.5, 50)
      this.state.song2.fade(this.state.song2._volume, 0.5, 50)
    } else if (this.state.value === 75) {
      this.state.song1.fade(this.state.song1._volume, 0.25, 50)
      this.state.song2.fade(this.state.song2._volume, 0.75, 50)
    } else if (this.state.value === 100) {
      this.state.song1.fade(this.state.song1._volume, 0.0, 50)
      this.state.song2.fade(this.state.song2._volume, 1.0, 50)
    }
  }

  render() {
    return (
      <div>
        <h1>Recording, Production, Mixing, Mastering</h1>
        <br />
        <h3>The B-Mo Audio Difference</h3>
        <h4>From A Cappella</h4>
        {/* <ReactHowler
          src={['/Bad Guy 4 dash 15 Dev Before.mp3']}
          playing={this.state.playing}
        /> */}
        <ProgressSlider
          handleOnChange={this.handleChange}
          orientation="horizontal"
          value={this.state.value}
        />
        <button
          type="button"
          onClick={() => {
            this.playSong(this.capSong, this.capSongMixed)
          }}
        >
          Play
        </button>
        <button type="button" onClick={this.pause}>
          Pause
        </button>
        {/* <h4>To Pop</h4>
        <ProgressSlider handleChange={this.handleChange} />
        <h4>To Hip-Hop</h4>
        <ProgressSlider handleChange={this.handleChange} />
        <h4>And everything in between</h4>
        <ProgressSlider handleChange={this.handleChange} /> */}
        <div className="audio-media">
          <SpotifyPlayer
            uri="spotify:playlist:4gpLvDju8C1zqnhcrvSb2y"
            size={{
              width: '50%',
              height: 300
            }}
            view="list"
            theme="black"
          />
          <ReactPlayer
            className="audio-media"
            url="https://www.youtube.com/watch?list=PLGNPBakM-N7_jnMBih8VOibJsLDGTTGEz&v=EPEEKVw8z9E&feature=emb_title"
          />
        </div>
      </div>
    )
  }
}
