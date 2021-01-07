import React from 'react'
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player'
import {Link} from 'react-router-dom'
import Back from './back'

export default class Audio extends React.Component {
  render() {
    return (
      <div>
        <Back history={this.props.history} />
        <h1>Projects</h1>
        <div>
          <ul className="audio-projects">
            <li className="audio-link">
              <Link className="audio-title" to="/audio/music">
                <h1>Music</h1>
              </Link>
              <SpotifyPlayer
                uri="spotify:album:1m8FLe47nkhWyBRw9AX4WR"
                size={{width: 640, height: 360}}
                view="coverart"
                theme="black"
                className="audio-media"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/audio/post-prod">
                <h1> Post-Production </h1>
              </Link>
              <ReactPlayer
                className="audio-media"
                url="https://www.youtube.com/watch?v=-BstMcit8VQ&feature=emb_logo"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/audio/sound-design">
                <h1> Sound Design </h1>
              </Link>
              <ReactPlayer
                className="audio-media"
                url="https://soundcloud.com/brendan-monte-468088930/odessa-sample"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/audio/podcasts">
                {' '}
                <h1>Podcasts </h1>
              </Link>
              <SpotifyPlayer
                uri="spotify:show:0X3UA06nnixzRwYciBNIeA"
                size={{width: 640, height: 360}}
                view="coverart"
                theme="black"
                className="audio-media"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/audio/live-recordings">
                {' '}
                <h1>Live Recording </h1>
              </Link>
              <ReactPlayer
                className="audio-media"
                url="https://www.youtube.com/watch?v=PdqO98xI0lw&t=0s"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
