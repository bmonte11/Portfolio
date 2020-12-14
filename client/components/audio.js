import React from 'react'
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player'
import {Link} from 'react-router-dom'

const size = {
  width: '100%',
  height: 300
}

export default class Audio extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div>
          <ul className="audio-projects">
            <li className="audio-link">
              <Link className="audio-title" to="/music">
                Music
              </Link>
              <ReactPlayer
                className="audio-media"
                url="https://www.youtube.com/watch?list=PLGNPBakM-N7_jnMBih8VOibJsLDGTTGEz&v=EPEEKVw8z9E&feature=emb_title"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/post-prod">
                Post-Production{' '}
              </Link>
              <ReactPlayer
                className="audio-media"
                url="https://www.youtube.com/watch?v=-BstMcit8VQ&feature=emb_logo"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/sound-design">
                Sound Design{' '}
              </Link>
              <ReactPlayer
                className="audio-media"
                url="https://soundcloud.com/brendan-monte-468088930/odessa-sample"
              />
            </li>
            <li className="audio-link">
              <Link className="audio-title" to="/sound-design">
                {' '}
                Podcasts{' '}
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
              <Link className="audio-title" to="/live-recordings">
                {' '}
                Live Recording{' '}
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
