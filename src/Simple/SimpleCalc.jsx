import { Button, Input, Row } from 'antd'
import React, { Component } from 'react'
import CalcInput from '../Components/CalcInput'
import CalcButton from '../Components/CalcButton'
import DelButton from '../Components/DelButton'
import { useState } from 'react'
import {Howl, Howler} from 'howler'
import './SimpleCalc.css'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import MinusOutlined from '@ant-design/icons/MinusOutlined'
import {RiDivideLine} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'
import * as math from 'mathjs'


class SimpleCalc extends Component{

    constructor(props) {
        super(props);
        this.state = {
            input: []
        }
    }
    addToInput = val => {
        this.setState({ input: this.state.input + val })
    }
    handleEqual = () => {
        this.setState({ input: math.evaluate (this.state.input)})
    
    }
    addZeroToInput = val => {
        if(this.state.input !== ''){
            this.setState({input: this.state.input + val})
        }else{
        }
    }

    render(){       

        return (
                <div className="calculator_simple">
                    <Row>
                        <CalcInput input={this.state.input} />
                    </Row>
                    <Row>
                        <CalcButton handleClick={this.addToInput}> 7 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> 8 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> 9 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> * </CalcButton>
                    </Row>
                    <Row>
                        <CalcButton handleClick={this.addToInput}> 4 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> 5 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> 6 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> + </CalcButton>
                    </Row>
                    <Row>
                        <CalcButton handleClick={this.addToInput}> 1 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> 2 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> 3 </CalcButton>
                        <CalcButton handleClick={this.addToInput}> / </CalcButton>
                    </Row>
                    <Row>
                        <CalcButton handleClick={this.addZeroToInput}>0</CalcButton>
                        <CalcButton handleClick={this.addToInput}> . </CalcButton>
                        <CalcButton handleClick={this.addToInput}> - </CalcButton>
                        <CalcButton handleClick={() => this.handleEqual()}> = </CalcButton>
                    </Row>
                    <Row>
                        <DelButton handleClear={() => this.setState({input: ""})}> DEL </DelButton>
                    </Row>
                </div>
            )
        }
        
}

export default SimpleCalc
