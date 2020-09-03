import React from 'react'
import {getUsers} from '../actions'
import { connect } from 'react-redux'
class PcasContainer extends React.Component {

    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
                Pcas container
                {/* {console.log(this.props)} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    // return {state: console.log(state)}
    return{}
}

export default connect(mapStateToProps, {getUsers})(PcasContainer)