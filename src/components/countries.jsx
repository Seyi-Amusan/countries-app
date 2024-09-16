import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountryCard from './countryCard';  // Assuming this is your card component

const Countries = ({ countryList }) => {
    const navigate = useNavigate(); // useNavigate hook for navigation

    // Handle the click event
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
