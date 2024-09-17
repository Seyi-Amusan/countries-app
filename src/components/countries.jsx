import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountryCard from './countryCard';  

const Countries = ({ countryList }) => {
    const navigate = useNavigate(); 

    const handleCardClick = (country) => {
        // Navigate to the country's detail page with the country data in the route state
        navigate(`/${country.name}`, { state: { country } });
    };

    return (
        <div className="countries-container">
            {countryList.map((country, index) => (
                <div key={index} onClick={() => handleCardClick(country)}>
                    <CountryCard info={country} />
                </div>
            ))}
        </div>
    );
};

export default Countries;
