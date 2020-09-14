import React from 'react'
import { connect } from 'react-redux'
import { createCropInfo } from './actions'
import Navbar from './Navbar'
class CropInfoForm extends React.Component {

    state = { 
        name: "", 
        description: "", 
        amountOfAcres: 0, 
        growerId: 0
    }

    handleChange = (event) => {
     
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
      
        this.setState({
            ...this.state, 
            growerId: this.props.user.id})
       this.props.createCropInfo({...this.state, growerId: this.props.user.id}, () => {
           this.props.history.push('/mycrops')
       })

       this.setState({
        name: "", 
        description: "", 
        amountOfAcres: 0
       })
    }

    render() {
        return (
                <div>
                    <Navbar /> 
            <div className='ui container' style={{ marginTop: '100px', textAlign: 'center'}}>
                <h1>Please add information pertaining to your crops below</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className='ui input focus'>
                    <label className='ui pointing label'>Name of crop:</label>
                    <input style={{ width: '500px'}} type='text' name="name" placeholder='Please enter the name of crop' onChange={this.handleChange} value={this.state.name}/> 
                    </div> <br></br><br></br>
                    <div className='ui input focus'>
                    <label className='ui pointing label'>Brief Description:</label>
                    <textarea style={{ width: '490px'}} type='text' name="description" placeholder='Enter a description of the crop' onChange={this.handleChange} value={this.state.description}/> 
                    </div> <br></br><br></br>
                    <div className='ui input focus'>
                    <label className='ui pointing label'>Acres</label>
                    <input style={{ width: '580px'}} type='text' name="amountOfAcres" placeholder='Acres:' onChange={this.handleChange} value={this.state.amountOfAcres} /> 
                    </div> <br></br><br></br>
                    <button style={{width: '650px'}} className='ui large button'>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  
    return {user: state.userReducers}
}

export default connect(mapStateToProps, {createCropInfo})(CropInfoForm)