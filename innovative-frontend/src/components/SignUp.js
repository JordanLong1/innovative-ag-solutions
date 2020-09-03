import React from 'react'

class SignUp extends React.Component {

    state = {
        userName: "", 
        firstName: "", 
        lastName: "",
        email: "", 
        password: "", 
        type: ""
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('hello') // after this, take them to their respective homepage.. 
    }
    render () {

        return (

            <div className="ui container" style={{alignItems: "center"}}>

            <div className="ui form">
                <div className="fields">

                <div className="required field">
                    <label>Type</label>
                     <select onChange={this.handleChange} name="type" value={this.state.type}>
                       <option value="1">PCA</option>
                       <option value="2">Grower</option>
                     </select>
                   

                    </div>

                <div className="required field">
                <label>Username</label>
                 <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
                 </div>
          
             <div className="field">
                  <label>First name</label>
                  <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                     </div>
                     
             <div className="field">
                  <label>Last name</label>
                <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                    </div>

                    <div className="required field">
                  <label>Email</label>
                <input type="text" name="email" placeholder="example@example.com" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    
                    <div className="required field">
                  <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    
                    <div className="ui basic button">
                        <label>Submit</label>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
            </div>
       
        )
    }
}


export default SignUp