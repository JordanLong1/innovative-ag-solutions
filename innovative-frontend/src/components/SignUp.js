import React from 'react'
import {createUser} from './actions'
import {getPcas} from './actions'
import { connect } from 'react-redux'
import Input from './Input'
import Header from './Header'
import DropDowns from './DropsDowns'
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

     this.props.getPcas()
    }
    render () {
        return (
            <div>
           <Header />

            <div className="ui container" style={{marginTop: "150px"}}>

            <div className="ui form">
           
               <Input divClassName="field" label="username" inputFieldType="text" inputName="userName" inputVal={this.state.userName} onChange={this.handleChange} />
               <Input divClassName="field" label="First Name" inputFieldType="text" inputName="firstName" inputVal={this.state.firstName} onChange={this.handleChange} />
               <Input divClassName="field" label="Last name" inputFieldType="text" inputName="lastName" inputVal={this.state.lastName} onChange={this.handleChange} />
               <Input divClassName="field" label="email" inputFieldType="text" inputName="email" inputVal={this.state.email} onChange={this.handleChange} />
               <Input divClassName="field" label="Password" inputFieldType="text" inputName="password" inputVal={this.state.password} onChange={this.handleChange} />
               <Input divClassName="field" label="Bio" inputFieldType="text" inputName="bio" inputVal={this.state.bio} onChange={this.handleChange} />

                <DropDowns divClassName="field" label="Type" inputName="type" inputVal={this.state.type} onChange={this.handleChange}/>
                 
                    <div className='required field'>
                <label className='ui pointing label'>Growers PCA</label>
                <select onChange={this.handleChange} name="pcaId" value={this.state.pcaId} >
                    <option></option>
                {this.props.pcaList.map(eachPca => {
                   return eachPca.map(pca => <option name='pcaId' value={pca.id} key={pca.id}>{pca.username}</option>)
                })}
                   
                </select>
                    </div> 
                    
                    <div className="ui basic button">
                        
                        <button onClick={this.handleSubmit} style={{width: '1100px', height: '30px'}} >Sign me up!</button>
                    </div>
                </div>

            </div>
            </div>
         
          
       
        )
    }
}

const mapStateToprops = state => {
     return {pcaList: state.pcaReducer}
}




export default connect(mapStateToprops, {createUser, getPcas} )(SignUp)