import React from 'react'
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        {/* <h2>Welcome to the portfolio of Brendan Monte</h2> */}
        <br />
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters left">
            <div className="leftside d-flex justify-content-center align-items-center">
              <Link to="/audio">Click here for Audio</Link>
            </div>
          </div>
          <div className="col-md-6 no-gutters right">
            <div className="rightside d-flex justify-content-center align-items-center">
              <Link to="/programming">Click here for Programming</Link>
            </div>
          </div>
        </div>
        {/* <div className="main-display">
          <Link to="/audio" className="btn btn-primary btn-lg" role="button">
            Click here for Audio
          </Link>
          <Link
            to="/programming"
            className="btn btn-primary btn-lg"
            role="button"
          >
            Click here for Programming
          </Link>
        </div> */}
      </div>
    )
  }
}

// export default Homepage
