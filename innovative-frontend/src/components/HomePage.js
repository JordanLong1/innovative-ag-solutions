import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter, Route, Link } from 'react-router-dom'
const HomePage = () => {


    
    
    return (

        <div>
        <div className="ui segment">
           <h1 className="ui center aligned header">Welcome to Innovative Ag Solutions!</h1>
        </div>

      <div>
          <p>If you already have an account, click me</p>
          <BrowserRouter >
          <Link to='/login'>Login</Link> 

          <Route path='/login' exact component={Login}> 
          </Route>
          </BrowserRouter>
      </div>

      <div>
          <p>If you're new here, click here to sign up</p>
         <BrowserRouter>
         <Link to='/signup'>Sign up</Link>
         <Route path='/signup' exact component={SignUp}></Route>
         </BrowserRouter>
      </div>
     
        </div>


       
    )
}

export default HomePage