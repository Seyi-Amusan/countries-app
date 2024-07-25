import './App.css';
import React, { Component } from 'react';
import Countries from './components/countries';

const regions = ['Africa', 'Asia', 'Oceania', 'Europe', 'Americas']

//functions to handle countries filtering
function filterBySearchString(countryList, str) {
  return countryList.filter((country) => {
    return country.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
  })
}

function filterByRegion(countryList, region) {
  return countryList.filter((country) => {
    return country.region === region
  })
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
    countries: [],
    filteredCountries: [],
    isDarkTheme: false,
  }

  componentDidMount() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            this.setState({ countries: data })
            this.setState({filteredCountries: data})
        })
  }

  toggleTheme = () => {
    this.setState(
      prevState => ({ isDarkTheme: !prevState.isDarkTheme }),
      () => {
        if (this.state.isDarkTheme) {
          document.documentElement.classList.add('dark-theme');
        } else {
          document.documentElement.classList.remove('dark-theme');
        }
      }
    );
  };
  
  
  render() { 
    return (
      <div className="App">
  
        <div className='header'>
          <h2>Where in the world</h2>
          <button onClick={this.toggleTheme}>{this.state.isDarkTheme ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
  
        <div className='filter-box'>
          <input
            placeholder='Search for a country'
            onChange={(event) => {

            const searchString = event.target.value

            let newCountriesListFromStringFilter = filterBySearchString(this.state.countries, searchString)

            this.setState({
              filteredCountries: newCountriesListFromStringFilter
            })

            
          }}></input>

          <select defaultValue='' name="regions" required>
            <option value="" disabled>Filter by region</option>

            {regions.map((region, index) => {
              return <option
                key={index}
                value={region.toLocaleLowerCase()}
                onClick={() => 
                {
                  
                  let newCountriesListFromRegionFilter = filterByRegion(this.state.countries, region)
                  
                  this.setState({
                    filteredCountries: newCountriesListFromRegionFilter
                  })

                }
                }>{region}</option>
            })}
          </select>
          
        </div>
  
        <Countries countryList={this.state.filteredCountries }/>
      </div>
    );
  }
}
 
export default App;

