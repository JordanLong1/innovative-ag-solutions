import React from 'react' 

const Input = (props) => {
    // console.log(props)
    return (
        <div className={props.divClassName}>
            <label className='ui pointing label'>{props.label}</label>
           
            <input type={props.inputFieldType} name={props.inputName} value={props.inputVal} onChange={props.onChange} ></input>
          
        </div>
    )
}

export default Input

