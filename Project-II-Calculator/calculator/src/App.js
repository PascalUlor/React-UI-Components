import React, { Component } from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = { display: '' }
    this.state = this.initialState;
  }

  displayHandler = value => {
if(value === 'X') {
  value = '*';
}
    this.setState({
      display: this.state.display + value
    })
  }

  clearDisplay = () =>{
    this.setState({
      display: ''
    })
  }

  evaluate = () =>{
    console.log(this.state.display.toString());
    this.setState({
      display: eval(this.state.display.toString())
    })
  }
  render() {
    return (
      <div className='main__container'>
        <CalculatorDisplay text={this.state.display} />
        <div className='button__container'>
          <div className='action__container'>
            <ActionButton clearHandler={this.clearDisplay} text='clear' />
            <NumberButton clickHandler={this.displayHandler} param={7} />
            <NumberButton clickHandler={this.displayHandler} param={8} />
            <NumberButton clickHandler={this.displayHandler} param={9} />
            <NumberButton clickHandler={this.displayHandler} param={4} />
            <NumberButton clickHandler={this.displayHandler} param={5} />
            <NumberButton clickHandler={this.displayHandler} param={6} />
            <NumberButton clickHandler={this.displayHandler} param={1} />
            <NumberButton clickHandler={this.displayHandler} param={2} />
            <NumberButton clickHandler={this.displayHandler} param={3} />
            <ActionButton clickHandler={this.displayHandler} text={0} bold />
          </div>
          <div className='symbols'>
            <NumberButton clickHandler={this.displayHandler} param='÷' />
            <NumberButton clickHandler={this.displayHandler} param='X' />
            <NumberButton clickHandler={this.displayHandler} param='—' />
            <NumberButton clickHandler={this.displayHandler} param='+' />
            <NumberButton evalHandler={this.evaluate} param='=' />
          </div>
        </div>

        {/* <h3>Welcome to React Calculator</h3>
        <p>
          We have given you a starter project. You'll want to build out your
          components in their respective files, remove this code and replace it
          with the proper components.
        </p>
        <p>
          <strong>
            Don't forget to `default export` your components and import them here
            inside of this file in order to make them work.
          </strong>
        </p> */}
      </div>
    )
  }

};

export default App;
