import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Expert = (props) => {
    const navigate = useNavigate()
    const { name, img } = props.expert;
    const handleExpertDetail = event => {
        navigate('/expert')
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 text-center'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/expert" className="btn btn-primary" onClick={handleExpertDetail}>Go somewhere</Link>
                </div>
            </div >
        </div>
    );
};

export default Expert;