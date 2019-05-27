import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card__content">
            <div className="card__text">
            <h4>
            Get started with React
            </h4>
            <p>
            React makes it painless to create interactive UIs. 
            Design simple views for each state in your application
            </p>
            <p className="last__text">reachjs.org</p>
            </div>
        </div>
    )
}

export default CardContent;