import React from 'react'
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player'

export default class Music extends React.Component {
  render() {
    return (
      <div>
        <h1>Recording, Production, Mixing, Mastering</h1>
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
        </div>
      </div>
    )
  }
}
