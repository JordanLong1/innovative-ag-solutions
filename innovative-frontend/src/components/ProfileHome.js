import React from 'react' 
import Navbar from './Navbar'
import { connect } from 'react-redux'

class ProfileHome extends React.Component {



    render() {
        return (
            <div className='navbar importer'>
                <Navbar />
            <div style={{marginTop: '150px', textAlign: 'center'}}>
                <div className='welcome user'>
                <h4>Welcome {this.props.user.username}</h4><br></br>
                About me
                <ul> 
                    {/* <li>Name: {`${this.props.user.firstName} ${this.props.user.lastName}`}</li> */}
                    <li>Name: {`${this.props.user.first_name} ${this.props.user.last_name}`}</li>
                     <li>Email: {this.props.user.email}</li>
                     <li>Bio: {this.props.user.bio}</li>
                    <li>User type: {this.props.user.type}</li>
                </ul>
                </div>

            </div>
              
            </div>
        )
    }
}

const mapStateToProps = state => {
   
    return {user: state.userReducers.user}
}

export default connect(mapStateToProps)(ProfileHome)