import React from 'react'; 
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logOutUser} from './actions'
import {Redirect, Route } from 'react-router-dom'
class Navbar extends React.Component {



   conditionallyRenderUserInfo = () => {
      if (this.props.user.username && this.props.user.type === "Grower") {
        return <div className="ui menu">
   
          <Link to='/profilehome' className='item'>Home</Link>
          
          <Link to='/addcrops' className='item' >Add Crops</Link>
         
          <Link to='/mycrops' className='item'>My Crops</Link>
     

          <Link onClick={() => this.props.logOutUser()} to='/' className='item'>Logout</Link>
         </div>
      } else if (this.props.user.username && this.props.user.type === 'Pca'){
        return <div className="ui menu">
        <Link to='/profilehome' className='item'>Home</Link>
        
        <Link to='/cropsattendedto' className='item'>Crops Attended to</Link>
        
        <Link onClick={() => this.props.logOutUser()} to='/' className='item'>Logout</Link>
      
      </div>
      } else {
        alert('You need to be logged in to access this')
        return (

        <Route >
          <Redirect to='/'/>
        </Route>
        )
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



const mapStateToProps = state => {

  return {user: state.userReducers}
}

export default connect(mapStateToProps, {logOutUser})(Navbar);