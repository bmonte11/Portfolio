import React from 'react'

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the portfolio of Brendan Monte</h2>
        <br />

        <button type="button" onClick={this.onClick}>
          Click here for Audio
        </button>
        <button type="button" onClick={this.onClick}>
          Click here for Programming
        </button>
      </div>
    )
  }
}

// export default Homepage
