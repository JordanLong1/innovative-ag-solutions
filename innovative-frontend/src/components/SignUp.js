import React from 'react'

class SignUp extends React.Component {

    render () {
        return (

            // gonna need state, to keep track of user info!

           
            <div className="ui container" style={{alignItems: "center"}}>

            <div className="ui form">
                <div className="fields">

                <div className="required field">
                    <label>Type</label>
                     <select>
                       <option value="1">PCA</option>
                       <option value="2">Grower</option>
                     </select>
                   

                    </div>

                <div className="required field">
                <label>Username</label>
                 <input type="text" placeholder="Username"/>
                 </div>
          
             <div className="field">
                  <label>First name</label>
                  <input type="text" placeholder="First name"/>
                     </div>
                     
             <div className="field">
                  <label>Last name</label>
                <input type="text" placeholder="Last Name"/>
                    </div>

                    <div className="required field">
                  <label>Email</label>
                <input type="text" placeholder="example@example.com"/>
                    </div>
                    
                    <div className="required field">
                  <label>Password</label>
                <input type="text" placeholder="Password"/>
                    </div>
                    
                    <div className="ui basic button">
                        <label>Submit</label>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
            </div>
       
        )
    }
}


export default SignUp