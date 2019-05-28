import React from 'react';
import './Button.css';

export default function ActionButton (props) {
    const { text, bold } = props
    const buttonStyle = {
        fontWeight: bold ? 'bold' : 'lighter'
      };
    
    return (
    <div className="action__button">
        <p
        style={buttonStyle}>
        {text}</p>
    </div>
    );
}
