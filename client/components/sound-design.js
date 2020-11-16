import React from 'react'
import ReactPlayer from 'react-player'

export default class SoundDesign extends React.Component {
  render() {
    return (
      <div>
        <h1>Sound Design</h1>
        <ReactPlayer url="https://soundcloud.com/b-mo-chi/theatre-sound-design-snippet-ubu-ii" />
        <ReactPlayer url="https://soundcloud.com/b-mo-chi/the-library" />
      </div>
    )
  }
}
