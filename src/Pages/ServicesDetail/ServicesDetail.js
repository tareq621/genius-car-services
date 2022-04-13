import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to my detail: {serviceId}</h2>
        </div>
    );
};

export default ServicesDetail;