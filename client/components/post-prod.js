import React from 'react'
import ReactPlayer from 'react-player'

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>Post-Production</h1>
        <div />
        <ReactPlayer
          className="audio-media"
          url="https://vimeo.com/355761239"
        />
      </div>
    )
  }
}
