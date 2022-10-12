import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <h3 className='web-name'>proLearning</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/quizes">Quizes</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/error">Error</Link>
            </div>
        </nav>
    );
};

export default Header;