import React from 'react'
import { connect } from 'react-redux'
import { createCropInfo } from './actions'
class CropInfoForm extends React.Component {

    state = { 
        name: "", 
        description: "", 
        amountOfAcres: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.createCropInfo(this.state, () => {
        //     this.props.history.push('')
        // })
    }

    render() {
        return (
            <div>
                <h1>Please add information pertaining to your crops below</h1>

                <form onSubmit={this.handleSubmit} >
                    <input type='text' name='name' placeholder='Please enter the name of crop' onChange={this.handleChange} value={this.state.name}/>
                    <textarea name='descriptiom' placeholder='Enter a description of the crop' onChange={this.handleChange} value={this.state.description}/>
                    <input type='text' name='amountOfAcres' placeholder='Acres:' onChange={this.handleChange} value={this.state.amountOfAcres} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createCropInfo})(CropInfoForm)