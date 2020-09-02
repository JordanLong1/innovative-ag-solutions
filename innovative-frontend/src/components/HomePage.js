import React from 'react'
import SignUp from './SignUp'
const HomePage = () => {
    return (

        <div>
        <div className="ui segment">
           <h1 className="ui center aligned header">Welcome to Innovative Ag Solutions!</h1>
        </div>

       {/* <div className="ui container" style={{width: "500px", marginTop: "150px"}}>
       <label> If you already have an account, click me</label>
            <button className="massive ui button">Login!</button>
       </div> */}
       <div>
           <SignUp />
       </div>
        </div>


       
    )
}

export default HomePage