import React from 'react'
import { useEffect, useState } from 'react'
import countryService from './services/countryService'

import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

function App() {
  const [countriesList, setCountriesList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [showCountry, setShowCountry] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    countryService.getAll()
      .then(countryData => setCountriesList(countryData))
  },[])

  const searchTermChanged = (text) => {
    setSearchText(text)
    const results = countriesList.filter(country => country.name.common.toLowerCase().includes(text))
    setSearchResults(results)
  }

  return (
    <div>
      <h3>Search for countries</h3>
      <SearchBar searchText={searchText} searchTermChanged={searchTermChanged}/>
      <SearchResults countries={countriesList} setSearchText={setSearchText}
                      searchResults={searchResults} setSearchResults={setSearchResults}/>
    </div>
  );
}

export default App;
