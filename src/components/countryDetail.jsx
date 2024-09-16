import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryDetail = () => {
    const location = useLocation();
    const selectedCountry = location.state?.country;

    return (
        <div>
            {selectedCountry ? (
                <div>
                    <h1>{selectedCountry.name}</h1>
                    <p>Capital: {selectedCountry.capital}</p>
                    {/* Render more details as needed */}
                </div>
            ) : (
                <p>No country selected!</p>
            )}
        </div>
    );
};

export default CountryDetail;
