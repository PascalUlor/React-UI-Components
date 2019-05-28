import React from 'react';
import './Button.css';

export default function ActionButton (props) {
    const { text, bold } = props
    const myStyle = {
        fontWeight: bold ? 'bold' : 'lighter'
      };
    
    return (
    <div className="action__button">
        <p
        style={myStyle}>
        {text}</p>
    </div>
    );
}
