import React from 'react'
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the portfolio of Brendan Monte</h2>
        <br />
        <Link to="/audio" className="btn btn-primary btn-lg" role="button">
          Click here for Audio
        </Link>
        <button type="button" onClick={this.onClick}>
          Click here for Programming
        </button>
      </div>
    )
  }
}

// export default Homepage
