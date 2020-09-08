import React from 'react'; 
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logOutUser} from './actions'

class Navbar extends React.Component {


  handleClick = () => {
    this.props.logOutUser()
  }

    render () {
        return (
            <div className="ui menu">
            <div className="header item">
             Home
            </div>
            <a className="item" href=''>
              My Growers
            </a>
            <a className="item" href=''>
              Messages
            </a>
            <a className="item" href=''>
              Rec-Forms
            </a>
            <div className="right menu">
              <div className="header item"> 
                <Link onClick={this.handleClick} to='/' className='item'>Logout</Link>
              </div>
            </div>
          </div>
        )
    }
}

export default connect(null, {logOutUser})(Navbar);