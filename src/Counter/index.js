import React, {Component} from 'react';

import Delta from './Delta';

import './counter.scss';

class Counter extends Component {
    state = {
        value : 0,
        delta : 1,
        delta2 : 1
    };

    render() {// 화면을 그려줌
        let {value, delta, delta2} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <Delta delta={delta} handleChange={this.handleChange}/>
                <Delta delta={delta2} handleChange={this.handleChange}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMultiple}>*</button>
                <button onClick={this.handleDivide}>/</button>
            </div>
        );
    }

    handleChange = event => this.setState({
        delta: parseInt(event.target.value)
    });

    handlePlus = () => {
        this.setState({
            value: this.state.delta + this.state.delta2
        });
    }

    handleMinus = () => {
        this.setState({
            value: this.state.delta - this.state.delta2
        });
    }

    handleMultiple = () => {
        this.setState({
            value: this.state.delta * this.state.delta2
        });
    }

    handleDivide = () => {
        this.setState({
            value: this.state.delta / this.state.delta2
        });
    }
}

export default Counter;