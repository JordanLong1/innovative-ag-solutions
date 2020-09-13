import React from 'react' 
import { connect } from 'react-redux'
// import {createCropInfo} from './actions'
 const displayCrops = (props) => {
     console.log(props)
    return (
        <div>
            <div>
                <h1>Your Crops</h1>
                    <p>Name of crop - {props.crop.name}</p>
                    <p>Description of crop - {props.crop.description}</p>
                    <p>Acres - {props.crop.amount_of_acres}</p>
            </div>
           
        </div>
    )
}

const mapStateToProps = state => {
   console.log(state.cropsReducer)
   // filter by the current user id (grower id)
    return {crop: state.cropsReducer.crop} //.filter(crop => crop.grower_id === user.id) || state.userReducer.id
 
}

export default connect(mapStateToProps)(displayCrops)