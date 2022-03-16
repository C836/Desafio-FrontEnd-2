import React from 'react';
import './navbar.scss'

function Navbar(){
    return(
        <nav className="nav">
            <img className="dots" src='assets/images/menu.svg' />
            <div className="marca">
                <img src='assets/images/logo.svg' />
                <span>
                    <h3>zutterman</h3>
                    <p>Measure Tapes</p>
                </span>   
            </div>
            <div className="menu">
                <a href="#">ABOUT US</a>
                <a href="#">MODELS</a>
                <a href="#">GUARANTEE</a>
            </div>
        </nav>
    )
}

export default Navbar