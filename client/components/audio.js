import React from 'react'
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player'
import {Link} from 'react-router-dom'

export default class Audio extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div>
          <ul>
            <li>
              <Link to="/music">Music</Link>
              <ReactPlayer url="https://www.youtube.com/watch?list=PLGNPBakM-N7_jnMBih8VOibJsLDGTTGEz&v=EPEEKVw8z9E&feature=emb_title" />
            </li>
            <li>Post-Production</li>
            <li>Sound Design</li>
            <li>
              Podcasts
              <SpotifyPlayer
                uri="spotify:show:0X3UA06nnixzRwYciBNIeA"
                size={{
                  width: '50%',
                  height: 300
                }}
                view="list"
                theme="black"
              />
            </li>
            <li>Live Recording</li>
          </ul>
        </div>
      </div>
    )
  }
}
