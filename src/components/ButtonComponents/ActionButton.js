import React from 'react';
import './Button.css';

export default function ActionButton (props) {
    const { text, bold, clearHandler, clickHandler } = props
    const buttonStyle = {
        fontWeight: bold ? 'bold' : 'lighter'
      };
    if(text === 'clear') {
        return (
            <div className="action__button" onClick={() => clearHandler()} >
                <p
                style={buttonStyle}>
                {text}</p>
            </div>
            );
    } else {
        return (
            <div className="action__button" onClick={() => clickHandler(text)}>
                <p
                style={buttonStyle}>
                {text}</p>
            </div>
            );
    }
    
}
