import React from 'react'
import ReactPlayer from 'react-player'

export default class Live extends React.Component {
  render() {
    return (
      <div>
        <h1>Live Recordings</h1>
        <ReactPlayer url="https://vimeo.com/298215080" />
      </div>
    )
  }
}
