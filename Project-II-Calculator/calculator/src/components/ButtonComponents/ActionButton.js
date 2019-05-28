import React from 'react';
import './Button.css';

export default function ActionButton ({text}) {
    return (
    <div className="action__button">
        <p>{text}</p>
    </div>
    );
}
