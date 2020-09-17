import React from 'react'
import {createUser} from './actions'
import {getPcas} from './actions'
import { connect } from 'react-redux'
import Input from './Input'
import Header from './Header'
import DropDown from './DropDown'
import DropDownPcaList from './DropDownPcaList'
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
               <Input divClassName="field" label="Password" inputFieldType="password" inputName="password" inputVal={this.state.password} onChange={this.handleChange} />
               <Input divClassName="field" label="Bio" inputFieldType="text" inputName="bio" inputVal={this.state.bio} onChange={this.handleChange} />
                <DropDown divClassName="field" label="Type" inputName="type" inputVal={this.state.type} onChange={this.handleChange}/>
                <DropDownPcaList divClassName="field" label="Growers Pca" inputName="pcaId" inputVal={this.state.pcaId} onChange={this.handleChange}> </DropDownPcaList>
                    <div className="ui basic button">
                        
                        <button onClick={this.handleSubmit} style={{width: '1100px', height: '30px'}} >Sign me up!</button>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}


export default connect(null, { createUser, getPcas} )(SignUp)