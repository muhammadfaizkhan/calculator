import React from 'react'
import './CalcInput.css'



const CalcInput = (props) => {
    return (
        <div className="calculator_input">
            {props.input}                
        </div>
    )
}


export default CalcInput
