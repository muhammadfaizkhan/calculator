import React from 'react'
import './DelButton.css'



const DelButton = (props) => {
    return (
        <div className="calculator_delete" onClick={props.handleClear}>
                {props.children}
        </div>
    )
}

export default DelButton
