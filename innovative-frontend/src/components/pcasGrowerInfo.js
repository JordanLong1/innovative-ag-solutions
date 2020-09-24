import React from 'react' 
import { connect } from 'react-redux'
import Navbar from './Navbar'

const cropList = (cropsArr) => {
   return cropsArr.map(crop => {
      return (
     <li style={{listStyle: 'none'}} key={crop.id}>
        Name of Crop - {crop.name}<br></br>
         Description - {crop.description}<br></br>
         Acres - {crop.amount_of_acres}
     </li>
      )
    })
    } 

const pcasGrowerInfo = (props) => {
    console.log(props.growersCrops.grower_info)
    if (props.growersCrops.length === 1) {
        return (
            <div>
                <Navbar />
            <div>
                <h1>Your crops currently attended to: </h1>
            </div>
            </div>
        )
    } else {
        const listCropsAndGrowers = props.growersCrops.map(objects => {
            return (
                <div key={objects.grower_info.id}>
                    <h3>Grower Account - {objects.grower_info.username}</h3>
                    <ul>
                    {cropList(objects.crops)}
                
                     </ul>
                </div>
            )
           })
       return (
           <div className='test div'>
               <Navbar />
               <div className='ui container'>
               <h1 style={{textAlign: 'center'}}>Crops currently attended to:</h1>
               {listCropsAndGrowers}
               </div>
           </div>
       )
    }
}
const mapStateToProps = state => {
   return {growersCrops: state.pcaReducer}
}

export default connect(mapStateToProps)(pcasGrowerInfo)

  
 