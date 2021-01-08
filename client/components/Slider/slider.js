import React from 'react'
import Slider from 'react-rangeslider'

export default class ProgressSlider extends React.Component {
  render() {
    const slideLabels = {
      0: 'Before',
      100: 'After'
    }
    return (
      <div>
        <Slider
          value={this.props.value}
          orientation="horizontal"
          labels={slideLabels}
          onChange={this.props.handleOnChange}
        />
      </div>
    )
  }
}
