import React from 'react' 

const DropDowns = (props) => {

    return (
    <div>
        <div className={props.divClassName}>
            <label>{props.label}</label>
            <select name={props.inputName} value={props.inputVal} onChange={props.onChange}>
            <option></option>
            <option name="Pca" value="Pca">PCA</option>
            <option name="Grower" value="Grower">Grower</option>
            </select>
        </div>
    </div>
    )

}



    export default DropDowns