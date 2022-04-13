import React from 'react';
import './NotFound.css'
import error from '../../../images/notfound.jpg'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;