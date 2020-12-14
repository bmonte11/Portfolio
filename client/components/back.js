import React, {Component} from 'react'

export default class Back extends Component {
  constructor(props) {
    super(props)
    this.back = this.back.bind(this)
  }

  back() {
    this.props.history.goBack()
  }

  render() {
    console.log('props?', this.props)
    return (
      <div>
        <button type="button" className="button-icon-left" onClick={this.back}>
          Back
        </button>
      </div>
    )
  }
}
