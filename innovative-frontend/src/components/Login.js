import React from 'react'
import {handleLogin} from './actions'
import { connect } from 'react-redux'
class Login extends React.Component {

    state = {email: "", password: ""}

    
    handleSubmit = (event) => {
        event.preventDefault()

       this.props.handleLogin(this.state, () => {
           this.props.history.push('/profilehome')
       })
     
        this.setState({
            email: "", 
            password: ""
        })
       }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div>

        
            <div className="ui segment">
            <h1 className="ui center aligned header">Welcome to Innovative Ag Solutions!</h1>
            </div>
            <div className='ui container' style={{width: '500px', marginTop: '150px'}}>
              
                <h1>Log-In below</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='ui input'>
                    <label className='ui pointing label'>Email</label>
                    <input style={{width: '300px'}} type="text" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email}/> <br></br>
                    </div> <br></br>
                    <div className='ui input'>

                    <label className='ui pointing label'>Password</label>
                    <input style={{width: '300px'}} type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password}/><br></br>
                    </div> <br></br><br></br>
                    
                    
                    <button className='ui large button' type="submit" >Submit</button>
                    
                </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {handleLogin})(Login)