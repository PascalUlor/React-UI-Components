import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import './Header.css';

const content = `Let's learn React by building simple interface with components
Don't try to overthink, just keep it simple and have fun.
Once you feel comfortable using components you are well
on your way to mastering React!`
function HeaderContainer () {
    return (
    <header className='header__container'>
    <ImageThumbnail />
    <div className='header__text'>
    <HeaderTitle />
    <HeaderContent text={content}/>
    </div>
    </header>
    );
}

export default HeaderContainer;