import React from 'react' 
import { connect } from 'react-redux'



// const handleGrowersCrops = (props) => {}


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
//    console.log(state.userReducers.id) gets us user id
        // console.log(state.cropsReducer.filter(crops => console.log(crop.grower_id === state.userReducers.id))) THIS GIVES US WHAT WE WANT I THINK
   // filter by the current user id (grower id)
    return {crops: state.cropsReducer.filter(crop => crop.grower_id === state.userReducers.id)} //.filter(crop => crop.grower_id === user.id) || state.userReducer.id
    // .crop.filter(crop => crop.id )
 
}

export default connect(mapStateToProps)(displayCrops)