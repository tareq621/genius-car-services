import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to my detail: {serviceId}</h2>
            <div className=' text-center'>
                <Link to="/checkout" className=''>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetail;