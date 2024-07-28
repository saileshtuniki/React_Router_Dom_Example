import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer  className="footer">
            <p>&copy; 2024 Your Name. All Rights Reserved.</p>
            <nav className="footer-nav">
                <a href="#About">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </footer>
    );
};

export default Footer;
