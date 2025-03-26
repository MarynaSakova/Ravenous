import React from "react";


function Business({business}) {

    return (
        <div className="business">
            <img src={business.image} alt={business.name}/>
            <h2>{business.name}</h2>
            <div className="business-info">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state}</p>
                <p>{business.zipcode}</p>
                <p>{business.category}</p>
                <p>⭑{business.rating}</p>
                <p>{business.reviewCount}</p>
            </div>
        </div>
    )
};

export default Business;