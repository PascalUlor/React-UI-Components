import React from 'react';
import './Button.css';

export default function NumberButton({ param, clickHandler, evalHandler }) {
    const digit = 'number__buttons';
    const symbol = 'symbol__button';
    let divClass = '';
    if (typeof param === 'number') {
        divClass = digit;
    } else {
        divClass = symbol;
    }
    if(param !== '=') {
        return (
            <div className={divClass} onClick={() => clickHandler(param)}>
                <p>{param}</p>
            </div>
        );
    } else {
        return (
            <div className={divClass} onClick={() => evalHandler()}>
                <p>{param}</p>
            </div>
        );
    }
    
}