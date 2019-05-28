import React from 'react';
import './Button.css';

export default function NumberButton ({param}) {
    const digit= 'number__buttons';
    const symbol ='symbol__button';
    let divClass = '';
    if ( typeof param === 'number') {
        divClass = digit;
    } else {
        divClass = symbol;
    }
    return (
    <div className={divClass}>
        <p>{param}</p>
    </div>
    );
}