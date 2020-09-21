import React from 'react'
import {handleLogin} from './actions'
import { connect } from 'react-redux'
import Input from './Input'

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
            <div className='ui container' style={{width: '500px', marginTop: '150px', fontSize: '25px'}}>
              
                <h1>Log-In below</h1>
                <form onSubmit={this.handleSubmit}>
                    <div style={{width: '300px'}}>
                      <Input divClassName="field" label="Email" inputFieldType="text" inputName="email" inputVal={this.state.email} onChange={this.handleChange} />
                      <Input divClassName="field" label="Password" inputFieldType="password" inputName="password" inputVal={this.state.password} onChange={this.handleChange} /><br></br>
                    <button className='ui large button' type="submit" >Submit</button>

                    </div>
                    
                </form>
            </div>
         </div>
        )
    }
}

export default connect(null, {handleLogin})(Login)