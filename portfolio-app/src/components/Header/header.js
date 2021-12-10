import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <h1>Esteban Rendon</h1>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link to='/work'>Projects</Link></li>
                        <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;