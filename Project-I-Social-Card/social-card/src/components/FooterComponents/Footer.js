import React from 'react';
import './Footer.css';

function Footer (){
    return (
        <footer>
            <div className="footerContainer">
            <i className="far fa-comment"></i>
            <i className="fas fa-sync-alt"><span>6</span></i>
            <i className="far fa-heart"><span>4</span></i>
            <i className="far fa-envelope"></i>
            </div>
        </footer>
    )
}

export default Footer;