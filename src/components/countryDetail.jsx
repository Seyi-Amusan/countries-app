import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CountryDetail = () => {
    const location = useLocation();
    const selectedCountry = location.state?.country;

    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate('/'); 
    };

    useEffect(() => {
        if (!selectedCountry) {
            navigate('/'); // Navigate back to the list if no country data
        }
    }, [selectedCountry, navigate]);


    return (
        <div className='country-detail'>
            {selectedCountry ? (
                <>
                    <button onClick={handleBackClick}>Back</button>
                    <div className='detail-container'>
                        <img src={selectedCountry.flag} alt={`${selectedCountry} flag`} className='country-detail-flag' />
                        <div>
                            <h2 className='country-detail-name'>{selectedCountry.name}</h2>


                            <div className='details-box'>
                                <div className='detail-box'>
                                    <p><b>Native Name: </b>{selectedCountry.nativeName}</p>
                                    <p><b>Population: </b>{selectedCountry.population}</p>
                                    <p><b>Region: </b>{selectedCountry.region}</p>
                                    <p><b>Sub Region: </b>{selectedCountry.subregion}</p>
                                    <p><b>Capital: </b>{selectedCountry.capital}</p>
                                </div>

                                <div className='detail-box'>
                                    <p><b>Top Level Domain: </b>{selectedCountry.topLevelDomain[0]}</p>
                                    <p><b>Currencies: </b>{selectedCountry.currencies[0].name}, {selectedCountry.currencies[0].code}, {selectedCountry.currencies[0].symbol}</p>
                                    <p><b>Languages: </b>{selectedCountry.languages[0].name}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </>
            ) : (
                <p>No country selected!</p>
            )}
        </div>
    );
};

export default CountryDetail;
