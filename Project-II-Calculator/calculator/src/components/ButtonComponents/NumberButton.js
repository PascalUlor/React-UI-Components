import React from 'react';
import './Button.css';

export default function NumberButton ({digit}) {
    return (
    <div className='number__buttons'>
        <p>{digit}</p>
    </div>
    );
}