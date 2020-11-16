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
            <li>
              <Link to="/post-prod">Post-Production </Link>
              <ReactPlayer url="https://www.youtube.com/watch?v=-BstMcit8VQ&feature=emb_logo" />
            </li>
            <li>
              <Link to="/sound-design">Sound Design </Link>
              <ReactPlayer url="https://soundcloud.com/brendan-monte-468088930/odessa-sample" />
            </li>
            <li>
              Podcasts
              <SpotifyPlayer
                uri="spotify:show:0X3UA06nnixzRwYciBNIeA"
                view="list"
                theme="black"
              />
            </li>
            <li>
              <Link to="/live-recordings"> Live Recording </Link>
              <ReactPlayer url="https://www.youtube.com/watch?v=PdqO98xI0lw&t=0s" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
