import React from 'react' 
import { connect } from 'react-redux'
const DropDownPcaList = (props) => {
    console.log(props)
    return (

    <div className={props.divClassName}>
    <label>{props.label}</label>
    <select name={props.inputName} value={props.inputVal} onChange={props.onChange}>
    <option></option>
    {props.pcaList.map(eachPca => {
                    return eachPca.map(pca => <option name='pcaId' value={pca.id} key={pca.id}>{pca.username}</option>)
                 })}
    </select>
</div>
    )
}

const mapStateToProps = state => {
    return {pcaList: state.pcaReducer}
}

export default connect(mapStateToProps)(DropDownPcaList)