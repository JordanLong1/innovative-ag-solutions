import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
const HomePage = () => {
    return (

        <div>
        <div className="ui segment">
           <h1 className="ui center aligned header">Welcome to Innovative Ag Solutions!</h1>
        </div>

        {/* {need to add on clicks that render those components} */}
      <div>
          <p>If you already have an account, click me</p>
          <label>Login</label>
          <button>Login</button> 
      </div>

      <div>
          <p>If you're new here, click here to sign up</p>
          <label>Sign up</label>
          <button>Sign up</button>
      </div>
       {/* <div>
           <SignUp />
       </div> */}
        </div>


       
    )
}

export default HomePage