import React from 'react'; 
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logOutUser} from './actions'

class Navbar extends React.Component {



   conditionallyRenderUserInfo = () => {
      if (this.props.user && this.props.user.type === "Grower") {
        return <div className="ui menu">
   
          <Link to='/profilehome' className='item'>Home</Link>
          
          <Link to='/addcrops' className='item' >Add Crops</Link>
         
          <Link to='/mycrops' className='item'>My Crops</Link>
     

          <Link onClick={() => this.props.logOutUser()} to='/' className='item'>Logout</Link>
         </div>
      } else {
        return <div className="ui menu">
        <Link to='/cropsattendedto' className='item'>Crops Attended to</Link>
        
        <Link to='/profilehome' className='item'>Home</Link>
        
        <Link onClick={this.handleClick} to='/' className='item'>Logout</Link>
        
      </div>
      }
   }

    render () {
     

        return (
          
            <div className="ui menu">
            <div className="header item">
              {this.conditionallyRenderUserInfo()}
            </div>
           
          </div>
        )
    }
}

// need acess to redux so you can find out what user is logged in mapStateToProps, pull user object in from store write  ahelper function
// check and see if this.props.user.type === grower || pca 

const mapStateToProps = state => {
  // console.log(state.userReducers.user)
  return {user: state.userReducers}
}

export default connect(mapStateToProps, {logOutUser})(Navbar);