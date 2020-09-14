import React from 'react' 
import { connect } from 'react-redux'
import Navbar from './Navbar'

 const displayCrops = (props) => {
    const cropList = props.crops.map(crop => {
        return (
            <div className='ui inverted segment' style={{backgroundColor: 'green'}} key={crop.id} >
                <li >Name - {crop.name}</li>
                <li>Description - {crop.description}</li>
                <li>Acres - {crop.amount_of_acres}</li>
            </div>
        )
     })
    return (
        
            <div>
                <Navbar />
                <div className='ui inverted relaxed divided list'>
                <h1>Your Crops</h1>
                    <ul>
                    {cropList}
                    </ul>

                </div>
            </div>
       
    )
}

const mapStateToProps = state => {

    return {crops: state.cropsReducer.filter(crop => crop.grower_id === state.userReducers.id)}
 
}

export default connect(mapStateToProps)(displayCrops)