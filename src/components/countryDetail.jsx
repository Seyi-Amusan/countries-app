import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryDetail = () => {
    const location = useLocation();
    const selectedCountry = location.state?.country;

    console.log(selectedCountry);
    

    return (
        <div className='country-detail'>
            {selectedCountry ? (
                <>
                    <button>Back</button>
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
                                    <p><b>Top Level Domain: </b></p>
                                    <p><b>Currencies: </b></p>
                                    <p><b>Languages: </b></p>
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
