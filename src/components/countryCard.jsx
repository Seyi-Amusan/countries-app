import React from 'react';

import { Link } from 'react-router-dom';

function CountryCard(props) {
    const {
        name,
        population,
        region,  
        capital,
        flag } = props.info
    
    return (
        <div>
            <Link to={name}>
                <div className='country-card'>

                    <div className="flag-container">
                        <img src={flag} alt="" className='flag' />
                    </div>

                    
                    <div className='country-info-container'>
                        <h2>{name}</h2>
                        <p>Popluation: { population }</p>
                        <p>Region: { region }</p>
                        <p>Capital: { capital }</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

 
export default CountryCard;