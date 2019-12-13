import React from 'react';
import './ListCountry.css';

const ListCountry = (props) => {
    return (
        <div onClick={props.onClick} className="country">
            <img className="img" src={props.img} alt=""/>
            <p className="countriesTxt"> {props.country}</p>
        </div>
    );
};

export default ListCountry;