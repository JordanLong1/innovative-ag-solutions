import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter Username">Username</input><br></br>
                    <input type="text" placeholder="Enter your password">Password</input>
                </form>
            </div>
        )
    }
}

export default Login