import React from 'react' 
import { connect } from 'react-redux'
import Navbar from './Navbar'




 const pcasGrowerInfo = (props) => {
     const listCropsAndGrowers = props.growersCrops.map(eachArr => {
        return eachArr.map(objects => {

                return (
                    <div key={objects.id}> <br></br>
                   
                    {'username' in objects ? <h3 style={{position: 'relative', bottom: '175px'}}>Grower Accounts - {objects.username}</h3> : null}
               {'name' in objects ? <li style={{position: 'relative', top: '200px'}}>Name of crops - {objects.name}</li> : null } 
                {'description' in objects ?  <li style={{position: 'relative', top: '200px'}}>Crop Description - {objects.description}</li> : null }
                {'amount_of_acres' in objects ? <li style={{position: 'relative', top: '200px'}}>Acres accounted for - {objects.amount_of_acres}</li> : null } 

                    </div>  
                )      
            })
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
    console.log(state.pcaReducer)
    return {growersCrops: state.pcaReducer}
}

export default connect(mapStateToProps)(pcasGrowerInfo)