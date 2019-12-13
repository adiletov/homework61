import React, {Component} from 'react';
import axios from 'axios';
import ListCountry from "../ListCountry/ListCountry";
import CountryInfo from "../CountryInfo/CountryInfo";
import './Countries.css';

class Countries extends Component {
    state = {
        countries: [],
        oneCountry: null,
        borders: null,
    };

    async getCountry() {
        const response = await axios.get('/all?fields=name;alpha3Code;flag');
        let countries = await response.data;
        this.setState({countries});
    }

    componentDidMount() {
        this.getCountry()
    }

    async getCountryInfo(code) {
        const oneCountry = await axios.get('/alpha/' + code);
        let borders = oneCountry.data.borders;
        let request = borders.map(border => axios.get('/alpha/' + border + '?fields=name'));
        let countriesBorders;
        Promise.all(request)
            .then(borders => {
                countriesBorders =  borders.map(border => border.data)
            }).then(() => {
            this.setState({oneCountry: oneCountry.data, borders: countriesBorders});
        });


    }

    render() {
        return (
            <div className="blocks">
                <div className="countries">
                    <h5>Country</h5>
                    <div className="list">
                        {this.state.countries.map((country, index) => <ListCountry
                            img={country.flag}
                            key={index}
                            country={country.name}
                            id={country.name}
                            languages={country.languages}
                            onClick={() => this.getCountryInfo(country.alpha3Code)}
                        />)}
                    </div>
                </div>
                <div className="countryInfo" >
                    <h5>Country Info</h5>
                        {this.state.oneCountry ?
                            <CountryInfo
                                borders={this.state.borders}
                                country={this.state.oneCountry}/> : null}
                </div>
            </div>
        );
    }
}

export default Countries;