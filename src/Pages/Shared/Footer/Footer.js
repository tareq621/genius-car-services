import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <footer className='text-center mt-4'>
            <p>Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year}</p>

        </footer>
    );
};

export default Footer;