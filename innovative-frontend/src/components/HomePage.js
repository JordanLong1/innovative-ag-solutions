import React from 'react'

import { Link } from 'react-router-dom'
const HomePage = () => {


    
    
    return (

        <div>
        <div className="ui segment">
           <h1 className="ui center aligned header">Welcome to Innovative Ag Solutions!</h1>
        </div>

      <div>
          <p>If you already have an account, click me</p>
          <Link to='/login'>Login</Link> 

      </div>

      <div>
          <p>If you're new here, click here to sign up</p>
         
         <Link to='/signup'>Sign up</Link>
         
      </div>
     
        </div>


       
    )
}

export default HomePage