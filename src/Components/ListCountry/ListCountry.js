import React from 'react';
import './ListCountry.css';

const ListCountry = (props) => {
    return (
        <div onClick={props.onClick} className="country">
            <p className="countriesTxt"> {props.country}</p>
        </div>
    );
};

export default ListCountry;