import React from 'react'

import {createUser} from './actions'
import {getPcas} from './actions'
import { connect } from 'react-redux'
// import pcasReducer from './reducers/pcasReducer'

class SignUp extends React.Component {

    state = {
        userName: "", 
        firstName: "", 
        lastName: "",
        email: "", 
        password: "", 
        type: "", 
        bio: "", 
        pcaId: 0
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.state, () => {
            this.props.history.push('/profilehome')
        })

        this.setState({
            userName: "", 
            firstName: "", 
            lastName: "",
            email: "", 
            password: "", 
            type: "", 
            bio: "", 
            pcaId: 0
        })
    }

    componentDidMount() {
        // console.log(this.props)
     this.props.getPcas()
     
    }
    render () {

        return (

            <div className="ui container" style={{marginTop: "150px", alignItems: "center"}}>

            <div className="ui form">
                <div className="fields">


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

                    <div className="required field">
                <label>Bio</label>
                 <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio}/>
                 </div>

                    <div className="required field">
                    <label>Type</label>
                     <select onChange={this.handleChange} name="type" value={this.state.type}>
                       <option ></option>
                       <option name="Pca" value="Pca">PCA</option>
                       <option  name="Grower" value="Grower">Grower</option>
                     </select>
                    </div>

                    <div className='required field'>
                <label>Growers PCA</label>
                <select onChange={this.handleChange} name="pcaId" value={this.state.pcaId} >
                    <option></option>
                {this.props.pcaList.map(eachPca => {
                   return eachPca.map(pca => <option name='pcaId' value={pca.id} key={pca.id}>{pca.username}</option>)
                })}
                   
                </select>
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

const mapStateToprops = state => {
//    console.log(state.pcaReducer)
    return {pcaList: state.pcaReducer}
}




export default connect(mapStateToprops, {createUser, getPcas} )(SignUp)