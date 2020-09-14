import React from 'react' 
import { connect } from 'react-redux'

 const displayCrops = (props) => {
    const cropList = props.crops.map(crop => {
        return (
            <div className='each crop' key={crop.id} >
                <li >Name - {crop.name}</li>
                <li>Description - {crop.description}</li>
                <li>Acres - {crop.amount_of_acres}</li>
            </div>
        )
     })
    return (
        
            <div>
                <h1>Your Crops</h1>
                    <ul>
                    {cropList}
                    </ul>
            </div>
       
    )
}

const mapStateToProps = state => {

    return {crops: state.cropsReducer.filter(crop => crop.grower_id === state.userReducers.id)}
 
}

export default connect(mapStateToProps)(displayCrops)