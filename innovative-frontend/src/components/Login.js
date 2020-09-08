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
                <h1>Log-In below</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email}/> <br></br>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password}/><br></br>
                    <div className="ui basic button">
                    <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {handleLogin})(Login)