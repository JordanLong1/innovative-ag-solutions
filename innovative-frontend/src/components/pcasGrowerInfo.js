import React from 'react' 
import { connect } from 'react-redux'
import Navbar from './Navbar'


 const pcasGrowerInfo = (props) => {
     const listCropsAndGrowers = props.growersCrops.map(eachArr => {
        return eachArr.map(objects => {
            // return console.log(objects)
                return (
                    <div className='ui container' key={objects.id}> 
                    <div >
                    {'username' in objects ? <h3 >Grower Accounts - {objects.username}</h3> : null}
                    </div>
                    <ul>
               {'name' in objects ? <li>Name of crops {objects.name}</li> : null } 
                {'description' in objects ?  <li>Crop Description{objects.description}</li> : null }
                {'amount_of_acres' in objects ? <li>Acres accounted for - {objects.amount_of_acres}</li> : null } 

                    </ul>
                    </div>
                   
                )
                    
                    
            })
        })

    return (
        <div>
            <Navbar />
            {listCropsAndGrowers}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.pcaReducer)
    return {growersCrops: state.pcaReducer}
}

export default connect(mapStateToProps)(pcasGrowerInfo)