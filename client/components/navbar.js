import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import Logo from '../../public/Logo.jpg'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <h1>Brendan Monte</h1> */}
    {/* <img src={process.env.PUBLIC_URL + logo} /> */}
    <nav>
      <div className="nav-items">
        {/* The navbar will show these links before you log in */}
        <Link to="/home">Home</Link>
        <Link to="/audio">Audio</Link>
        <img
          src="https://images.squarespace-cdn.com/content/5a3022f190bcce72c7b82f3c/1535738283857-CYMF7IV65Q7VKOOPX617/BrendanMonte_logo.png?content-type=image%2Fpng"
          alt="logo"
        />
        <Link to="/programming">Coding</Link>
        <Link to="/about">About Me</Link>
      </div>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
