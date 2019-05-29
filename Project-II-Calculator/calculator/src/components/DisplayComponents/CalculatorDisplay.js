import React from 'react';
import './Display.css';

export default function CalculatorDisplay (props) {
    return (
    <div className='calculator__display'>
        <p>{props.text}</p>
    </div>
        );
}