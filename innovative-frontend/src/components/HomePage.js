import React from 'react'

import { Link } from 'react-router-dom'
const HomePage = () => {

    return (

        <div>
        <div className="ui segment">
           <h1 className="ui center aligned header">Welcome to Innovative Ag Solutions!</h1>
        </div>

      <div className='ui container' style={{marginTop: '100px'}}>
          <p style={{ fontSize: '50px'}}>Already have an account?</p>
          <Link to='/login' style={{ fontSize: '50px'}}>Login</Link> 

      </div>

      <div className='ui container' style={{marginTop: '110px'}}>
          <p style={{ fontSize: '50px'}}>New here huh? Let's get you signed up</p>
         
         <Link to='/signup' style={{ fontSize: '50px'}}>Sign up</Link>
         
      </div>
     
        </div>


       
    )
}

export default HomePage