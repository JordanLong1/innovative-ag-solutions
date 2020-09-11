import React from 'react' 
import { connect } from 'react-redux'
// import {createCropInfo} from './actions'
 const displayCrops = () => {
    return (
        <div>
            Crops go here
            
        </div>
    )
}

const mapStateToProps = state => {
   
    return {crop: state.cropsReducer.crop}
}

export default connect(mapStateToProps)(displayCrops)