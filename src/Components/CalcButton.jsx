import React, { Children } from 'react'
import './CalcButton.css'

const Button = (props) => {
    const isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }
    return (
        <div className={`calculator_button ${ isOperator(props.children) ? null : "operator"}`} onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button
