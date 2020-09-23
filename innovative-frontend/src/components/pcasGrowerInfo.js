import React from 'react' 
import { connect } from 'react-redux'
import Navbar from './Navbar'


const pcasGrowerInfo = (props) => {
    const listCropsAndGrowers = props.growersCrops.map(objects => {
      console.log(objects)
        return (
            <div key={objects.id}>
                <h3>Grower Account - {objects.grower_info.username}</h3>
                {/* {cropInfoToList} */}
            </div>
        )
    //    return eachArr.map(objects => {
    //            return (
    //                <div className='crop-info-container' key={objects.id}> <br></br>
    //                    <div className='growers-names'>
    //                      <h3>Grower Account - {objects.username}</h3><br></br>
    //                    </div>
    //                    <li>Name of crops - {objects.name}</li>
    //                    <li>Crop Description - {objects.description}</li>
    //                    <li>Acres accounted for - {objects.amount_of_acres}</li>
    //                </div>  
    //            )      
    //        })
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
const mapStateToProps = state => {
   return {growersCrops: state.pcaReducer}
}

export default connect(mapStateToProps)(pcasGrowerInfo)

  
// {'username' in objects ? <h3 style={{position: 'relative', bottom: '175px'}}>Grower Accounts - {objects.username}</h3> : null}
// {'name' in objects ? <li style={{position: 'relative', top: '315px'}}>Name of crops - {objects.name}</li> : null } 
//  {'description' in objects ?  <li style={{position: 'relative', top: '315px'}}>Crop Description - {objects.description}</li> : null }
//    {'amount_of_acres' in objects ? <li style={{position: 'relative', top: '315px'}}>Acres accounted for - {objects.amount_of_acres}</li> : null } 