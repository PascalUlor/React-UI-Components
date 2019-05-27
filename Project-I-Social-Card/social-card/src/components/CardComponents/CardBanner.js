import React from 'react';
import './Card.css';

function CardBanner ({url}){
    const backGrounfStyle = { backgroundImage:`url(${url})`,
    backgroundPosition:'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    width: '89%'}

    return(
    <div className="banner" style={backGrounfStyle}>
    </div>
    );
}

export default CardBanner;
