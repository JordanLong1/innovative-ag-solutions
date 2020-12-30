import React from 'react' 
import Navbar from './Navbar'
import { connect } from 'react-redux'
import {getPcaToAccessGrowersCrops} from './actions'
// import {Redirect, Route } from 'react-router-dom'

class ProfileHome extends React.Component {

    componentDidMount() {
      
        if (this.props.user.type === 'Pca') {
            console.log(!this.props.user)
            this.props.getPcaToAccessGrowersCrops(this.props.user.id)
        } else if (!this.props.user) {
            alert('You must create an account or be logged in to get access')

        } 
    }


    render() {
        return (
            <div className='navbar importer'>
                <Navbar />
            <div className='ui container' style={{marginTop: '150px', textAlign: 'center'}}>
                <div className='welcome user'>
                    
                <h4>Welcome {this.props.user.username}</h4><br></br>
                About me
                <ul>
                    <li style={{listStyle: 'none'}}>
                        Name - {this.props.user.first_name} {this.props.user.last_name}<br></br>
                        Email - {this.props.user.email}<br></br>
                        Bio - {this.props.user.bio}<br></br>
                        Type - {this.props.user.type}

                    </li>
                    
                    </ul>
                </div>
            </div>   
         </div>
        )
    }
}

const mapStateToProps = state => {

    return {user: state.userReducers}
}

export default connect(mapStateToProps, {getPcaToAccessGrowersCrops})(ProfileHome)