import CountryCard from './countryCard';


function Countries(props) {
    const {countryList} = props
    return ( 
        <div className='countries-container'>
            {countryList.map((country, index) => (
                <CountryCard key={index} info={country} />
            ))}
        </div>
     );
}

export default Countries;
 