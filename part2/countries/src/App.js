import React from 'react'
import { useEffect, useState } from 'react'
import getAll from './services/countryService'

import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const App = () => {
  const [countriesList, setCountriesList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getAll()
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
      <SearchResults searchResults={searchResults} setSearchResults={setSearchResults}/>
    </div>
  );
}

export default App;
