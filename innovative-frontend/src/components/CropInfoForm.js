import React from 'react'

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