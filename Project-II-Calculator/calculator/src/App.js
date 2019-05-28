import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div className='main__container'>
      <CalculatorDisplay />
      <div className='button__container'>
        <div className='action__container'>
          <ActionButton text='clear' />
          <NumberButton param={7} />
          <NumberButton param={8} />
          <NumberButton param={9} />
          <NumberButton param={4} />
          <NumberButton param={5} />
          <NumberButton param={6} />
          <NumberButton param={1} />
          <NumberButton param={2} />
          <NumberButton param={3} />
          <ActionButton text='0' />
        </div>
        <div className='symbols'>
        <NumberButton param='÷' />
        <NumberButton param='X' />
        <NumberButton param='-' />
        <NumberButton param='+' />
        <NumberButton param='=' />
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
  );
};

export default App;
