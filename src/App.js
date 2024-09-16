import './App.css';
import React, { Component } from 'react';
import Countries from './components/countries';
import CountryDetail from './components/countryDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const regions = ['Africa', 'Asia', 'Oceania', 'Europe', 'Americas'];

//functions to handle countries filtering
function filterBySearchString(countryList, str) {
  return countryList.filter((country) =>
    country.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
  );
}

function filterByRegion(countryList, region) {
  return countryList.filter((country) =>
    country.region.toLocaleLowerCase() === region.toLocaleLowerCase()
  );
}

class App extends Component {
  state = {
    countries: [],
    filteredCountries: [],
    isDarkTheme: false,
  };


  componentDidMount() {
    
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data, filteredCountries: data });
      });
  }

  toggleTheme = () => {
    this.setState(
      (prevState) => ({ isDarkTheme: !prevState.isDarkTheme }),
      () => {
        if (this.state.isDarkTheme) {
          document.documentElement.classList.add('dark-theme');
        } else {
          document.documentElement.classList.remove('dark-theme');
        }
      }
    );
  };

  handleSearchChange = (event) => {
    const searchString = event.target.value;
    const newCountriesListFromStringFilter = filterBySearchString(this.state.countries, searchString);
    this.setState({ filteredCountries: newCountriesListFromStringFilter });
  };

  handleRegionChange = (event) => {
    const region = event.target.value;
    const newCountriesListFromRegionFilter = filterByRegion(this.state.countries, region);
    this.setState({ filteredCountries: newCountriesListFromRegionFilter });
  };

  render() {
    return (
      <BrowserRouter basename='countries-app'>
        <div className="App">
          <div className="header">
            <h2>Where in the world</h2>
            <button onClick={this.toggleTheme}>
              {this.state.isDarkTheme ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <div className="filter-box">
            <input
              placeholder="Search for a country"
              onChange={this.handleSearchChange}
            />

            <select defaultValue="" name="regions" onChange={this.handleRegionChange}>
              <option value="" disabled>
                Filter by region
              </option>
              {regions.map((region, index) => (
                <option key={index} value={region.toLocaleLowerCase()}>
                  {region}
                </option>
              ))} 
            </select>
          </div>

          <Routes>
            <Route index element={<Countries countryList={this.state.filteredCountries} />} />
            <Route path="/:countryName" element={<CountryDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
