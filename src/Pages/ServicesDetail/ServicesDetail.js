import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className='mt-2'>You are about book: {service.name}</h2>
            <div className=' text-center'>
                <Link to="/checkout" className=''>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetail;