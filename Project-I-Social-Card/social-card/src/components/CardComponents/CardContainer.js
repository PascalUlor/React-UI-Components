import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const nextPage = () => window.location.href = 'https://reactjs.org';

const imageUrl = `https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png`;
function CardContainer () {
   return (
    <div onClick={nextPage} className='card'>
        <CardBanner url={imageUrl}/>
        <CardContent />
    </div>
 );
}

export default CardContainer;