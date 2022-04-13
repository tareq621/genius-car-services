import React from 'react';

const Footer = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <footer className='text-center mt-4'>
            <p>Copyright@ {year}</p>
        </footer>
    );
};

export default Footer;