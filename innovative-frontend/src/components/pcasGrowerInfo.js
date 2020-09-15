import React from 'react' 
import { connect } from 'react-redux'



 const pcasGrowerInfo = (props) => {
     const listCropsAndGrowers = props.growersCrops.map(eachArr => {
        return eachArr.map(objects => {
            return objects.map(eachObj => {
                return (
                    <div key={eachObj.id}> 
                    {'username' in eachObj ? <h3>Grower Accounts - {eachObj.username}</h3> : null} <br></br>
                    <ul>
               {'name' in eachObj ? <li>Name of crops {eachObj.name}</li> : null } 
                {'description' in eachObj ?  <li>Crop Description{eachObj.description}</li> : null }
                {'amount_of_acres' in eachObj ? <li>Acres accounted for - {eachObj.amount_of_acres}</li> : null } 

                    </ul>
                    </div>
                )
                    
                    
            })
        })
     })
    return (
        <div>
            <h1> Your Growers and Crops </h1>
          
             {listCropsAndGrowers}

            
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('state from pcagrowersinfo comp', state.pcaReducer.map(eachArr => eachArr.map(test => console.log('inside of second map',test)))) 
    return {growersCrops: state.pcaReducer}
}

export default connect(mapStateToProps)(pcasGrowerInfo)