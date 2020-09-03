import React from 'react'

class Login extends React.Component {

    state = {userName: "", password: ""}

    handleSubmit = (event) => {
        console.log(event)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="userName" placeholder="Enter username" onChange={this.handleChange} value={this.state.userName}/> <br></br>
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

export default Login