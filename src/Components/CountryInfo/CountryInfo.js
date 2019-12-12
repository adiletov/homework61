import React from 'react';
import './InfoBlock.css';
import Borders from "../Borders/Borders";

const CountryInfo = props => {
    return (
        <div className="infoBlock">
            <h3>{props.country.name}</h3>
            <p>Capital : {props.country.capital}</p>
            <p>Population: {props.country.population}</p>
            <img className="infoImg" src={props.country.flag} alt={props.country.name}/>
            <h3>Borders with: </h3>
            {props.borders.map((border, index)=>  <Borders key={index} borders={border.name}/>)}
        </div>
    );
};

export default CountryInfo;